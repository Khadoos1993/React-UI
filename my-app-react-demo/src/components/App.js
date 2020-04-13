import React, { useEffect, useState } from 'react';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import {Route, Switch, Redirect} from 'react-router-dom';
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from './ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../components/Profile';
import AuthorPage from './AuthorPage';
import CallBack from './Callback';

export const ConfigContext= React.createContext();

function App(props){
    //const auth = new Auth(props.history);
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header/>
            <Switch>
                <Route 
                    path="/" 
                    exact 
                    component={HomePage}
                />   {/*homepage get renders on every page as the path matches for all route */}
                <Route 
                    path="/profile" 
                    component  ={props =>
                        
                        <Profile/>
                    }
                />
                <Route path="/callback" component={CallBack}/>
                <Route path="/about" component={AboutPage}/>
                <Redirect from="/about-page" to="/about"/>
                <Route 
                    path="/courses" 
                    component ={props =>
                        <CoursesPage/>
                        
                    }
                    />
                <Route path="/course/:slug" component={ManageCoursePage}/>
                <Route path="/course" component={ManageCoursePage}/>
                <Route 
                    path="/authors" 
                    render= {props => <AuthorPage/>}
                />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );   
}

export default App;