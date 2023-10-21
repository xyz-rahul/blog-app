import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import GeneralLayout from "../components/general_layout/GeneralLayout";
import { Login, SignUp } from "../pages/auth";
import Home from "../pages/home/home";
import CreateBlog from "../pages/blog/CreateBlog";
import ViewBlog from "../pages/blog/ViewBlog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GeneralLayout />}>
      <Route index element={<Home />} />

      {/* auth */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />


        <Route path="/blogs" element={<Home />} />
        <Route path="/blogs/create" element={<CreateBlog />} />
        <Route path="/blogs/view/:id" element={<ViewBlog />} />
        {/* <Route path="/blogs/edit/:id" element={<EditBlog />} /> */}
        
    </Route>
  )
);

export default router;
