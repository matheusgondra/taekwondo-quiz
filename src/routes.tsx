import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/Error";
import { HomePage } from "./pages/Home";
import { QuestionPage } from "./pages/Question";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/question/:id",
		element: <QuestionPage />,
		errorElement: <ErrorPage />
	}
]);
