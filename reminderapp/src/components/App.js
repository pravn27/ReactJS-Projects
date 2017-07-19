import React, {Component} from 'react';
import { connect } from 'react-redux';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder(){
        console.log(this.state);
    }

    render(){
        return(
            <div className='App'>
                <div className='title'>Remainder Pro</div>
                <div className='form-inline'> 
                    <div className='form-group'>
                        <input 
                            className='form-control' 
                            placeholder='I have to...'
                            onChange={(event) => this.setState({ text: event.target.value })}
                        />
                    </div>
                    <button className='btn btn-success' type='button' onClick={() => this.addReminder()}>Add Reminder</button> 
                </div>
            </div>
        )
    }
}

export default App;