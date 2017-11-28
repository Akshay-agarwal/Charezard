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
      flightData:{},
      novFlightBookings:{},
      airlineCompanyData:{},
      revenueAirline:{},
      carData:{},
      novCarBookings:{},
      carCompanyData:{},
      revenueCarRental:{},
      hotelData:{},
      novHotelBookings:{},
      hotelCompanyData:{},
      revenueHotel:{}
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
              21,
              44,
              35
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
  
      airlineCompanyData:{
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
              142,
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
      
      
      // Car Analytics Data
      
      carData:{
        labels: ['Los Angeles', 'Las Vegas', 'Orlando', 'Seattle', 'New York', 'Dallas', 'San Francisco', 'Miami','Denver', 'San Jose'],
        datasets:[
          {
            label:'Cities',
            data:[
              58,
              53,
              46,
              40,
              37,
              32,
              28,
              24,
              20,
              17,
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
  
      novCarBookings:{
        labels: ['5', '10', '15', '20', '25', '30'],
        datasets:[
          {
            label:'Days in November',
            data:[
              199,
              252,
              191,
              160,
              303,
              100
            ],
            backgroundColor:[
              'rgba(153, 102, 255, 0.6)',
            ]
          }
        ]
      },
      
      carCompanyData:{
        labels: ['Enterprise', 'Hertz', 'National', 'Avis', 'Budget'],
        datasets:[
          {
            label:'Rental Company',
            data:[
              1346,
              1008,
              870,
              692,
              320
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(123, 192, 64, 0.6)'
            ]
          }
        ]
      },
  
      revenueCarRental:{
        labels: ['Enterprise', 'Hertz', 'National', 'Avis', 'Budget'],
        datasets:[
          {
            label:'Airports',
            data:[
              56,
              48,
              40,
              26,
              20
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },
  
      // Hotel Analytics Data
  
      hotelData:{
        labels: ['Los Angeles', 'Las Vegas', 'Miami', 'Lake Tahoe', 'New York', 'Chicago', 'San Diego', 'Maui','Seattle', 'Portland'],
        datasets:[
          {
            label:'Cities',
            data:[
              58,
              53,
              46,
              40,
              37,
              32,
              28,
              24,
              20,
              17,
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
  
      novHotelBookings:{
        labels: ['5', '10', '15', '20', '25', '30'],
        datasets:[
          {
            label:'Days in November',
            data:[
              199,
              252,
              191,
              160,
              303,
              100
            ],
            backgroundColor:[
              'rgba(153, 102, 255, 0.6)',
            ]
          }
        ]
      },
  
      hotelCompanyData:{
        labels: ['Enterprise', 'Hertz', 'National', 'Avis', 'Budget'],
        datasets:[
          {
            label:'Rental Company',
            data:[
              1346,
              1008,
              870,
              692,
              320
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(123, 192, 64, 0.6)'
            ]
          }
        ]
      },
  
      revenueHotel:{
        labels: ['Enterprise', 'Hertz', 'National', 'Avis', 'Budget'],
        datasets:[
          {
            label:'Airports',
            data:[
              56,
              48,
              40,
              26,
              20
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
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
                     airlineCompanyData={this.state.airlineCompanyData}
                     revenueAirline={this.state.revenueAirline}
                     legendPosition="bottom"/>
        <CarChart carData={this.state.carData}
                  novCarBookings={this.state.novCarBookings}
                  carCompanyData={this.state.carCompanyData}
                  revenueCarRental={this.state.revenueCarRental}
                  legendPosition="bottom"/>
        <HotelChart hotelData={this.state.hotelData}
                    novHotelBookings={this.state.novHotelBookings}
                    hotelCompanyData={this.state.hotelCompanyData}
                    revenueHotel={this.state.revenueHotel}
                    legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
