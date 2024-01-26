import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productApi } from '../api/product';
import cart from '../api/cart/index';
import form from '../api/form';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    [productApi.reducerPath]: productApi.reducer,
    cart,
    form,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
