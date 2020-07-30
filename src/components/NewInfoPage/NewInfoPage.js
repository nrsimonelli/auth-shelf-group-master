import React, {Component} from 'react';
import {connect} from 'react-redux';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class NewInfoPage extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_ITEM'});
    }

    onDeleteClick = (event) => {
        console.log('delete was clicked!');
        this.props.dispatch({type: 'DELETE_THIS', payload: event.target.value})
    }

    render(){

        return(
            <div className='tableMap'>
                <table>
                  <thead>
                    <tr>
                    <td>
                        image
                    </td>
                    <th>
                        description
                    </th>
                    <th>
                        user
                    </th>
                    <th>

                    </th>
                    </tr>
                  </thead>

                    <tbody>
                        {this.props.reduxState.item[0] !== undefined ? (
                            this.props.reduxState.item.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img src={item.image_url} alt={item.description} /></td>
                                        <td>{item.description}</td>
                                        <td>{item.user_id}</td>
                                        <td><button onClick={this.onDeleteClick} value={item.id} >Delete</button></td>
                                    </tr>
                                )
                            })
                        ): (
                            <div>please wait</div>
                        )}

                    </tbody>
                </table>
            </div>
        ) // end return
    } // end render
} // end comp

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(NewInfoPage);
