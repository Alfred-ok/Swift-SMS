import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

function NetworkPieChart() {
  return (
    <>
        <CChart
            style={{ padding: '10px', width: '100%'}}
            type="doughnut"
            data={{
                labels: ['Safaricom'],
                datasets: [
                {
                    backgroundColor: [ '#fff','green'],
                    data: [20, 80],
                },
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
            }}
        />
    </>
  )
}

export default NetworkPieChart