import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Question } from "./pages/Question";

export function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/question" element={<Question />} />
			</Routes>
		</Router>
	);
}
