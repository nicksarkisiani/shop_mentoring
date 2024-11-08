import {Box, Container} from "@mui/material";
import styles from "./Header.module.css";
import {useTranslation} from "react-i18next";
import {useTypedSelector} from "../../hooks/useTypedSelector.tsx";
import {useActions} from "../../hooks/useActions.tsx";

const Header = () => {

    const {t} = useTranslation()

    const {locale} = useTypedSelector(state => state.locale)
    const {changeLocale} = useActions();

    const onLanguageChange = () => {
        if(locale === "en") {
            changeLocale("ka")
        } else {
            changeLocale("en")
        }
    }

    return (
        <Container className={styles.header}>
            <Box className={styles.img}>
                <img src={require("../../assets/img/logo.png")} alt="logo"/>
            </Box>
            <Box component="nav">
                <ul className={styles.nav}>
                    <li>
                        <button>{t("courses")}</button>
                    </li>
                    <li>
                        <button>{t("lectures")}</button>
                    </li>
                    <li>
                        <button>{t("library")}</button>
                    </li>
                    <li>
                        <button onClick={onLanguageChange}>{t("switch")}</button>
                    </li>
                </ul>
            </Box>
        </Container>
    );
};

export default Header;