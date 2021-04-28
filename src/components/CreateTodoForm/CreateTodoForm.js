import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

import { CustomTextField } from '../../components/CustomTextField/CustomTextField';
import { CustomTextBox } from '../../components/CustomTextBox/CustomTextBox';
import { CustomAuthButton } from '../../components/CustomAuthButton/CustomAuthButton';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

const useStyles = makeStyles({
    container: {
        display: 'flex'
    },
    form: {
        flex: 'flex-start'
    }
})


export const CreateTodoForm = (props) => {
    const classes = useStyles();
    const {
        values: { title, description },
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
        loading,
        error
      } = props;

    useEffect(()=>{
        console.log('mount');
        document.getElementById('container').classList.add(classes.container);
        return document.getElementById('container').classList.remove(classes.container)

    });

    const change = (event, name) => {
        handleChange(event);
        setFieldTouched(name, true, false);
    };

    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
		    <Typography 
                component='h1' 
                variant='h5'
                align='center'>
				Create Todo
			</Typography>
			<CustomTextField 
                name='title'
                label='Todo Title'
                value={title}
				autoFocus
                onChange={change}
                {...props}/>
           <CustomTextBox
                name='description'
                label='Todo Description'
                value={description}
				rows='4'
                rowsMax='8'
                onChange={change}
                {...props}/>
			<CustomAuthButton
				label='Submit'
                type='submit'
                loading={loading}
                isValid={isValid}/>
            <ErrorMessage error={error} />
		</form>
    )
}