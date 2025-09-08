import { Routes, Route } from "react-router";
import { ROUTES_CONFIG } from "../lib/constants/routesConstants";
import { ProtectedRoutes } from "../components/layout/ProtectedRoutes";

export const CustomRoutes = () => {
  const renderRoutes = (routes) =>
    routes.map(({ path, element, children, isProtected, index }) => {
      const wrappedElement = isProtected ? (
        <ProtectedRoutes>{element}</ProtectedRoutes>
      ) : (
        element
      );

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
    });

  return <Routes>{renderRoutes(ROUTES_CONFIG)}</Routes>;
};
