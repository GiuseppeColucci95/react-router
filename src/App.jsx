import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import AboutUs from "./pages/AboutUs";

import { PostsProvider } from "./contexts/PostsContext";

export default function App() {

  return (
    <>
      <PostsProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home}></Route>
              <Route path="/about" Component={AboutUs}></Route>
              <Route path="/posts" Component={Posts}></Route>
              <Route path="/posts/:id" Component={Post}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </>
  )
}