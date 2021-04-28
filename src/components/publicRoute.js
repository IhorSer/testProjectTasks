import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({component: Component, user, ...rest}) => {
    return (
        <Route
          {...rest}
          render={(props) => user == null
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/main', state: { from: props.location } }} />}
        />
      )
}