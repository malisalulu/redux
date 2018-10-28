import React, { Component } from 'react'
class Hello extends Component{
  render(){
    return (
	    <div>
	    		 <h1>公共组件</h1>
	    		 <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
             <h4>{this.props.myDataProp}</h4>
	    </div>
    )
  }
}

export default Hello;
