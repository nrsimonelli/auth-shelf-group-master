import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllItems(){
    try{
        const response = yield axios.get('/api/shelf');
        yield console.log('response from /api/shelf post', response);
        //call refresh of Get Data list
        yield put({ type: 'SET_ITEM', payload: response });

    }
    catch (error) {
        console.log('Error with user logout:', error);
    }
}

function* fetchItemSaga() {
    yield takeLatest('FETCH_ITEM', fetchAllItems);
}

  export default fetchItemSaga;