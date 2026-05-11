import { useState, useEffect } from "react"

import type { JobApplicationDTO } from "../types/ApplicationDTO";
import JobApplication from "../components/jobApplicationCard";

export default function KanbanPage() {

	const [company, setCompany] = useState('')
	const [jobTitle, setJobTitle] = useState('')
	const [dateApplied, setDateApplied] = useState('')
	const [appStatus, setAppStatus] = useState('')
	
	async function getApplications() {
		const jwt = localStorage.getItem("access_token");
		const meta = {
			headers: {
				"Authorization": `Bearer ${jwt}`
			}
		}
		const response = await fetch("http://localhost:8000/api/all_applications", meta);
		const responseData = await response.json();
		setApplications(responseData);
	}
	
	const [applications, setApplications] = useState<JobApplicationDTO[]>([]);
	useEffect(() => { getApplications() }, [])
	
	return (
		<div className="bg-background flex flex-col gap-3">
			{
				applications.map(application => ( <JobApplication key={application.id} applicationDTO={application}></JobApplication>))
			}

			<div className = "flex">
				<input placeholder="Company..." value={company} onChange={e => setCompany(e.target.value)}/>
				<input placeholder="Job Title..." value={jobTitle} onChange={e => setJobTitle(e.target.value)}/>
				<input placeholder="Date Applied... YYYY-MM-DD" value={dateApplied} onChange={e => setDateApplied(e.target.value)}/>
				<input placeholder="Status..." value={appStatus} onChange={e => setAppStatus(e.target.value)}/>
			</div>
		</div>
	)
}