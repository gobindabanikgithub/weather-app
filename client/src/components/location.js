import React, { Component } from 'react'
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

 class location extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          weatherData:'',
          loading: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        // console.log(event);
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log(event);
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        let place = this.state.value;
        var self = this;  
        this.setState({loading:true});
        axios.get(`/api/v1/getWeather/${place}`)
        .then(res => {
          console.log(res);
          if(!res.data.status || res.status==401){
            console.log("error");
          }else{
            if(res.data && res.data.message=="WEATHER_FORECAST_DATA"){
              console.log(res.data);
              self.setState({loading:false});
              self.setState({weatherData: res.data.forecastData})
            }
          }
          
        })

      }
    
      render() {
        const cardStyle = {
          color: "white",
          backgroundColor: "#f5f5f5f6",
          padding: "10px",
          fontFamily: "Arial",
          height:"655px",
          width: "100%",
        };

        const formStyle ={
          marginTop: "150px"
          
        }

        const spinnerStyle={
          justifyContent: 'center',
           }

        return (
          <div className="card" style={cardStyle}>
            {/* <div style={spinnerStyle}>
              <ClipLoader  size={50} color={"#123abc"} loading={this.state.loading} />
            </div> */}
            
          <form onSubmit={this.handleSubmit} style={formStyle} className="text-center">
              <label style={{color: "black"}}>
                Name:
              </label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>
          <div className="text-center mt-5" style={{color: "black"}}>{this.state.weatherData}</div>
          </div>
        );
      }
}


export default location;