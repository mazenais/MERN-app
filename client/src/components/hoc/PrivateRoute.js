import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const PrivateRoute = ({comp : Component, roles, ...rest}) => {
    const { isAuthenticated, user } = useContext(AuthContext);
    return (
        <Route {...rest} render={props => {
            if(!isAuthenticated)
                return <Redirect to={{ pathname: "/login",
                                       state : {from : props.location}}}/>

            return <component {...props}/>                          
        }}/>
    )
}

export default PrivateRoute;