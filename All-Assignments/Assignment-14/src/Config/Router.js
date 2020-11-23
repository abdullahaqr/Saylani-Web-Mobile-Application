import React from 'react';
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import HomePage from '../Pages/HomePage.jsx';


class AppRouter extends React.Component{
    render(){
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                </Switch>
                <Footer />
            </Router>
        )
    }
}

export default AppRouter;