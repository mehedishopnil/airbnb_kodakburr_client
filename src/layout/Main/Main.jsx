
import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";
import { Outlet } from "react-router-dom";



const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;