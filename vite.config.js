import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		host: "0.0.0.0",
		watch: {
			usePolling: true,
		},
		hmr: {
			protocol: "ws",
			host: "readmefy.localhost",
			port: 5173,
		},
	},
});
