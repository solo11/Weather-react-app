import React, { Component } from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY  ="4360380c85949acba961dc0e2187eb1f";



class App extends Component {

  state = {
  temperature:undefined,
  city:undefined,
  humidity:undefined,
  description:undefined,
  error: undefined
  }
   

  getWeather = async (e)=>{
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country = e.target.elements.country.value;
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();  
  console.log(data);
 
  if(city==="solomon")
  {
    this.setState({
      temperature:undefined,
    city:undefined,
    humidity:undefined,
    description:undefined,
    error: "Hey, Solomon",
    });
    return;
  }
 else if(data.cod==='404')
  {
    this.setState({
      temperature:undefined,
    city:undefined,
    humidity:undefined,
    description:undefined,
    error: "Please check the vlaues entered "
    });
    
  }
  else{
  if (city && country){
  this.setState({
    temperature:data.list[0].main.temp,
    city:data.city.name,
    country:data.city.country,
    humidity:data.list[0].main.humidity,
    description:data.list[0].weather[0].description,
    error:""
  });
}
else {
  this.setState ( {
    temperature:undefined,
    city:undefined,
    humidity:undefined,
    description:undefined,
    error: "Please enter the vlaues"
    }
  );
}
  }
}

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <table className="table">
                  <tr className="t-row">
                    <td className="col1">
                <div className="col-xs-5 title-container">
                <Titles />
                </div>
                </td><td className="col2">
                <div className=" form-container">
                <Form getWeather={this.getWeather}/>
                 <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  humidity={this.state.humidity}
                  error={this.state.error}/>
                </div></td>
                </tr>
                </table>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default App;
