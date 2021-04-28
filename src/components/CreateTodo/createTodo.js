import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { CreateTodoForm } from '../../components/CreateTodoForm/CreateTodoForm';
import { taskCreateValidator } from '../../helpers/validators';
import { create } from '../../redux/actions/taskActions';


export const CreateTodo = ({user}) => {
    const dispatch = useDispatch();
	const history = useHistory();

    const isLoading = useSelector(state => state.tasks?.isLoading);
    const taskError = useSelector(state => state.tasks?.error)

    const values = {
        title: '',
        description: '',
        endDate: null
    };

    const handleCreateTodoButtonClick = (data) => {
        const {title, description, endDate} = data;
        create({title, description, endDate}, user, dispatch);
    }

    return (
        <Container maxWidth='xs'>
            <Grid container
                alignItems='center'
                direction='row'
                justify='center'
                style={{minHeight: '100vh'}}>
                <Formik
                    render={props => <CreateTodoForm {...props} loading={isLoading} error={taskError}  />}
                    initialValues={values}
                    validationSchema={taskCreateValidator}
                    onSubmit={handleCreateTodoButtonClick}/>
            </Grid>
        </Container>
    )
}