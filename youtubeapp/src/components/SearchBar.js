import React, { Component } from 'react';
import '../style.css';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    onInputChange(searchInput){
        this.props.onSearchInputChange(searchInput);
    }

    render(){
        return(
             <div className="input-group search-bar">
                <input className="form-control" placeholder='Search...'
                    value={this.state.searchInput}
                    onKeyPress={(event) => {
                        if(event.key === 'Enter'){
                            this.onInputChange(this.state.searchInput)
                        }
                    }}
                    onChange={(event) => this.setState({ searchInput: event.target.value }) }>      
                </input>
                <div className="input-group-btn">
                    <button className="btn btn-default" onClick={() => this.onInputChange(this.state.searchInput)}>
                        <i className="glyphicon glyphicon-search"></i>
                    </button>
                </div>
            </div>
        )
    }
}