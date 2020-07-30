import React, {Component} from 'react';
import { connect } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component{

  state = {
    description: '',
    image_url: ''//,
    //id: this.props.reduxState.user.id
  }

  addImage = () => {
    const payload = {description: this.state.description, image_url: this.state.image_url};
    this.props.dispatch({type: 'ADD_IMAGE', payload});
  }

  onDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  onUrlChange = (event) => {
    this.setState({
      image_url: event.target.value
    });  
  }

  render(){
    return(
      <div>
        <p>
          Shelf Page
        </p>
        <div display='flex' align='center'>
          <label>Image Description:</label>
          <input value={this.state.description} onChange={this.onDescriptionChange}></input>
          <br/>
          <label>Image URL:</label>
          <input value={this.state.url} onChange={this.onUrlChange}></input>
          <br/>
          <button onClick={this.addImage}>Add Image To Shelf</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapStateToProps)(InfoPage);
