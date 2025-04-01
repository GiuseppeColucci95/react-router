import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import ContactUs from "./pages/ContactUs";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home}></Route>
            <Route path="/contacts" Component={Home}></Route>
            <Route path="/posts" Component={Home}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}