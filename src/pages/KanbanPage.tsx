import { useState, useEffect } from "react"

import type { JobApplicationDTO } from "../types/ApplicationDTO";
import JobApplication from "../components/jobApplicationCard";

export default function KanbanPage() {

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
	useEffect(() => {getApplications()}, [])
	return (
		<div className="bg-background flex flex-col gap-3">
			{
				applications.map(application => ( <JobApplication key={application.id} applicationDTO={application}></JobApplication>))
			}
		</div>
	)
}