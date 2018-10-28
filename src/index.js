import React from "react";
import { render} from 'react-dom';
import { createStore  } from 'redux'
import { Provider  } from 'react-redux'

import Routers from './route'
import reducer from './reducers/index'
let store = createStore(reducer);
//store.dispatch({
//type: 'ADD_TODO',
//text: 'Use Redux'
//})
store.subscribe(() => {
	console.log(store.getState())
})

render(
	<Provider store={store}>
		<Routers/>
	</Provider>
, document.getElementById('root'))
