import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/actions/taskActions';
import { PrivateRoute } from '../../components/privateRoute';
import { Switch } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { TodoList } from '../../components/TodoList/TodoList';
import { CreateTodo } from '../../components/CreateTodo/CreateTodo';

export const Main = ({user, match}) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.tasks?.tasks);
    const userTodos = todos?.filter(todo => todo.creator?.id === user?.id || todo.executor?.id === user?.id);
    useEffect(() => {
        getAll(dispatch);
    }, [dispatch]);   
    
    return (
        <Fragment>
            <Navbar user={user}/>
            <Switch>
                <PrivateRoute path={match.url+'todo_list/user_todos'} user={user} todos={userTodos} title={'User'}
                    component={TodoList}></PrivateRoute>
                <PrivateRoute path={match.url+'todo_list'} user={user} todos={todos} title={'Common'}
                    component={TodoList}></PrivateRoute>
                <PrivateRoute exact path={match.url+'create_todo'} user={user} component={CreateTodo}></PrivateRoute>
            </Switch>
        </Fragment>
    );
} 