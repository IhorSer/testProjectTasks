import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({component, isAuth, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => isAuth === false
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/main'}} />}
        />
    )
}