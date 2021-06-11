import React, { Component } from 'react';
class Note extends Component {
    constructor(props){
        super();
    }
    state = {  }
    render() { 
        return ( 
            <div className='col-3'><div className='p-2 border' style={{minHeight:50, borderRadius:8}}>{this.props.note}</div></div>
            
         );
    }
}
 
export default Note;