import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ApartmentList from "./pages/ApartmentList";
import ApartmentDetailPage from "./pages/ApartmentDetailPage";
import ApartmentCreate from "./pages/ApartmentCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ApartmentList /> },
      { path: "apartments/:id", element: <ApartmentDetailPage /> },
      { path: "apartments/create", element: <ApartmentCreate /> },
    ],
  },
]);

export default router;
