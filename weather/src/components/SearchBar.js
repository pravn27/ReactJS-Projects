import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchInput: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({searchInput : event.target.value });
        //fetch weather data
    }

    render(){
        return(
            <form onSubmit={ (event) => event.preventDefault() } className='input-group'>
                <input placeholder='Enter city' className='form-control'
                    value={this.state.searchInput}
                    onChange={this.onInputChange}/>
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        )
    }
}

export default SearchBar;