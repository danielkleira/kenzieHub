import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/DashBoard";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function Routes(){
    const [authenticated,setAuthenthicated]=useState(false) 

    return(
        <>
        <BrowserRouter>
        <Switch>
        <Route exact path ='/'>
            <Login authenticated={authenticated} setAuthenthicated={setAuthenthicated}/>
        </Route>
        
        
        <Route exact path='/cadastro/'>
            <Cadastro />
        </Route>
        

        <Route exact path='/dashboard/:user_id'>
            <Dashboard authenticated={authenticated} setAuthenthicated={setAuthenthicated}/>
        </Route>

        </Switch>
        </BrowserRouter>

        </>
    )
}

export default Routes