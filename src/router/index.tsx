import { useRoutes } from "react-router-dom";
import LayoutIndex from "@/layout/LayoutIndex";
import Home from "@/pages/Home"; // 确保路径和组件名称一致

const rootRouter = [
  {
    path: "/",
    element: <LayoutIndex />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/palmstreet",
        element: <Home />,
      },
    ],
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
