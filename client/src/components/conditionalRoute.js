import React, { useContext } from "react";
import { Route, Redirect} from "react-router-dom";
import { AuthContext } from "./auth";

const ConditionalRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <Redirect to ={'/user'} />
                ) : (
                    <RouteComponent {...routeProps} />
                )
            }
        />
    );
};


export default ConditionalRoute;