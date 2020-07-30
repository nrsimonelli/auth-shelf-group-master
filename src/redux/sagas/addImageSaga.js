import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addImage(payload){
    try{
        const response = yield axios.post('/api/shelf', payload.payload);
        yield console.log('response from /api/shelf post', response);
        //call refresh of Get Data list
    }
    catch (error) {
        console.log('Error with user logout:', error);
    }
}

function* addImageSaga() {
    yield takeLatest('ADD_IMAGE', addImage);
}
  
  export default addImageSaga;