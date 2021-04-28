import React, { Fragment } from 'react';
import { PrivateRoute } from '../../components/privateRoute';
import { Switch } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { TodoList } from '../../components/TodoList/TodoList';
import { CreateTodo } from '../../components/CreateTodo/CreateTodo';

export const Main = ({user, match}) => {
    console.log(match);
    return (
        <Fragment>
            <Navbar user={user}/>
            <h1>Main Component</h1>
            <Switch>
                <PrivateRoute path={match.url+'todo_list'} user={user} component={TodoList}></PrivateRoute>
                <PrivateRoute exact path={match.url+'create_todo'} user={user} component={CreateTodo}></PrivateRoute>
            </Switch>
        </Fragment>
    );
} 