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
			<div className='flex divide-y'>
				<JobApplication applicationDTO={application}></JobApplication>
			</div>
		)
}

export default App
