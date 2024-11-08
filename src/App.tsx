import {Container} from "@mui/material";
import Header from "./components/Header/Header.tsx";
import {Outlet} from "react-router";
import {useEffect} from "react";
import {useActions} from "./hooks/useActions.tsx";
import {useTypedSelector} from "./hooks/useTypedSelector.tsx";

function App() {
    const {isLoading} = useTypedSelector(state => state.locale)
    const {getLocale} = useActions()

    useEffect(() => {
        getLocale()
    }, []);

    if(isLoading) {
        return "123";
    }

    return (
        <Container>
            <Header/>
            <Outlet/>
        </Container>
    )
}

export default App
