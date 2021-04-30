import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { CreateTodoForm } from '../CreateTodoForm/CreateTodoForm';
import { taskCreateValidator } from '../../helpers/validators';
import { create, requirements } from '../../redux/actions/taskActions';
import { clearChips } from '../../redux/actions/uiActions';
import { styles } from './styles';

export const CreateTodo = ({user}) => {
    const dispatch = useDispatch();
	const history = useHistory();

    const isLoading = useSelector(state => state.tasks?.isLoading);
    const taskError = useSelector(state => state.tasks?.error)
    const reqs = useSelector(state => state.tasks?.reqs);
    const chips = useSelector(state => state.chips?.chips);

    const classes = styles();

    const values = {
        title: '',
        description: '',
        endDate: null,
    };

    useEffect(() => {
        requirements(dispatch);
    }, [dispatch]);

    const handleCreateTodoButtonClick = (data) => {
        const {title, description, endDate} = data;
        clearChips(dispatch);
        create({title, description, endDate, chips}, user, dispatch, history);
    }

    return (
        <Container maxWidth='md'>
            <Grid container
                alignItems='center'
                direction='row'
                justify='center'
                style={{minHeight: '100vh'}}
                className={classes.container}>
                <Formik
                    initialValues={values}
                    validationSchema={taskCreateValidator}
                    onSubmit={handleCreateTodoButtonClick}> 
                        {props => <CreateTodoForm {...props} loading={isLoading} 
                            error={taskError} reqs={reqs}  />}
                    </Formik>
            </Grid>
        </Container>
    )
}