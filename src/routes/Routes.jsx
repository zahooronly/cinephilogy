import { Routes, Route } from "react-router";
import { ROUTES_CONFIG } from "../lib/constants/routesConstants";
import { ProtectedRoutes } from "../components/layout/ProtectedRoutes";
import { AuthRoutes } from "../components/layout/AuthRoutes";

export const CustomRoutes = () => {
  const renderRoutes = (routes) =>
    routes.map(
      ({ path, element, children, isProtected, isAuthRoute, index }) => {
        let wrappedElement;
        if (isProtected) {
          wrappedElement = <ProtectedRoutes>{element}</ProtectedRoutes>;
        } else if (isAuthRoute) {
          wrappedElement = <AuthRoutes>{element}</AuthRoutes>;
        } else {
          wrappedElement = element;
        }

        const routeProps = {
          ...(index ? { index: true } : { path }),
          element: wrappedElement,
        };

        if (children && children.length > 0) {
          return (
            <Route key={path} {...routeProps}>
              {renderRoutes(children)}
            </Route>
          );
        }

        return <Route key={path} {...routeProps} />;
      }
    );

  return <Routes>{renderRoutes(ROUTES_CONFIG)}</Routes>;
};
