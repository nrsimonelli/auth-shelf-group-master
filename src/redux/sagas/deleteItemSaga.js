import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteThisItem(action){
    try{
        const response = yield axios.delete(`/api/shelf/${action.payload}`);
        yield console.log('response from /api/shelf delete');
        //call refresh of Get Data list
        yield put({ type: 'FETCH_ITEM'});

    }
    catch (error) {
        console.log('Error with user logout:', error);
    }
}

function* deleteItemSaga() {
    yield takeLatest('DELETE_THIS', deleteThisItem);
}

  export default deleteItemSaga;