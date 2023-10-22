

import './App.css';
import {
  LineChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  Line
} from "recharts";
import {Component} from 'react'

export const data=[
  {
      "Id": 1,
      "Year": 2004,
      "Medals": 1
  },
  {
      "Id": 2,
      "Year": 2008,
      "Medals": 3
  },
  {
      "Id": 3,
      "Year": 2012,
      "Medals": 6
  },
  {
      "Id": 4,
      "Year": 2016,
      "Medals": 2
  },
  {
      "Id": 5,
      "Year": 2020,
      "Medals": 7
  }
]

class App extends Component{
  state={onTable:true}
  table=()=>{
    this.setState({onTable:true})
  }
  graph=()=>{
    this.setState({onTable:false})
  }
  render(){
    const {onTable}=this.state;
  return (
    <div>
      <h1>Harish Kumar</h1>
      <p>email:gundaharishkumar2@gmail.com</p>
      <p>contact:7995514062</p>
      <p>--------------------------</p>
      {onTable?
      (<div className="App">
        <table>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Medals</th>
          </tr>
          {data.map(each => (
            <tr>
              <th>{each.Id}</th>
              <th>{each.Year}</th>
              <th>{each.Medals}</th>
            </tr>
          ))}
        </table>
      </div>):
  (<LineChart width={730} height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis dataKey="Medals" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Year" stroke="#8884d8" />
        <Line type="monotone" dataKey="Medals" stroke="#82ca9d" />
      </LineChart>)};
   <button onClick={this.table}>Table</button>
   <button onClick={this.graph}>Graph</button> 
  </div>
  )
    }
}


export default App;
