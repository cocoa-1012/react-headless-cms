import React from 'react';
import ArtistComponent from "../components/Artists/artist";
import ArtistSubComponent from './artistSub';
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
                    <ArtistSubComponent />
                </Route>
                <Route path={`${path}/:id`}>
                    <ArtistComponent />
                </Route>
            </Switch>
        </div>
    );
};

export default Artists;
