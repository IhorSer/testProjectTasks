import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => ({
  appbarDisplay: {
    paddingTop: '.5em',
	paddingBottom: '.5em',
	border: '1px solid #a2a2a2',
	backgroundColor: '#f4f4f4',
	boxShadow: '0px 0px 14px 0px rgba(0,0,0,0.75)',
	borderRadius: '5px',
    position: 'sticky',
  },
  toolbarDisplay: {
    display: `flex`,
    justifyContent: `space-between`,
    color: `#73706f`,
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'   
    }
  },
  logo: {
    textTransform: `uppercase`,
    fontSize: '24px',
    fontVariant: 'small-caps',
    fontWeight: 'bold',
  },
  linksContainer: {
      display: 'flex',
      flexDirection: 'row',
      fontSize: '16px',
      textTransform: `uppercase`,
      whiteSpace: 'nowrap',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        padding: '12px 0'
    }
  },
  link: {
    [theme.breakpoints.down('xs')]: {
        padding: '8px 0',
        textAlign: 'center'
    }
  },
  logoutButton: {
  },
  iconText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    fontSize: '14px',
    letterSpacing: '0.2em',
    marginRight: '5px',
  },
  iconClass: {
      color: '#73706f'
  }
}));

export const Navbar = ({user}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

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
                    <ListItem className={classes.link} button component='a' href='/'>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem className={classes.link} button component='a' href='/create_todo'>
                        <ListItemText primary='Create Todo' />
                    </ListItem>
                    <ListItem className={classes.link} button component='a' href='/todo_list'>
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