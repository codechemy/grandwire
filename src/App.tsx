import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Routes from "./Routes/routes";

import RootLayout from "./layout/Rootlayout";
import Home from "./View/Home/Home";

import "./styles/Global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {Routes.map((route) => {
        return <Route path={route.path} element={route.component} />;
      })}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
