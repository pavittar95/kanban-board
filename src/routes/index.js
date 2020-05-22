import React from 'react'
import { Switch } from 'react-router-dom'
import AppRoute from './appRoute'
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <AppRoute path="/" exact component={Login} />
            <AppRoute path="/dashboard" exact component={Dashboard} />
        </Switch>
    )
}
