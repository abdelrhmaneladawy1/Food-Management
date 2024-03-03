import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  ForgetPass,
  Login,
  ResetPassword,
  ResetRequestPass,
} from "./AuthModule";
import CategoriesPage from "./CategoriesModule/Pages/CategoriesPage";
import { Home } from "./HomeModule";
import RecipesPage from "./RecipesModule/Pages/RecipesPage";
import {
  AuthLayout,
  MasterLayout,
  NotFound,
  ProtectedRoute,
} from "./SharedModule";
import { UsersPage } from "./UsersModule";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <MasterLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <UsersPage /> },
      { path: "recipes", element: <RecipesPage /> },
      { path: "categories", element: <CategoriesPage /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "reset-request-pass", element: <ResetRequestPass /> },
      { path: "reset-pass", element: <ResetPassword /> },
      { path: "forget-password", element: <ForgetPass /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
