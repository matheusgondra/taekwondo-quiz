import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Question } from "./pages/Question";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/question/:id",
		element: <Question />
	}
]);
