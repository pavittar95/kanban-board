import React, { Fragment } from 'react'
import { Switch } from 'react-router-dom'
import AppRoute from './appRoute'
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';
import Layout from '../components/Layout';

export default function Routes() {
    return (
        <Switch>
            <AppRoute path="/" exact ChildComponent={Login} Layout={Fragment} />
            <AppRoute path="/dashboard" exact ChildComponent={Dashboard} Layout={Layout} />
        </Switch>
    )
}
