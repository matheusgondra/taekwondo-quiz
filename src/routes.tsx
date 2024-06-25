import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/Error";
import { HomePage } from "./pages/Home";
import { QuestionPage } from "./pages/Question";
import { ResultPage } from "./pages/Result";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/question/:id",
		element: <QuestionPage />,
		errorElement: <ErrorPage />
	},
	{
		path: "/result",
		element: <ResultPage />
	}
]);
