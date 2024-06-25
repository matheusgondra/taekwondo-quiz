import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes.tsx";
import { QuizContextProvider } from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QuizContextProvider>
			<RouterProvider router={router} />
		</QuizContextProvider>
	</React.StrictMode>
);
