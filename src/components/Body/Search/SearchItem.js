import React, { Component } from 'react';


class SearchItem extends Component {


  state = {
    searchItem : '',
  }
  onInputChange = e => {
    this.setState({
      searchItem : e.target.value
    });
  }

  formSubmite = e => {
    e.preventDefault();

    this.props.onsearchItem(this.state.searchItem);
    
  }

  render() {
    return (
        <div className="search-bar ui segment">
          
          <form 
            className="ui form"
            onSubmit = { this.formSubmite }
          >
            <div className="field">
              <h1>Your youtube Channel Details Info.</h1>
              <input
                type="text" 
                placeholder="Search here..."
                value = { this.state.searchItem }
                onChange = { this.onInputChange }
              />
            </div>
          </form>
        </div>
    )
  }
}


export default  SearchItem;