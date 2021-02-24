import React from 'react'
import {Route, Switch} from "react-router-dom";
import {Home} from "../home";
import {Create} from "../create";


export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact={true}>
                    <Home/>
                </Route>
                <Route path='/create' exact={true}>
                    <Create/>
                </Route>
            </Switch>
        </div>
    )
}
