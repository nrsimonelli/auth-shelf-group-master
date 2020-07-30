import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addImage(payload){
    try{
        yield console.log('this is inside of addImage saga, (payload)', payload.payload);
    }
    catch (error) {
        console.log('Error with user logout:', error);
    }
}

function* addImageSaga() {
    yield takeLatest('ADD_IMAGE', addImage);
}
  
  export default addImageSaga;