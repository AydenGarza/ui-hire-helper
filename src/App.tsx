import JobApplication from './components/jobApplicationCard'
import LoginPage from './pages/LoginPage'
import type { JobApplicationDTO } from './types/ApplicationDTO'
import ThemeToggleButton from './components/ThemeToggleButton'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import KanbanPage from './pages/KanbanPage'

function App() {
	useEffect(() => {
		document.body.classList.add("light")
		localStorage.setItem("theme", "light")
	}, [])
	
	return(
		<div className='bg-background min-h-screen relative'>
			<ThemeToggleButton/>
			<div className="pt-15">
				<Routes>
					<Route path="/" element={<LoginPage />}></Route>
					<Route path="/kanban" element={<KanbanPage/>}></Route>
				</Routes>
			</div>
		</div>
	)
}

export default App
