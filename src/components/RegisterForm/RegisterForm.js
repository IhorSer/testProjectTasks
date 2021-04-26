import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export const RegisterForm = (props) => {
    const {
        values: { email, password, confirmPassword },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
        loading,
        registerError
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
            <TextField
				variant='outlined'
				margin='normal'
				required
				fullWidth
				name='confirmPassword'
				label='Confirm Password'
				type='password'
				id='confirmPassword'
				value={confirmPassword}
				helperText={errors.confirmPassword}
                error={Boolean(errors.confirmPassword)}
				onChange={change}/>
			<Button
				type='submit'
				fullWidth
			    variant='contained'
				color='primary'
				className='submit_btn'
                disabled={!isValid}
				type='submit'>
                Sign Up
                {loading && <CircularProgress size={30} className='progress' />}
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
    )
}