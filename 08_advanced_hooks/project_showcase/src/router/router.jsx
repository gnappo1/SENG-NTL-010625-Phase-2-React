import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import Error from "../components/navigation/Error";
import ProjectsContainer from "../components/project/ProjectsContainer";
import ProjectForm from "../components/project/ProjectForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, //! an index route is a child route that displays for the same endpoint of the parent 
        element: <ProjectsContainer />
      },
      {
        path: "/projects/new",
        element: <ProjectForm />,
      },
      {
        path: "/projects/:projectId/edit",
        element: <ProjectForm />,
      },
    ],
  },
]);

export default router;