import React from 'react';
import SearchBar from './SearchBar';

const Header = (props) => {
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="">Youtube</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="">Home</a></li>
                    <li><a href="">Trending</a></li>
                    <li><a href="">My Channel</a></li>
                    <li><a href="">Subscriptions</a></li>
                </ul>
                <form onSubmit={(event) => event.preventDefault() } className="navbar-form">
                    <SearchBar onSearchInputChange={props.onSearchInputChange}/>   
                </form>
            </div>
        </nav>
    )
}

export default Header;