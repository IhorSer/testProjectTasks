import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../../redux/actions/userActions';
import {
  AppBar,
  Toolbar,
  Container,
  IconButton
} from '@material-ui/core';
import { LockOutlined, ExitToAppOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `flex-end`
  },
  iconText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
    fontSize: '14px',
    letterSpacing: '0.2em',
    marginRight: '5px',
  },
  iconClass: {
      color: 'white'
  }
});

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

    console.log(user);

    return (
        <AppBar>
            <Toolbar>
                <Container maxWidth="md" className={classes.navDisplayFlex}>
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
                </Container>
            </Toolbar>
        </AppBar>
    )
}