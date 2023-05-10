import {Outlet} from "react-router-dom";
import { VscGithubInverted } from "react-icons/vsc" ;

import classes from "./App.module.css";

function App(){
    return(
        <div className={classes.app}>
            <div className={classes.git}>
            <VscGithubInverted className={classes.logo}/>
            </div>
            <Outlet/>
        </div>
    );
}

export default App;