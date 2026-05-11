import { useState, useEffect } from "react"

import type { JobApplicationDTO } from "../types/ApplicationDTO";
import JobApplication from "../components/jobApplicationCard";

export default function KanbanPage() {
	const statuses = ["Applied", "Interviewing", "Offer", "Rejected"]
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

	async function createApplication() {
		if (!statuses.includes(appStatus)) {
			alert("Invalid application status, choose from Applied Interviewing Offer or Rejected");
			return;
		}

		if (!appStatus || !company || !jobTitle || dateApplied) {
			alert('Application status, company, job title, and date applied must be provided');
		}
		const jwt = localStorage.getItem("access_token");
		const req = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${jwt}`
			},
			body: JSON.stringify({
				"company": company,
				"job_title": jobTitle,
				"date_applied": dateApplied,
				"application_status": appStatus
			})
		}
		
		const response = await fetch("http://localhost:8000/api/applications", req);
		if (!response.ok) {
			alert('Something went wrong.. please try again')
		}
		setCompany('');
		setJobTitle('');
		setDateApplied('');
		setAppStatus('');
		getApplications();
	}
	
	const [applications, setApplications] = useState<JobApplicationDTO[]>([]);
	useEffect(() => { getApplications() }, [])
	
	return (
		<div className="bg-background flex flex-col gap-3">

			<div className="flex gap-4 -4 flex-1">
				{
					statuses.map(status => (
						<div key={status} className="flex-1 p-3">
							<h1>{status}</h1>
							{
								applications.filter(a => a.application_status === status).map(application => ( <JobApplication key={application.id} applicationDTO={application}></JobApplication>))
							}
						</div>
					))
				}
			</div>

			<div className = "flex p-4 gap-5">
				<input placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} className="border bg-background text-textcolor flex-1 rounded"/>
				<input placeholder="Job Title" value={jobTitle} onChange={e => setJobTitle(e.target.value)} className="border bg-background text-textcolor flex-1 rounded"/>
				<input placeholder="Date YYYY-MM-DD" value={dateApplied} onChange={e => setDateApplied(e.target.value)} className="border bg-background text-textcolor rounded"/>
				<input placeholder="Status" value={appStatus} onChange={e => setAppStatus(e.target.value)} className="border bg-background text-textcolor rounded" />
				<button className="border p-1 bg-green-400 rounded" onClick={createApplication}>Create</button>
			</div>
		</div>
	)
}