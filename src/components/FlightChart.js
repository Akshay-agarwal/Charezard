import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class FlightChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            carData:props.carData,
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
                        <div className="col-md-4">
                            <Bar
                                data={this.state.flightData}
                                width={50}
                                height={50}
                                options={{
                                    title:{
                                        display:this.props.displayTitle,
                                        text:'No of Flights per week',
                                        fontSize:12
                                    },
                                    legend:{
                                        display:this.props.displayLegend,
                                        position:this.props.legendPosition
                                    }
                                }}
                            />
                        </div>
                        <div className="col-md-4">
                            <Line
                                data={this.state.carData}
                                width={50}
                                height={50}
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
                        <div className="col-md-4">
                            <Pie
                                data={this.state.carData}
                                width={50}
                                height={50}
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

export default FlightChart;
