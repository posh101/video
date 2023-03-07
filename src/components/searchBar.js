import React from 'react';

class searchBar extends React.Component {

    state = {term: ''}

    onInputChange = (e) => {
      this.setState({term: e.target.value})
    }

     onFormSubmit = event => {
        event.preventDefault()

        this.props.onFormSubmit(this.state.term)
     }


    render() {

        return (
        <div className="search-bar ui segment">
            <form 
            className="ui form"
            onSubmit={this.onFormSubmit} >
                <div className="field">
                    <label>Video search</label>
                    <input type="text" 
                    value={this.state.term} 
                    onChange={this.onInputChange} placeholder="Enter search keyword"/>
                </div>
            </form>
        </div>

        )
    }
}

export default searchBar;