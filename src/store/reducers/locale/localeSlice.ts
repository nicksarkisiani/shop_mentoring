import {createSlice} from "@reduxjs/toolkit";
import i18n from "../../../locale/i18n.ts";

const initialState = {
    locale: "en",
    isLoading: false
}

export const localeSlice = createSlice({
    name: "locale",
    initialState,
    reducers: {
        changeLocale: (state, action) => {
            state.isLoading = true;
            state.locale = action.payload;
            localStorage.setItem("locale", state.locale);
            i18n.changeLanguage(state.locale);
            state.isLoading = false;
        },
        getLocale: (state) => {
            state.isLoading = true;
            let locale = localStorage.getItem("locale");
            if(!locale) {
               locale = "en";
               localStorage.setItem("locale", locale);
            }
            state.locale = locale;
            i18n.changeLanguage(state.locale);
            state.isLoading = false;
        }
    }
})
export const { getLocale, changeLocale } = localeSlice.actions

export default localeSlice.reducer;