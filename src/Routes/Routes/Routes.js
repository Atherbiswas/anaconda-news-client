import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Other/Profile/Profile";
import TermsAndCondition from "../../Pages/Other/TermsAndCondition/TermsAndCondition";
import Register from "../../Pages/Register/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://anaconda-news-sever.vercel.app/news"),
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`https://anaconda-news-sever.vercel.app/category/${params.id}`),
        element: <Category></Category>,
      },
      {
        path: "news/:id",
        loader: ({ params }) =>
          fetch(`https://anaconda-news-sever.vercel.app/news/${params.id}`),
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms&condition",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
