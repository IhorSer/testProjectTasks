import React, { Fragment } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';

export const Main = ({user}) => {
    return (
        <Fragment>
            <Navbar user={user}/>
            <h1>Main Component</h1>
        </Fragment>
    );
} 