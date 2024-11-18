import React from 'react'

import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

function NetworkChartLine() {


  return (
    
    <>
    <div id="chart"></div>
    {
        
    <CChart
        style={{width: '100%'}}
        type="line" 
        data={{
            labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
            datasets: [
            {
                label: "SAFCOM",
                backgroundColor: "green",
                borderColor: "green",
                pointBackgroundColor: "green",
                pointBorderColor: "#fff",
                data: [20, 25, 20, 10, 8, 15, 20, 28, 25,15,20,60]
            },
            /*
            {
                label: "AIRTEL",
                backgroundColor: "red",
                borderColor: "red",
                pointBackgroundColor: "red",
                pointBorderColor: "#fff",
                data: [10, 8, 4, 3, 0, 4, 8, 9, 8,5,3,2,0]
            },
            
            {
                label: "TELKOM",
                backgroundColor: "skyblue",
                borderColor: "skyblue",
                pointBackgroundColor: "skyblue",
                pointBorderColor: "#fff",
                data: [0, 2, 3, 4, 0, 4, 6, 4, 0,10,8,5,3]
            },
            {
                label: "FAIBA",
                backgroundColor: "#eedc5b",
                borderColor: "#eedc5b",
                pointBackgroundColor: "#eedc5b",
                pointBorderColor: "#fff",
                data: [3, 2, 2, 3, 4, 5, 3, 4, 6,8,6,5,3]
            },
            */
           ],
        }}
        options={{
            plugins: {
            legend: {
                labels: {
                color: getStyle('--cui-body-color'),
                }
            }
            },
            scales: {
            x: {
                grid: {
                color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                color: getStyle('--cui-body-color'),
                },
            },
            y: {
                grid: {
                color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                color: getStyle('--cui-body-color'),
                },
            },
            },
        }}
        />
  
    }



    </>
  )
}

export default NetworkChartLine
