import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/productsApi'; // RTK Query API'si import edin

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer, // RTK Query reducer'ı ekleyin
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware), // API middleware'ini ekleyin
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
