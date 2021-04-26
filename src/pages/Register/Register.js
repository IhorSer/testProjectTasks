import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik'

import { registerUser } from '../../redux/actions/userActions';
import { registerValidator } from '../../helpers/validators';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';

import "./Register.css";

export const Register = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const isLoading = useSelector(state => state.user?.isLoading);
    const registerError = useSelector(state => state.user?.error);

	const values = {
		email: '',
		password: '',
		confirmPassword: ''
	}

	const handleRegisterButtonClick = (data) => {
        if (data.email && data.password) {
            registerUser(data.email, data.password, dispatch, history);
        }
    }

    return (
		<Container maxWidth='xs' component='main' classes='main-container'>
			<Grid
				container
				alignItems='center'
				direction='row'
				justify='center'
				style={{ minHeight: '100vh' }}>
					<Formik render={props => <RegisterForm {...props} 
						loading={isLoading} 
						registerError={registerError} />}
                initialValues={values}
                validationSchema={registerValidator}
                onSubmit={handleRegisterButtonClick} />
			</Grid>
		</Container>
    );
} 
