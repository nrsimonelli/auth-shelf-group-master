import React from 'react';
import {connect} from 'react-redux';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class NewInfoPage extends Component {

    state = {
        isFull: false
    };

    componentDidMount() {
        this.props.dispatch({type: 'GET_ITEMS'});
    }

    render(){
        const isFull = this.state.isFull;
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
                </tr>
                    <tbody>
                        {isFull ? (
                            this.props.reduxState.REDUCERNAME.map((item, index) => {
                                return (
                                    <tr>
                                        <td><img src={item.image_url}/></td>
                                        <td>{item.description}</td>
                                        <td>{item.user_id}</td>
                                        <td><button>Delete (not wired)</button></td>
                                    </tr>
                                )
                            })
                        ): (
                            false
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
