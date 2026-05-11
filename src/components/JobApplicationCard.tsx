import type { JobApplicationDTO } from "../types/ApplicationDTO"
import { useState } from "react";

type Props = {
	applicationDTO: JobApplicationDTO
	onUpdateCallback: () => void
}

const statuses = ["Applied", "Interviewing", "Offer", "Rejected"];

const JobApplication = ({ applicationDTO, onUpdateCallback }: Props) => {
	const [updating, setUpdating] = useState(false);
	const [company, setCompany] = useState(applicationDTO.company)
	const [jobTitle, setJobTitle] = useState(applicationDTO.job_title)
	const [dateApplied, setDateApplied] = useState(applicationDTO.date_applied)
	const [appStatus, setAppStatus] = useState(applicationDTO.application_status)

	async function deleteApplication() {
		if (!confirm(`Are you sure you want to delete your application for ${applicationDTO.job_title} at ${applicationDTO.company}?`)) {
			return;
		}

		const jwt = localStorage.getItem("access_token");
		const req = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${jwt}`
			},
			body: JSON.stringify({
				"company": company,
				"job_title": jobTitle,
			})
		}
		
		const response = await fetch("http://localhost:8000/api/applications", req);
		if (!response.ok) {
			alert('Something went wrong.. please try again')
		}
		setUpdating(false);
		onUpdateCallback();
	}
	
	async function updateApplication () {
		if (!statuses.includes(appStatus)) {
			alert("Invalid application status, choose from Applied Interviewing Offer or Rejected");
			return;
		}

		if (!appStatus || !company || !jobTitle || !dateApplied) {
			alert('Application status, company, job title, and date applied must be provided');
		}

		const jwt = localStorage.getItem("access_token");
		const req = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${jwt}`
			},
			body: JSON.stringify({
				"old_company_identifiers": {
					"company": applicationDTO.company,
					"job_title": applicationDTO.job_title,
				},
				"updates": {
					"company": company,
					"job_title": jobTitle,
					"date_applied": dateApplied,
					"application_status": appStatus
				}
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
		setUpdating(false);
		onUpdateCallback();
	}
	
	
	
	return <div className="border border-blue-400 rounded-lg px-2 m-2" onClick={() => setUpdating(true)}>
		<div className="text-textcolor font-semibold py-2">
			{applicationDTO.job_title}
		</div>
		<div className="flex gap-4 justify-between py-2 text-textcolor">
			<div>Date Applied: {applicationDTO.date_applied}</div>
			<div>Status: {applicationDTO.application_status}</div>
			<div>Company: {applicationDTO.company}</div>
			{updating && (
				<div className="fixed inset-0 bg-background flex items-center justify-center z-50">
					<div className = "flex p-4 gap-5">
						<input placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} className="border bg-background text-textcolor flex-1 rounded"/>
						<input placeholder="Job Title" value={jobTitle} onChange={e => setJobTitle(e.target.value)} className="border bg-background text-textcolor flex-1 rounded"/>
						<input type="date" value={dateApplied} onChange={e => setDateApplied(e.target.value)} className="border bg-background text-textcolor rounded"/>
						<select value={appStatus} onChange={e => setAppStatus(e.target.value)} className="border bg-background text-textcolor rounded p-2">
							<option value="">Select Status</option>
							{statuses.map(status => <option key={status} value={status}>{status}</option>)}
						</select>
						<button className="border p-1 bg-green-400 rounded" onClick={(e) => { e.stopPropagation();  updateApplication() }}>Update</button>
						<button className="border p-1 bg-orange-400 rounded" onClick={(e) => { e.stopPropagation(); setUpdating(false) }}> Finished</button>
						<button className="border p-1 bg-red-400 rounded" onClick={(e) => { e.stopPropagation(); deleteApplication(); }}>Delete</button>
					</div>
				</div>
			)}
		</div>
	</div>
}

export default JobApplication
