import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import CarChart from './components/CarChart';
import FlightChart from './components/FlightChart';
import HotelChart from './components/HotelChart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartBookingData:{},
      chartRevenueData:{},
      carData:{},
      flightData:{},
      novFlightBookings:{},
      airlineData:{},
      revenueAirline:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      // The Main Chart Data Goes here.
      chartBookingData:{
        labels: ['Flights', 'Hotels', 'Cars'],
        datasets:[
          {
            label:'Population',
            data:[
              24,
              44,
              32
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ]
          }
        ]
      },

      chartRevenueDataData:{
        labels: ['Flights', 'Hotels', 'Cars'],
        datasets:[
          {
            label:'Population',
            data:[
              62,
              26,
              12
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ]
          }
        ]
      },

      // Data for flight Analytics is here
      flightData:{
        labels: ['SFO', 'LHR', 'DXB', 'BOM', 'LAX', 'DEL', 'NYC', 'ABD','SJC', 'ORD'],
        datasets:[
          {
            label:'Airports',
            data:[
              190,
              166,
              144,
              123,
              112,
              90,
              70,
              59,
              46,
              40,

            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 192, 64, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 55, 0.6)',
              'rgba(255, 192, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },

      novFlightBookings:{
        labels: ['5', '10', '15', '20', '25', '30'],
        datasets:[
          {
            label:'Days in November',
            data:[
              156,
              92,
              123,
              77,
              190,
              90
            ],
            backgroundColor:[
              'rgba(153, 102, 255, 0.6)',
            ]
          }
        ]
      },

      airlineData:{
        labels: ['Air India', 'United', 'Delta', 'Ethihad', 'SouthWest', 'Emirates', 'Air China', 'British','Lufthansa'],
        datasets:[
          {
            label:'Airlines',
            data:[
              720,
              608,
              598,
              592,
              488,
              426,
              364,
              325,
              250,
              120
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 192, 64, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 55, 0.6)',
              'rgba(255, 192, 64, 0.6)',
              'rgba(255, 192, 64, 0.6)',
              'rgba(123, 192, 64, 0.6)'
            ]
          }
        ]
      },
  
      revenueAirline:{
        labels: ['Air India', 'United', 'Delta', 'Ethihad', 'SouthWest', 'Emirates', 'Air China', 'British','Lufthansa'],
        datasets:[
          {
            label:'Airports',
            data:[
              190,
              156,
              92,
              123,
              77,
              90,
              50,
              40,
              30,
              40,
        
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 192, 64, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 55, 0.6)',
              'rgba(255, 192, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },

    });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Chart chartBookingData={this.state.chartBookingData}
               chartRevenueDataData={this.state.chartRevenueDataData}
               legendPosition="bottom"/>
        <FlightChart novFlightBookings={this.state.novFlightBookings}
                     flightData={this.state.flightData}
                     airlineData={this.state.airlineData}
                     revenueAirline={this.state.revenueAirline}
                     legendPosition="bottom"/>
        <CarChart novFlightBookings={this.state.novFlightBookings}
                  flightData={this.state.flightData}
                  legendPosition="bottom"/>
        <HotelChart novFlightBookings={this.state.novFlightBookings}
                    flightData={this.state.flightData}
                    legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
