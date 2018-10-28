import React,{ Component }from 'react'
import { connect } from 'react-redux'
//父-子/子-父组件通信 
import Sub from "../sub/SubComponent.js";
//非嵌套组件间通信
import Foo from "../sub/Foo";
import Boo from "../sub/Boo";

class Msg extends Component{
	
//	子-父通信
	callback(msg){
        console.log(msg);
    }
	render() {
	  	const {counter} = this.props;
	    return (
		    	<div>
		    		<h3>msg</h3>
		    		
		    		<Sub title = "今年过节不收礼"  callback = { this.callback.bind(this) }/>
		    		<Foo />
                <Boo />
		    		
		    		<button>redux {counter}</button>
		    	</div>
	    )
	}
}

//将state.counter绑定到props的counter
const mapStateToProps = (state)=> {
    return {
        counter: state.counter
    }
};
export default connect(mapStateToProps)(Msg)
