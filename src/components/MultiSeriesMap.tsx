// "use client"
// import React, { useLayoutEffect, useRef } from 'react';
// import * as am5 from '@amcharts/amcharts5';
// import * as am5map from '@amcharts/amcharts5/map';
// import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';

// const MultiSeriesMap: React.FC = () => {
//   const chartRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const root = am5.Root.new(chartRef.current!);

//     // Set up the map chart
//     const chart = root.container.children.push(
//       am5map.MapChart.new(root, {
//         projection: am5map.geoMercator(),
//       })
//     );

//     // Add polygon series for countries
//     const polygonSeries = chart.series.push(
//       am5map.MapPolygonSeries.new(root, {
//         geoJSON: am5geodata_worldLow,
//       })
//     );

//     polygonSeries.mapPolygons.template.setAll({
//       tooltipText: '{name}',
//       fill: am5.color(0x74b9ff),
//     });

//     // Add another series for specific data (e.g., markers or different countries)
//     const pointSeries = chart.series.push(
//       am5map.MapPointSeries.new(root, {})
//     );

//     pointSeries.bullets.push(() => {
//       const circle = am5.Circle.new(root, {
//         radius: 5,
//         fill: am5.color(0xff6b6b),
//         tooltipText: 'Data point',
//       });
//       return am5.Bullet.new(root, {
//         sprite: circle,
//       });
//     });

//     // Example data for the point series
//     pointSeries.data.setAll([
//       { geometry: { type: 'Point', coordinates: [-77.0369, 38.9072] }, title: 'Washington, D.C.' },
//       { geometry: { type: 'Point', coordinates: [2.3522, 48.8566] }, title: 'Paris' },
//     ]);

//     return () => {
//       root.dispose();
//     };
//   }, []);

//   return <div ref={chartRef} style={{ width: '100%', height: '500px' }} />;
// };

// export default MultiSeriesMap;
