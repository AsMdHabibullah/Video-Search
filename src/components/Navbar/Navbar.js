import React from 'react'

const Navbar = () => {
  return (
    <div className="ui fixed inverted main menu">
        <div className="ui container">
            <div className="header item">
                <a href="https://asmdhabibullah.github.io/video-search/"><h3>Youtube Video Search</h3></a>
            </div>
            <a className="teal item" href="https://asmdhabibullah.github.io/video-search/">Home</a>
            <a className="teal item" href="#">About</a>
            <a className="teal item" href="#">Contact</a>
            <div className="right menu">
                <div className="item">
                    <div className="ui yellow button">Register</div>
                </div>
                <div className="item">
                    <div className="ui teal button">Log In</div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Navbar;
