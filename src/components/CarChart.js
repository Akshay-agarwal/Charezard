import React, {Component} from 'react';
import {Bar, Line, Pie, HorizontalBar} from 'react-chartjs-2';

class CarChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      carData:props.carData,
      novCarBookings:props.novCarBookings,
      carCompanyData:props.carCompanyData,
      revenueCarRental:props.revenueCarRental
  }
  
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }
  
  render(){
    return (
      <div className="chart">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Bar
                data={this.state.flightData}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Most Popular Airports',
                    fontSize:15
                  },
                  legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                  }
                }}
              />
            </div>
            <div className="col-lg-6">
              <Line
                data={this.state.novFlightBookings}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Tickets Sold in November ',
                    fontSize:15
                  },
                  legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                  }
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Bar
                data={this.state.airlineData}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Most Popular Airlines',
                    fontSize:15
                  },
                  legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                  }
                }}
              />
            </div>
            <div className="col-lg-6">
              <Pie
                data={this.state.revenueAirline}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Airline wise revenue ',
                    fontSize:15
                  },
                  legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                  }
                }}
              />
            </div>
          
          </div>
        </div>
      </div>
    )
  }
}

export default CarChart;
