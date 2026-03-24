import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Chef } from "./pages/Chef";
import { History } from "./pages/History";
import { Location } from "./pages/Location";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "menu", Component: Menu },
      { path: "chef", Component: Chef },
      { path: "history", Component: History },
      { path: "location", Component: Location },
    ],
  },
]);
