import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: Component, user, todos, ...rest}) => {
    return (
        <Route
          {...rest}
          render={(props) => user != null
            ? <Component {...props} user={user} todos={todos} {...rest} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
      )
}