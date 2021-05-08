import React, { useEffect, useState } from 'react';
import { TodoCard } from '../TodoCard/TodoCard';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';
import { styles } from './styles';

const itemsPerPage = 4;

export const TodoList = ({todos, user, title}) => {
    const classes = styles();
    const [items, setItems] = useState(todos?.slice(0, itemsPerPage));
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        const start = (page-1) * itemsPerPage;
        const end = start + itemsPerPage;
        const tasks = todos?.slice(start, end);
        setItems(tasks?.length > 0? tasks : todos?.slice(0, itemsPerPage));
    }, [page, todos]);

    const onPageClick = (event, page) => {
        setPage(page);
    }
    
    return (
        <Grid container className={classes.topContainer}>
            <Typography 
                component='h1' 
                variant='h5'
                align='center'
                className={classes.header}>
				{title} Todo List 
			</Typography>
            <Grid container className={classes.container}>
                {
                    items?.map((item, i) => {
                        return (
                            <Box p={2} className={classes.box} key={i}>
                                <Grid item key={i}
                                    className={classes.card} component={TodoCard} todo={item} user={user} />
                            </Box>
                        )
                    })
                }
            </Grid>
            <Pagination count={Math.floor(todos?.length/itemsPerPage)+1}
                onChange={onPageClick} />
        </Grid>
    )
}