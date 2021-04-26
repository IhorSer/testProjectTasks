import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export const LoginForm = (props) => {
    const {
        values: { email, password },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
        loading,
        loginError
      } = props;

    const change = (event, name) => {
        handleChange(event);
        setFieldTouched(name, true, false);
    };

    return (
        <form className='form' noValidate onSubmit={handleSubmit}>
		    <Typography 
                component='h1' 
                variant='h5'
                align='center'>
				Login
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
				value={email}
				helperText={errors.email}
                error={Boolean(errors.email)}
				onChange={change}/>
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
				value={password}
				helperText={errors.password}
			    error={Boolean(errors.password)}
				onChange={change}/>
			<Button
				type='submit'
				fullWidth
			    variant='contained'
				color='primary'
				className='submit_btn'
                disabled={!isValid}
				type='submit'>
                Sign In
                {loading && <CircularProgress size={30} className='progress' />}
			</Button>
				<Grid container>
					<Grid item>
						<Link href='register' variant='body2'>
							{'Don\'t have an account? Sign Up'}
						</Link>
					</Grid>
				</Grid>
				{loginError && (
					<Typography variant='body2' className='error_msg'>
						{loginError}
					</Typography>
				)}
		</form>
    )
}