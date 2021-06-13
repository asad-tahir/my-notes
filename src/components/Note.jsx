import React, { Component } from 'react';
import { AiFillDelete } from 'react-icons/ai';
class Note extends Component {
    constructor(props) {
        super();
        this.deleteHandler = this.deleteHandler.bind(this);
    }
    deleteHandler(){
        this.props.deleteNote(this.props.note);
    }
    state = {}
    render() {
        return (
            <div className='col-3'>
                <div className='p-2 border' style={{ minHeight: 50, borderRadius: 8 }}>
                    <div className='row justify-content-between'>
                        <div className='col'>{this.props.note.value}</div>
                        <div className='col-3'><button onClick={this.deleteHandler} className='btn btn-outline-light text-danger m-1'><AiFillDelete /></button></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Note;