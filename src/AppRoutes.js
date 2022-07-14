import React from "react";
import { Routes, Route } from "react-router-dom";

import Posts from "./components/profile/Post";
import Saved from "./components/profile/Saved";
import Post from "./components/SinglePost/Post";
import Tagged from "./components/profile/Tagged";
import FollowModal from "./components/follows/FollowModal";
import FollowerPeopleList from "./components/follows/FollowerPeopleList";
import FollowingPeopleList from "./components/follows/FollowingPeopleList";
import FollowingHashtag from "./components/follows/FollowingHashtag";
import BirthDay from "./components/auth/BirthDay";
import Confirm from "./components/auth/Confirm";
import ViewStory from "./components/story/ViewStory";
import RequiredRoute from "./pages/RequiredRoute";
import Layout from "./pages/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Explore = React.lazy(() => import("./pages/Explore"));
const Search = React.lazy(() => import("./pages/Search"));
const Comments = React.lazy(() => import("./pages/Comments"));
const CreatePost = React.lazy(() => import("./pages/create/CreatePost"));
const Details = React.lazy(() => import("./pages/create/Details"));
const Signup = React.lazy(() => import("./pages/auth/Signup"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const EditProfile = React.lazy(() => import("./pages/EditProfile"));
const People = React.lazy(() => import("./components/explore/People"));
const CardContainer = React.lazy(() =>
    import("./components/explore/CardContainer")
);

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login/confirm/" element={<Confirm />} />

            <Route path="/register" element={<Signup />} />
            <Route path="/register/birth_date" element={<BirthDay />} />
            <Route path="/register/confirm/" element={<Confirm />} />
            <Route
                path="/"
                element={
                    <RequiredRoute>
                        <Layout />
                    </RequiredRoute>
                }
            >
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />}>
                    <Route index element={<Posts />} />
                    <Route path="saved" element={<Saved />} />
                    <Route path="tagged" element={<Tagged />} />
                    <Route element={<FollowModal />}>
                        <Route
                            path="following"
                            element={<FollowingPeopleList />}
                        />

                        <Route
                            path="following_hashtag"
                            element={<FollowingHashtag />}
                        />
                    </Route>

                    <Route path="follower" element={<FollowModal />}>
                        <Route index element={<FollowerPeopleList />} />
                    </Route>
                </Route>
                <Route path="accounts/edit" element={<EditProfile />} />
                <Route path="/explore" element={<Explore />}>
                    <Route index element={<CardContainer />} />
                    <Route path="search" element={<Search />} />
                </Route>
                <Route path="/explore/people/" element={<People />} />
                <Route path="/:id/comments" element={<Comments />} />
                <Route path="/p/:postId" element={<Post />} />
                <Route path="story/:name/:id" element={<ViewStory />} />
                <Route path="/create" element={<CreatePost />}>
                    <Route path="details" element={<Details />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
