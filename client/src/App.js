import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

import * as API from './utils/API';

import SavedBookContext from './utils/SavedBookContext';

function App() {

    const [savedBookState, setSavedBookState] = useState({
        books: [],
        getSavedBooks: () => {
            API.getSavedBooks().then(({ data }) => setSavedBookState({ ...savedBookState, books: data }));
        },
    });
    useEffect(() => {
        savedBookState.getSavedBooks();
    }, []);

    return (
        <Router>
            <>
                <Navbar />
                <SavedBookContext.Provider value={savedBookState}>
                    <Switch>
                        <Route exact path='/' component={SearchBooks} />
                        <Route exact path='/saved' component={SavedBooks} />
                        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
                    </Switch>
                </SavedBookContext.Provider>
            </>
        </Router>
    );
}

export default App;