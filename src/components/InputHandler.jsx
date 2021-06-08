import React, { Component } from 'react';
class InputHandler extends Component {
    state = {  }
    render() { 
        return ( 
        <div className='col-4'>
        <input style={{width: '70%', marginRight: 8}} type="text" />
        <button className='btn btn-primary'>ADD</button>
        </div> 
    );
    }
}
 
export default InputHandler;