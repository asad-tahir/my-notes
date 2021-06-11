import React, { Component } from 'react';
import { IoAdd } from 'react-icons/io5';
class InputHandler extends Component {
    constructor(props){
        super();
        this.addButtonHandler = this.addButtonHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({input: e.target.value})
    }
    addButtonHandler(){
        this.props.addNote(this.state.input);
        this.resetInput();
    }
    resetInput = () =>{
        this.setState({input: ''})
    }
    state = {
        input: ''
    }
    render() {
        return (
            <div className='col-4'>
                <div className='input-group'>
                    <input type='text' className="form-control" value={this.state.input} onChange={this.handleChange} placeholder='Take a note...' />
                    <button onClick={this.addButtonHandler} type='button' className='btn btn-outline-secondary'><IoAdd /></button>
                </div>
            </div>
        );
    }
}

export default InputHandler;