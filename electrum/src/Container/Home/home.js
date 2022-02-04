import Main from "./main";
import SideNav from "../SideNav/sidenav";
function Home() {
    return (
        <div className="flexRow mainContainer">
            <SideNav />
            <Main />

        </div>
    );
}
export default Home;