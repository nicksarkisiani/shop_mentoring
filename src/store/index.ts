import { configureStore } from '@reduxjs/toolkit'
import localeReducer from "./reducers/locale/localeSlice"

export const store = configureStore({
    reducer: {
        locale: localeReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
