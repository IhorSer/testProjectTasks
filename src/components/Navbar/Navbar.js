import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { signOutUser } from '../../redux/actions/userActions';
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { LockOutlined, ExitToAppOutlined } from '@material-ui/icons';
import { styles } from './styles';

export const Navbar = ({user}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = styles();

    const handleLogoutClick = () => {
        signOutUser(dispatch);
    }

    const handleLoginClick = () => {
        history.push('/login');
    }



    return (
        <AppBar className={classes.appbarDisplay}>
            <Toolbar className={classes.toolbarDisplay}>
                <Grid item className={classes.logo}>
                    Todo
                </Grid>
                <Grid item className={classes.linksContainer}>
                    <ListItem className={classes.link} button component={Link} to='/todo_list/user_todos'>
                        <ListItemText primary='My Todos' />
                    </ListItem>
                    <ListItem className={classes.link} button component={Link} to='/create_todo'>
                        <ListItemText primary='Create Todo' />
                    </ListItem>
                    <ListItem className={classes.link} button component={Link} to='todo_list'>
                        <ListItemText primary='Todo List' />
                    </ListItem>
                </Grid>
                <Grid item className={classes.logoutButton}>
                        { user 
                            ? (<IconButton edge='end' onClick={() => handleLogoutClick()}>
                                  <span className={classes.iconText}>Logout</span>
                                  <ExitToAppOutlined className={classes.iconClass}/>
                               </IconButton>)
                            : (<IconButton edge='end' onClick={() => handleLoginClick()}>
                                  <span className={classes.iconText}>Login</span>
                                  <LockOutlined className={classes.iconClass}/>
                                </IconButton>)
                        }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}