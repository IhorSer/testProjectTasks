import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';

import { CustomTextField } from '../../components/CustomTextField/CustomTextField';
import { CustomTextBox } from '../../components/CustomTextBox/CustomTextBox';
import { CustomResetFormButton } from '../../components/CustomResetFormButton/CustomResetFormButton';
import { CustomAuthButton } from '../../components/CustomAuthButton/CustomAuthButton';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { clearChips } from '../../redux/actions/uiActions';

import { addChip, deleteChip } from '../../redux/actions/uiActions';
import { styles } from './styles';

export const CreateTodoForm = (props) => {
    const classes = styles();
    const dispatch = useDispatch();
    const chips = useSelector(state => state.chips?.chips);
    const selectRef = useRef();
    const {
        values: { title, description },
        handleSubmit,
        handleChange,
        handleReset,
        isValid,
        setFieldTouched,
        loading,
        error, 
        reqs
    } = props;

    const [selectedChip, setSelectedChip] = useState('');

    const change = (event, name) => {
        handleChange(event);
        setFieldTouched(name, true, false);
    };

    const handleSelectChipClick = (event) => {
        if(selectedChip.length > 0 && !chips?.includes(selectedChip)) {
            addChip(selectedChip, dispatch);
        }
    }

    const handleChipChange = (event) => {
        const {value} = event.target;
        setSelectedChip(value);
    }

    const handleDelete = (chip) => () => {
        deleteChip(chip, dispatch);
    }

    const onReset = () => {
        clearChips(dispatch);
        handleReset();
    }

    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit} onReset={onReset}>
		    <Typography 
                component='h1' 
                variant='h5'
                align='center'
                className={classes.header}>
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
            <Grid container direction='row' spacing={2}>
                <Grid item xs={4}>
                    <Select
                        ref={selectRef}
                        name='Requirements'
                        value={selectedChip}
                        fullWidth
                        variant='outlined'
                        defaultValue={'Hey'}
                        onChange={handleChipChange}>
                            {reqs?.map((req, i) => {
                                return (<MenuItem value={req} key={i}>{req}</MenuItem>)
                            })}
                    </Select>
                </Grid>
                <Grid item xs={8}>
                    <Button size='large' onClick={handleSelectChipClick}>
                        ADD REQUIREMENT FOR TASK
                    </Button>
                </Grid>
            </Grid>
            <Grid container className={classes.chipContainer}>
                {chips?.map((item, i) => (
                    <Chip label={item} key={i} className={classes.chip}
                        onDelete={handleDelete(item)} color='primary' variant='outlined' />
                ))}
            </Grid>
            <Grid container direction='row' spacing={2} className={classes.btnContainer}>
                <Grid item xs={6} >
			        <CustomAuthButton
				        label='Submit'
                        type='submit'
                        loading={loading}
                        isValid={isValid}/>
                </Grid>
                <Grid item xs={6}>
                    <CustomResetFormButton label='Reset'/>
                </Grid>
            </Grid>
            <ErrorMessage error={error} />
		</form>
    )
}