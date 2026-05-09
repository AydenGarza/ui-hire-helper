import JobApplication from './components/jobApplicationCard'
import type { JobApplicationDTO } from './types/ApplicationDTO'

function App() {
	const application: JobApplicationDTO = {
		company: "MetLife",
		jobTitle: "Junior Software Engineer",
		dateApplied: new Date(),
		applicationStatus: "Applied"
	} 
  return (
    <>
			<h1 className='text-3xl text-blue-500'>im cooked</h1>
			<JobApplication applicationDTO={application}></JobApplication>
    </>
  )
}

export default App
