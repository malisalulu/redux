import React, { Component } from 'react'
//import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Hello from './header'
//import './App.css';
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number,index) =>
    <li key={index}>{index}-{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1, 2, 3, 4, 5];
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}
class About extends Component{
  constructor(...props) {
    super(...props);
    this.state = {
    	  id:1,
      value: 'coconut',
      isGoing: true,
      numberOfGuests: 2,
      temperature: '',
      commonValue: 'Hello Runoob!'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
//	this.add =this.add.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChangeCommon = this.handleChangeCommon.bind(this);
  }
  componentDidMount() {
  	 
  }
 
  handleChangeCommon(event) {
    this.setState({commonValue: event.target.value});
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  add(){
//  let id = this.state.id;
//  id++;
    this.setState({id:this.state.id+1});
  }
  handleChange2(e) {
    this.setState({temperature: e.target.value});
  }
  focus() {
    // 使用原生的 DOM API 获取焦点
    this.refs.myInput.focus();
  }
  render() {
//  const temperature = this.state.temperature;
	const {increment, decrement, counter} = this.props;
	
    return (
    	<div>
    		<button>redux {counter}</button>
    		<button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        
    		<Hello myDataProp = {this.state.commonValue}  updateStateProp = {this.handleChangeCommon} ></Hello>
    		<h3>About</h3>
        <p><Link to="/about/about1">About1</Link></p>
        <p><Link to="/about/about2">About2</Link></p>
        <p><Link to="/msg">Msg</Link></p>
        
        <p onClick={this.add.bind(this)}>点击加一{this.state.id}</p>
        <NumberList numbers={numbers} />
        <input type="text" ref="myInput" value=""/>
        <input type="button" value="点我输入框获取焦点" onClick={this.focus.bind(this)}/>
        <form onSubmit={this.handleSubmit}>
          <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>


          <label>
            Pick your favorite La Croix flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />

          <fieldset>
             <legend>输入一个摄氏温度</legend>
             <input
               value={this.state.temperature}
               onChange={this.handleChange2} />

             <BoilingVerdict
               celsius={parseFloat(this.state.temperature)} />

           </fieldset>
        </form>
    	</div>
    )
  }
}

//export default About;
//将state.counter绑定到props的counter
const mapStateToProps = (state)=> {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps=(dispatch)=> {
  return {
    increment(){
		dispatch({
			type: 'INCREMENT',n:5
		})
    },
    decrement(){
    		dispatch({
        		type: 'DECREMENT',n:2
      	})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
