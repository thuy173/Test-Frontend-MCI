import { useAppSelector } from "@/hooks/use-app-selector";
import { RootState } from "@/redux/store";
import { lazy, Suspense } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";

export const LoadingPage = lazy(() => import("../pages/shared/LoadingPage"));
export const IndexPage = lazy(() => import("../pages/customer"));

export const CustomerPage = lazy(() => import("../pages/customer"));

export const LoginPage = lazy(() => import("../pages/auth/Login"));
export const RegisterPage = lazy(() => import("../pages/auth/Register"));
export const Page404 = lazy(() => import("../pages/shared/NotFoundPage"));

export const Layout = lazy(() => import("../layout"));

// ----------------------------------------------------------------------

const useAuth = () => {
  return useAppSelector((state: RootState) => state.auth.isAuthenticated);
};

export default function Router() {
  const isAuthenticated = useAuth();

  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const isAuthenticated = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const routes = useRoutes([
    {
      element: (
        <PrivateRoute>
          <Layout>
            <Suspense fallback={<LoadingPage />}>
              <Outlet />
            </Suspense>
          </Layout>
        </PrivateRoute>
      ),
      children: [
        {
          element: <IndexPage />,
          index: true,
        },
        {
          path: "customer",
          element: <CustomerPage />,
        },
      ],
    },
    {
      path: "login",
      element: isAuthenticated ? <Navigate to="/" /> : <LoginPage />,
    },
    {
      path: "register",
      element: isAuthenticated ? <Navigate to="/" /> : <RegisterPage />,
    },

    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return routes;
}
