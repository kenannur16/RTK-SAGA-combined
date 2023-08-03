import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatSuccess } from './catState';

function* workGetCatsFetch() {
    const catResponse = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats = yield catResponse.json();

    for (const cat of formattedCats) {
        const picResponse = yield call(() => fetch('https://api.thecatapi.com/v1/images/search'));
        const picData = yield picResponse.json();
        const picUrl = picData[0].url;
        cat.pic = picUrl;
    }

    const formattedCatsShortened = formattedCats.slice(0, 10);
    yield put(getCatSuccess(formattedCatsShortened));
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}


export default catSaga;