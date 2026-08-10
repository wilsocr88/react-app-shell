// App guts
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Page components
import Page from "./pages/Page";
import Loader from "./components/Loading";

// App styles
import "./App.css";

export default function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an authentication check
        setTimeout(() => {
            setAuthenticated(true); // Set to true or false based on your auth logic
            setLoading(false);
        }, 2000); // Simulate a 2-second loading time
    }, []);

    return loading ? (
        <Loader />
    ) : authenticated ? (
        <Routes>
            <Route path="/" element={<Page />} />
        </Routes>
    ) : (
        <Routes>
            {/* <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} /> */}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}
