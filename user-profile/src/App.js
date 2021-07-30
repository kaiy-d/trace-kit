<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchClips } from './redux/actions'

import Header from './components/Header'
import Home from './page/home'

import './ron.css'

const App = () => {

    const clips = useSelector(({ clips }) => clips)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchClips())
    }, [])

    return (
        <div className='app'>
			<Header />
			<Home clips={clips} />
=======
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import ClipExplorer from './modules/ClipExplorer'
import ProfilePage from './modules/ProfilePage'
import Loader from './modules/Loader'


function App() {
    return (
        <div className="App">
            <Router>
                <Route
                    path="/"
                    component={Loader}
                />
                <Route
                    path="/"
                    component={ClipExplorer}
                    exact
                />
                <Route
                    path="/athlete/:playlist_id"
                    component={ProfilePage}
                    exact
                />
            </Router>
>>>>>>> origin/master
        </div>
    );
}

export default App