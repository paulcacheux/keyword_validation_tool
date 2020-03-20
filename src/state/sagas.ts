import { UPLOAD_FILE_REQUEST } from './types';
import { UploadFileRequestAction, uploadFileSuccess } from './actions';
import { call, put, takeLatest, ForkEffect, Effect } from 'redux-saga/effects';
import { readAsText, FileContent } from '../fileUpload';

function* uploadFile(action: UploadFileRequestAction): Generator<Effect<any>> {
    try {
        const content = yield call(readAsText, action.blob);
        yield put(uploadFileSuccess(content as FileContent));
    } catch (error) {}
}

export function* fileUploadSaga(): Generator<ForkEffect<never>> {
    yield takeLatest(UPLOAD_FILE_REQUEST, uploadFile);
}
