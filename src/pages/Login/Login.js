import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import { logInUser } from '../../redux/actions/userActions';
import { loginValidator } from '../../helpers/validators';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { LoginForm } from '../../components/LoginForm/LoginForm';

import './Login.css';

export const Login = () => {
    const dispatch = useDispatch();
	const history = useHistory();

    const isLoading = useSelector(state => state.user?.isLoading);
    const loginError = useSelector(state => state.user?.error);

	const values = {
		email: '',
		password: ''
	}

	const handleLoginButtonClick = (data, e) => {
        if (data.email && data.password) {
            logInUser(data.email, data.password, dispatch, history);
        }
    }

    return (
		<Container maxWidth='xs'>
			<Grid container
				alignItems='center'
				direction='row'
				justify='center'
				style={{minHeight: '100vh'}}>
			<Formik
                render={props => <LoginForm {...props} loading={isLoading} loginError={loginError} />}
                initialValues={values}
                validationSchema={loginValidator}
                onSubmit={handleLoginButtonClick}
            />
			</Grid>
		</Container>
    );
} 
