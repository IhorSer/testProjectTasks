import React from 'react';
import Typography from '@material-ui/core/Typography';

export const ErrorMessage = ({error}) => {
   return error ? (
        <Typography variant='body2'>
            {error}
        </Typography>
    ) : null
}
