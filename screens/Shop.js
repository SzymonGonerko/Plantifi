import { Header } from "../components/ui/Header"

export const Shop = ({onPressShowMainApp, onPressThemeBar}) => {
    return <>
    <Header onPressShowMainApp={onPressShowMainApp} onPressThemeBar={onPressThemeBar}>
        Sklep
    </Header>
    </>
}