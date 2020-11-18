// Higher Order Component (HOC) is a component (HOC) that renders another component(s)
import React from 'react';
import ReactDOM from 'react-dom';

//another component
const Info = (props) => (
    <div>
        <h1>Info:</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// You can use this function with as many components as you want. This function creates a HOC
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};
//AdminInfo is HOC
const AdminInfo = withAdminWarning(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));

//require authentification (HOC)
const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
            <p>Please log in to view the info!</p>
            )}
        </div>
    );
};
//AuthInfo is HOC, it will have an access to the redux store
const AuthInfo = requireAuthentification(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details"/>, document.getElementById('app'));