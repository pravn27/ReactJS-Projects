import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{
    render(){
        if(!this.props.activeBook){
            return <div>Select any book to get details</div>
        }

        return(
            <div>
                <h2>Book details:</h2>
                <div>{this.props.activeBook.title}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);