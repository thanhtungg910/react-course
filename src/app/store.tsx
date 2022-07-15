import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { productApi } from '~/api/product.api';
import rootReducer from './rootReducer';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['products'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: { persistedReducer, [productApi.reducerPath]: productApi.reducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(productApi.middleware),
});
const persistor = persistStore(store);
export default persistor;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
