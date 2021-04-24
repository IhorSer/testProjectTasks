import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { registerUser } from '../../redux/actions/userActions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { auth } from '../../services/firebase';

import "./Register.css";

export const Register = () => {
	const dispatch = useDispatch();
	const history = useHistory();

    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
    });
 
    const isLoading = useSelector(state => state.user?.isLoading);
    const registerError = useSelector(state => state.user?.error);

    const handleChange = event => {
      setValues(prevValues => ({
        ...prevValues,
        [event.target.name]: event.target.value
      }))
    }

    const handleRegisterButtonClick = event => {
        event.preventDefault();
        if (values.email && values.password) {
            registerUser(values.email, values.password, dispatch, history);
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
			<form className='form' noValidate>
            <Typography 
                component='h1' 
                variant='h5'
                align="center">
				Register
			</Typography>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					id='email'
					label='Email Address'
					name='email'
					autoComplete='email'
					autoFocus
					helperText={values.error.email}
					error={values.error.email ? true : false}
					onChange={handleChange}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					name='password'
					label='Password'
					type='password'
					id='password'
					autoComplete='current-password'
					helperText={values.error.password}
					error={values.error.password ? true : false}
					onChange={handleChange}
				/>
                <TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					name='confirmPassword'
					label='Confirm Password'
					type='password'
					id='confirmPassword'
					autoComplete='current-password'
					helperText={values.error.password}
					error={values.error.password ? true : false}
					onChange={handleChange}
				/>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					color='primary'
					className='submit_btn'
					onClick={handleRegisterButtonClick}
					disabled={!values.email || !values.password}>
					    Sign Up
					{isLoading && <CircularProgress size={30} className='progress' />}
				</Button>
					<Grid container>
						<Grid item>
							<Link href='login' variant='body2'>
								{'Already have account? Sign In'}
							</Link>
						</Grid>
					</Grid>
					{registerError && (
						<Typography variant='body2' className='error_msg'>
							{registerError}
						</Typography>
					)}
				</form>
            </Grid>
        </Container>
    );
} 
