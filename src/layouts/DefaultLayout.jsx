import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"


 export const DefaultLayout = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer></Footer>
        </>
    )
}

