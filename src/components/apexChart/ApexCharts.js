import React from 'react'
import Chart from 'react-apexcharts'
import { Grid } from '@material-ui/core'
function ApexCharts() {
  return (
      <>
    <div>ApexCharts</div>
    <Grid>
        <Grid item>
            <Chart
            type="bar"
            width={600}
            height={600}
            series={[
                {
                    name:"Company1",
                    data:[100,200,300,123,145,432],
                    color:'#30306a'
                },
                {
                    name:"Company2",
                    data:[140,220,100,143,165,232],
                    color:'#00bcd4'
                },
                {
                    name:"Company3",
                    data:[240,250,120,153,115,132],
                    color:'#bcd400'
                }
            ]}
            options={{
                // colors:['#30306a','#00bcd4','#bcd400']
                chart:{
                    stacked:true
                },
                theme:{
                    mode:'dark'
                },
                tooltip:{
                    followCursor:true
                },
                dataLabels:{
                    formatter:(val)=>{
                        return `$${val}`
                    },
                    style:{
                       colors: ['#00bcd4','#30306a'],
                        fontSize:14
                    }
                },
                yaxis:{
                   lables:{
                       formatter:(val)=>{
                           return `value is $${val}`
                       }
                   }
                } 
            }}
            >

            </Chart>
        </Grid>
        <Grid item>
            <Chart 
            type="pie"
            width={400}
            height={500}
            series={[300,340,260,260,530,100]}
            options={{
                dataLabels:{
                    formatter:(val)=>{
                        return `${val}`
                    },
                    style:{
                       colors: ['#00bcd4','#30306a','#bcd400'],
                        fontSize:14
                    }
                },
            }}
            >

            </Chart>
        </Grid>
    </Grid>
    </>
  )
}

export default ApexCharts