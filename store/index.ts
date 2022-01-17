import {AnyAction, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import {nextReduxCookieMiddleware, wrapMakeStore} from 'next-redux-cookie-wrapper';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createLogger} from 'redux-logger';

import persistSlice from './persistSlice';

const reducer = {
    [persistSlice.name]: persistSlice.reducer,
};

const makeStore = wrapMakeStore(() =>
    configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => {
            const middleware = getDefaultMiddleware().prepend(
                nextReduxCookieMiddleware({
                    compress: false,
                    subtrees: ["persist.name"],
                }),
            );

            if (typeof window === 'object' && process.env.NODE_ENV !== 'production')
                return middleware.concat(
                    createLogger({
                        collapsed: true,
                        duration: true,
                        diff: true,
                    }),
                );

            return middleware;
        },
    }),
);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunkAction<ReturnType = Promise<void>> = ThunkAction<ReturnType, AppState, unknown, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore, {debug: false});
