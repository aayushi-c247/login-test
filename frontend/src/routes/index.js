import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../views/Home"));
const Login = lazy(() => import("../views/Auth/Login"));
const Signup = lazy(() => import("../views/Auth/Signup"));

function RenderRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route
          path={"/home"}
          exact={true}
          element={<Home />}
        />
        <Route
          path={"/"}
          exact={true}
          element={<Login />}
        />
        <Route
          path={"/signup"}
          exact={true}
          element={<Signup />}
        />
        <Route
          path={"*"}
          exact={true}
          element={<div>No page Found</div>}
        />
      </Routes>
    </Suspense>
  )
}

export default RenderRoutes