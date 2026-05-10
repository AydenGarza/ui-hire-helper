import JobApplication from './components/jobApplicationCard'
import LoginPage from './pages/LoginPage'
import type { JobApplicationDTO } from './types/ApplicationDTO'
import ThemeToggleButton from './components/ThemeToggleButton'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		document.body.classList.add("light")
		localStorage.setItem("theme", "light")
	}, [])
	
	return(
		<div className='bg-background min-h-screen relative'>
			<ThemeToggleButton/>
			<LoginPage />
		</div>
	)
}

export default App
