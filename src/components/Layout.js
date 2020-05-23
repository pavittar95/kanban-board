import React, {Fragment} from 'react'
import Header from './Header';
export default function Layout({ children }) {
    return (
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    )
}
