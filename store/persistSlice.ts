import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';

import type {AppState} from '@/store';

export interface IState {
    name: string
}

const initialState: IState = {
    name: "CYBER"
};

export const persistSlice = createSlice({
    name: 'persist',
    initialState,
    reducers: {
        setName: (state, {payload}) => {
            state.name = payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, {payload}) => ({
            ...state,
            ...payload.persist,
        })
    },
});

export const {setName} = persistSlice.actions;

export const selectPersist = (state: AppState) => state[persistSlice.name];

export default persistSlice;
