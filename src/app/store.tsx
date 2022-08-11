import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { productApi } from '~/api/product.api';
import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';
import { categoryApi } from '~/api/category.api';
import { orderApi } from '~/api/order.api';
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['products'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: {
		persistedReducer,
		[productApi.reducerPath]: productApi.reducer,
		[categoryApi.reducerPath]: categoryApi.reducer,
		[orderApi.reducerPath]: orderApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(productApi.middleware, categoryApi.middleware, sagaMiddleware),
});
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default persistor;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
