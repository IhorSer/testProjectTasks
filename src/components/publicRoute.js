import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({component: Component, user, loading, ...rest}) => {
    return (
        <Route
          {...rest}
          render={(props) => user == null
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/todo_list', state: { from: props.location } }} />}
        />
      )
}