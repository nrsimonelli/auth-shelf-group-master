import React, {Component} from 'react';
import {connect} from 'react-redux';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class NewInfoPage extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_ITEMS'});
    }

    onDeleteClick = () => {
        console.log('delete was clicked!');
    }

    render(){

        return(
            <div className='tableMap'>
                <table>
                  <tr>
                    <th>
                        image
                    </th>
                    <th>
                        description
                    </th>
                    <th>
                        user
                    </th>
                    <th>

                    </th>
                </tr>
                    <tbody>
                        {this.props.reduxState.REDUCERNAME !== [] ? (
                            this.props.reduxState.REDUCERNAME.map((item, index) => {
                                return (
                                    <tr>
                                        <td><img src={item.image_url}/></td>
                                        <td>{item.description}</td>
                                        <td>{item.user_id}</td>
                                        <td><button onClick={this.onDeleteClick}>Delete (not wired)</button></td>
                                    </tr>
                                )
                            })
                        ): (
                            <p>please wait</p>
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
