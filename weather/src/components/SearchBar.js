import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchInput: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault();
        //Dispatch fetchWeather action creator
        this.props.fetchWeather(this.state.searchInput);
        this.setState({ searchInput : '' })
    }

    onInputChange(event){
        this.setState({searchInput : event.target.value });
    }

    render(){
        return(
            <form onSubmit={ this.onFormSubmit } className='input-group'>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);