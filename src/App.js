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
      flightData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      flightData:{
        labels: ['SFO', 'LHR', 'DXB', 'BOM', 'LAX', 'DEL', 'NYC', 'ABD','SJC', 'ORD'],
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
      carData:{
        labels: ['SFO', 'BOM', 'LAX', 'DEL', 'NYC', 'ABD'],
        datasets:[
          {
            label:'Population',
            data:[
              156,
              92,
              123,
              77,
              190,
              90
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }

    });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Chart carData={this.state.carData} flightData={this.state.flightData}  legendPosition="bottom"/>
        <FlightChart carData={this.state.carData} flightData={this.state.flightData}  legendPosition="bottom"/>
        <CarChart carData={this.state.carData} flightData={this.state.flightData}  legendPosition="bottom"/>
        <HotelChart carData={this.state.carData} flightData={this.state.flightData}  legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
