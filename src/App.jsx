import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hub from "./pages/Hub";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Router>
			<Header />
			<main className="mt-32 gap-32 flex flex-col">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/hub" element={<Hub />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}
