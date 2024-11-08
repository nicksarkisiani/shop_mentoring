import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {useMemo} from "react";
import {changeLocale, getLocale} from "../store/reducers/locale/localeSlice.ts";

const rootActions = {
    getLocale,
    changeLocale,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};