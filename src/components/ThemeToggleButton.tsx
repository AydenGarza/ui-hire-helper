import { useState } from "react";

export default function ThemeToggleButton() {
	const toggleThemeClass = () => {
		const theme = localStorage.getItem("theme");
		if (theme === "light") {
			localStorage.setItem("theme", "dark")
			document.body.classList.remove("light")
			document.body.classList.add("dark")
		}
		else {
			localStorage.setItem("theme", "light")
			document.body.classList.remove("dark")
			document.body.classList.add("light")
		}
	}
	return (
		<div>
			<button className="fixed top-4 right-4 z-100 bg-themebutton rounded-3xl p-1 text-white" onClick={toggleThemeClass}>
				Toggle Theme
			</button>
		</div>
	)
}