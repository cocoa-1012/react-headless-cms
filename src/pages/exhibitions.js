import React from 'react';
import ExhibitionComponent from "../components/Exhibitions/exhibition";
import ExhibitionSubComponent from './exhibitionSub';
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
const Artists = () => {
    const { path } = useRouteMatch();
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <Switch>
                <Route exact path={path}>
                    <ExhibitionSubComponent />
                </Route>
                <Route path={`${path}/:id`}>
                    <ExhibitionComponent />
                </Route>
            </Switch>
        </div>
    );
};

export default Artists;
