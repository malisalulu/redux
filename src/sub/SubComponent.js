import React, { Component } from 'react'

class Sub extends Component{
//	constructor(props) {
//	    super(props)
//	    
//	}
	cb(msg){
        return () => {
            this.props.callback(msg)
        }
    }
	render() {
		return(
			<div>
				<h1>{ this.props.title }</h1>
				<button onClick = { this.cb("我们通信把") }>点击我</button>
			</div>
	        
	    )
	}
}

export default Sub;