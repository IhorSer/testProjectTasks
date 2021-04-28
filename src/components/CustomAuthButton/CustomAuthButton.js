import React from 'react';
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

export const CustomAuthButton = ({label, isValid, loading, type}) => (
    <Button
		type={type}
		fullWidth
		variant='contained'
		color='primary'
        disabled={!isValid}>
        {label}
        {loading && <CircularProgress size={30}/>}
    </Button>
)