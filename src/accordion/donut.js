// import React ,{useState, useEffect}from "react";
import React from 'react';
import Chart from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.css';


function Donutchart()
{
    // const [contryname, setCountryname]= useState([]);
    // const [medal, setMedal]= useState([]);

    // useEffect( ()=>{
    //  const getdata= async()=>{
    //       const countryname=[];
    //       const getmedal=[];

    //     const reqData= await fetch("http://localhost/reactgraphtutorial/medals"); 
    //     const resData= await reqData.json();
    //     for(let i=0; i<resData.length; i++)
    //     {
    //         countryname.push(resData[i].country);
    //         getmedal.push(parseInt(resData[i].medals));
    //     }
    //     setCountryname(countryname);
    //     setMedal(getmedal);
     

    //  }
    //  getdata();
    // },[]);

    //  const legendFormatter = function (val, opts) {
    //         const seriesIndex = opts.seriesIndex;
    //         const total = opts.w.globals.seriesTotals[seriesIndex];
    //         console.log('opts', total,'---',val)
    //         // const number = val == "USA" ? 45 : val == "China" ? 67 : val == "Russia" ? 89 : val == "India" ? 34 :
    //         // val == "UK"? 43 : 90
    //         // const number = val == "USA" ? 0 : val == "China" ? 1 : val == "Russia" ? 2 : val == "India" ? 3 :
    //         // val == "UK"? 4 : 5
    //         // console.log('number===>',number);
    //         // const percentage = ((number / total) * 100).toFixed(2);
    //         // const toal_num =  total
    //         const percentage = ((total / 368) * 100).toFixed(2);
    //         console.log('percentage',percentage)
    //         console.log('seriesTotals:', opts.w.globals.seriesTotals);
    //         console.log('val type:', typeof val);
    //         console.log('total type:', typeof total);
    //         return `${val} (${percentage}%)`;
    //       };
      
    // const legendFormatter = function (val, opts) {
    //     const seriesIndex = opts.seriesIndex;
    //     const total = opts.w.globals.seriesTotals[seriesIndex];
    //     const seriesSum = opts.w.globals.series.reduce((a, b) => a + b, 0);
    //     const percentage = ((total / seriesSum) * 100).toFixed(2);
      
    //     return `${val} (${percentage}%)`;
    //   };

    const legendFormatter = function (val, opts) {
        const seriesIndex = opts.seriesIndex;
        const total = opts.w.globals.seriesTotals[seriesIndex];
        const percentage = Math.round(((total / opts.w.globals.seriesTotals.reduce((a, b) => a + b)) * 100).toFixed(2));
        // const percentage = (total / opts.w.globals.seriesTotals.reduce((a, b) => a + b)) * 100;
        console.log("total",opts.w.globals.seriesTotals.reduce((a,b) => a+b, 0), "----", percentage)
        return `${val} (${percentage}%)`;
      };
      
    return(
        <React.Fragment>
            <div className='container-fluid mt-3 mb-3'>        
            <h2 className="text-left text-primary">Donut Chart</h2>
            <Chart 
            type="donut"
            // width={300}
            height={ 200}
            // series={medal}
            series={[45,67,89,34,43,90]}

            options={{
            //  labels:contryname,
             labels:["USA","China","Russia","India","UK","Japan"],
             title:{
                text:"Medal Country Name",
                style: {
                    color: "#34FFFF"
                }
               // align:"center",
             },
            
             legend: {
                // show: false,
                position: 'right',
                // formatter: (val, opts) => legendFormatter(val, opts),
                formatter: legendFormatter,
                labels: {
                    colors: undefined,
                    useSeriesColors: true,                 
                },
                markers: {
                    width: 12,
                    height: 12,
                    strokeWidth: 0,
                    strokeColor: '#fff',
                    fillColors: undefined,
                    radius: 0,
                    customHTML: undefined,
                    onClick: undefined,
                    offsetX: 0,
                    offsetY: 0
                },
              },
                // color: ['#a5a5a4', '#ec7c30', '#a5a5a4', '#a98726','#4358c3',"#236737"],
                colors: ['#FE6A35', '#FEB01A', '#FF915C', '#00E272','#33FFA5',"#236737"],
                type: 'gradient',

                // fill: {
                //   colors: ['#FE6A35', '#ec7c30', '#FF915C', '#00E272','#33FFA5',"#236737"],
                //     type: 'gradient',
                // },
                responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }],
             plotOptions:{
             pie:{
                // expandOnClick: false,
                donut:{
                    size: '80px',
                    labels:{
                        show:true,
                        total:{
                            show:true,
                            showAlways:true,
                             //formatter: () => '343',
                            fontSize:12,
                            color: '#f90000',
                        },
                        value:{
                            show: true,
                            fontSize: '16px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            color: '#65FE51',
                            // offsetY: 16,
                            formatter: function (val) {
                                return val
                            }
                        }
                    }
                }
             }

             },

             dataLabels:{
                enabled:false,
                // style: {
                //     colors: ['#F44336', '#E91E63', '#9C27B0']
                //   }
             },
            //  tooltip: {
            //     custom: function ({ series, seriesIndex, w }) {
            //     //   const dataPointIndex = w.globals.series[seriesIndex]._meta[0].index;
            //     //   console.log("data",dataPointIndex)
            //       const value = series[seriesIndex];
            //       return '<div class="arrow_box">' +
            //         '<span>' + value + 'kwh' + '</span>' +
            //         '</div>';
            //     },
            //   },
            tooltip: {
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                  const value = series[seriesIndex];
                  const color = w.globals.colors[seriesIndex];
                  return '<div class="arrow_box" style="background-color:' + color + '">' +
                    '<span>' + value + 'kwh' + '</span>' +
                    '</div>';
                },
              },


            }}
            
            />

            </div>
        </React.Fragment>
    );
}
export default Donutchart;
