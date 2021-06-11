import M from 'minimatch';
import React, { Component } from 'react';
import InputHandler from './components/InputHandler';
import Note from './components/Note'
class App extends Component {
    constructor() {
        super();
        this.addNote = this.addNote.bind(this);
    }
    state = {
        notes: [
            { id: 1, value: 'note 1' },
            { id: 2, value: 'note 2' },
            { id: 3, value: 'note 3' },
            { id: 4, value: 'note 4' },
            { id: 5, value: 'note 5' },
        ]
    }
    addNote(note){
        this.setState((state, props)=>({
            notes: [...state.notes, {id: state.notes.length + 1, value: note}]
        }))
    }
    render() {
        return (
            <div className='container-fluid m-0 p-0'>
                <div style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }} className='bg-primary px-3 py-3 text-center mb-3'>MY-NOTES</div>
                <div className='row'>
                    <div className='col-4'></div>
                    <InputHandler addNote = {this.addNote} />
                    <div className='col-4'></div>
                </div>
                <div className='container pt-5'>
                    <div className='row g-2'>
                        {this.state.notes.map(n => <Note key={n.id} note={n.value} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;