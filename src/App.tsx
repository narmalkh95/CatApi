import React from 'react';
import {store} from "./store/store";
import {Provider} from "react-redux";
import AppRoutes from "./routes";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
