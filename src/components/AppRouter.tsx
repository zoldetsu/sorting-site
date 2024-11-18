import { Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../router/index.tsx";
import Posts from "../pages/Posts.tsx";
import Login from "../pages/Login.tsx";
export default function AppRouter() {
  const isAuth = true;

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.element.key}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.element.key}
            />
          ))}

      <Route path="*" element={isAuth ? <Posts /> : <Login />} />
    </Routes>
  );
}
