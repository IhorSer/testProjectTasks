import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component, isAuth, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => isAuth === true
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login'}} />}
        />
    )
}