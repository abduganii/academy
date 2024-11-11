// components/ColoredMap.tsx
import React, { useLayoutEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useRouter } from 'next/navigation';
type CountryColor = {
  id: string;
  color: string;
};

const ColoredMap: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const router = useRouter()
  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current!);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
      })
    );

    const countryColors: CountryColor[] = [
      { id: 'US', color: '#FF6B6B' }, 
      { id: 'FR', color: '#6BFFB5' },
      { id: 'UZ', color: '#FFC36B' },
    ];

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

   

    polygonSeries.mapPolygons.template.setAll({
      tooltipHTML: `<div>
        <h3 class='mb-[16px] text-[16px] leading-[26px] font-semibold'>{name}</h3>
        <div class="flex items-center justify-between gap-[32px]">
          <p class='mb-[16px] text-[16px] leading-[26px] font-normal'>Основное законодательство</p>
          <p class='mb-[16px] text-[16px] leading-[26px] font-semibold'>34/100</p>
        </div>
         <div class="flex items-center justify-between gap-[32px]">
          <p class='mb-[16px] text-[16px] leading-[26px] font-normal'>Основное законодательство</p>
          <p class='mb-[16px] text-[16px] leading-[26px] font-semibold'>34/100</p>
        </div>
      </div>`,
      fill: am5.color(0xffffff),
      stroke: am5.color(0x999999),
      strokeWidth: .2, 
      toggleKey: "active",
      interactive: true,
    });

    polygonSeries.mapPolygons.template.adapters.add('fill', (fill, target:any) => {
      const country = countryColors.find((c) => c.id === target.dataItem?.get('id'));
      return country ? am5.color(country.color) : fill;
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      stroke: am5.color(0x000000),       
      strokeWidth: .2,                  
      strokeOpacity: 0.8,               
    });
    // let previousPolygon: am5map.MapPolygon | undefined;

    polygonSeries.mapPolygons.template.on("active", function (active, target) {
      console.log(active,target,"sd")
      router.push('/country-information/1')

      // if (previousPolygon && previousPolygon !== target) {
      // }
      // if (target.get("active")) {
      // } else {
      //   chart.goHome();
      // }
      // previousPolygon = target;
    });

    const zoomControl = chart.set(
      "zoomControl",
      am5map.ZoomControl.new(root, {})
    );
    zoomControl.homeButton.set("visible", true);

    chart.chartContainer.get("background")?.events.on("click", () => {
      chart.goHome();
    });

    chart.appear(1000, 100);
   

    return () => {
      root.dispose();
    };
  }, []);

  return <div ref={chartRef} className='bg-[#E4F3F9]' style={{ width: '100%', height: '500px' }} />;
};

export default ColoredMap;