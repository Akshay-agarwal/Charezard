import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class CarChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      novFlightBookings:props.novFlightBookings,
      flightData:props.flightData

    }
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
            <div className="col-sm-6">
              <Bar
                data={this.state.flightData}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Most Popular Airports',
                    fontSize:12
                  },
                  legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                  }
                }}
              />
            </div>
            <div className="col-sm-6">
              <Line
                data={this.state.novFlightBookings}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Largest Cities In ',
                    fontSize:12
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
              <Pie
                data={this.state.carData}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Largest Cities In ',
                    fontSize:12
                  },
                  legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                  }
                }}
              />
            </div>
            <div className="col-sm-6">
              <Pie
                data={this.state.carData}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Largest Cities In ',
                    fontSize:12
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
