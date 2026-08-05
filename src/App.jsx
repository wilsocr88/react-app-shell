// App guts
import { Route, Routes } from "react-router-dom";

// Page components
import Page from "./pages/Page";

// App styles
import "./App.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Page />} />
        </Routes>
    );
}
