import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CandidatesCatalog,
  loader as candidatesLoader,
} from "./pages/CandidatesCatalog/CandidatesCatalog";
import {
  CandidateDetails,
  loader as candidateDetailsLoader,
} from "./pages/CandidateDetails/CandidateDetails";
import { ErrorPage } from "./pages/ErrorPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <CandidatesCatalog />,
    loader: candidatesLoader,
  },
  {
    path: "/candidate/:id",
    element: <CandidateDetails />,
    loader: candidateDetailsLoader,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
