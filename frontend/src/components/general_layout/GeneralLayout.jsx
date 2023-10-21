import './GeneralLayout.css';
import { Outlet } from "react-router-dom"
import Navbar from '../../components/navbar/Navbar.jsx'
const GeneralLayout = () => {
    return (
        <>
            <Navbar/> 
            <Outlet/>
        </>
    )
}

export default GeneralLayout
