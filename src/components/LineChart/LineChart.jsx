import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData, combinedData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (combinedData) {
      setData(combinedData); // Use combined historical + predicted data
    } else if (historicalData.prices) {
      let dataCopy = [["Date", "Prices"]];
      historicalData.prices.forEach((item) => {
        dataCopy.push([new Date(item[0]).toLocaleDateString().slice(0, -5), item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData, combinedData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      legendToggle
      chartPackages={['corechart', 'controls']}
      options={{
        hAxis: { title: 'Date' },
        vAxis: { title: 'Price' },
        colors: ['#7927ff'], // Match your theme
        curveType: 'function',
      }}
    />
  );
};

export default LineChart;



// import React, { useEffect, useState } from 'react'
// import Chart from 'react-google-charts'

// const LineChart = ({historicalData}) => {

// const [data, setData] = useState([["Date","Prices"]])

// useEffect(()=>{
//     let dataCopy = [["Date", "Prices"]];
//     if (historicalData.prices){
//         historicalData.prices.map((item)=>{
//             dataCopy.push([`${new Date(item[0]).toLocaleDateString().
//                 slice(0,-5)}`,item[1]])
//         })
//         setData(dataCopy);
//     }
// },[historicalData])
//   return (
//     <Chart
//         chartType='LineChart'
//         data = {data}
//         height="100%"
//         legendToggle
//     />
//   )
// }

// export default LineChart