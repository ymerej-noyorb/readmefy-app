import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main className="mt-32 gap-32 flex flex-col">
				<Hero />
				<Features />
			</main>
			<Footer />
		</>
	);
}
