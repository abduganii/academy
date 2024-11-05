// components/ColoredMap.tsx
import React, { useLayoutEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';

type CountryColor = {
  id: string;
  color: string;
};

const ColoredMap: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current!);

    // Set up the map chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
      })
    );

    // Define colors for specific countries
    const countryColors: CountryColor[] = [
      { id: 'US', color: '#FF6B6B' }, // USA
      { id: 'FR', color: '#6BFFB5' }, // France
      { id: 'UZ', color: '#FFC36B' }, // Uzbekistan
    ];

    // Add polygon series for countries
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );

    // Set default fill to white and add a black border for all countries
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      fill: am5.color(0xffffff),
      stroke: am5.color(0x999999), // Black border color
      strokeWidth: .2, // Border width
    });

    // Apply custom colors to specific countries
    polygonSeries.mapPolygons.template.adapters.add('fill', (fill, target:any) => {
      const country = countryColors.find((c) => c.id === target.dataItem?.get('id'));
      return country ? am5.color(country.color) : fill;
    });

    // Optional: hover effect
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xdddddd),
    });

    return () => {
      root.dispose();
    };
  }, []);

  return <div ref={chartRef} className='bg-[#E4F3F9]' style={{ width: '100%', height: '500px' }} />;
};

export default ColoredMap;