import Home from "./pages/Home";
import NavBottom from "./components/nav/NavBottom";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import { useState } from "react";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import Comment from "./pages/Comment";

function App() {
    const [search, setSearch] = useState(false);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/search" element={<Search />} />
                <Route path="/comment" element={<Comment />} />
            </Routes>
            <NavBottom />
        </>
    );
}

export default App;
