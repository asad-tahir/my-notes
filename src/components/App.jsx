import React, { Component, Fragment } from 'react';
import InputHandler from './InputHandler';
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='row mt-3'>
                <div className='col-4'></div>
                <InputHandler/>
                <div className='col-4'></div>
            </div>
         );
    }
}
 
export default App;