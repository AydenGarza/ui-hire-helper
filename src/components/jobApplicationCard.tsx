import type { JobApplicationDTO } from "../types/ApplicationDTO"
import { useState } from "react";

type Props = {
	applicationDTO: JobApplicationDTO
	onUpdateCallback: () => void
}

const statuses = ["Applied", "Interviewing", "Offer", "Rejected"];

const JobApplication = ({ applicationDTO, onUpdateCallback }: Props) => {

	const updateApplication = () => {
		
	}
	
	const [updating, setUpdating] = useState(false);
	const [company, setCompany] = useState('')
	const [jobTitle, setJobTitle] = useState('')
	const [dateApplied, setDateApplied] = useState('')
	const [appStatus, setAppStatus] = useState('')
	
	
	return <div className="border rounded-lg px-2 m-2" onClick={() => setUpdating(true)}>
		<div className="text-textcolor font-semibold py-2">
			{applicationDTO.job_title}
		</div>
		<div className="flex gap-4 justify-between py-2 text-textcolor">
			<div>Date Applied: {applicationDTO.date_applied}</div>
			<div>Status: {applicationDTO.application_status}</div>
			<div>Company: {applicationDTO.company}</div>
			{updating && (
				<div className="fixed bg-gray-700 flex items-center justify-center z-50">
					<div className = "flex p-4 gap-5">
						<input placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} className="border bg-background text-textcolor flex-1 rounded"/>
						<input placeholder="Job Title" value={jobTitle} onChange={e => setJobTitle(e.target.value)} className="border bg-background text-textcolor flex-1 rounded"/>
						<input placeholder="Date YYYY-MM-DD" value={dateApplied} onChange={e => setDateApplied(e.target.value)} className="border bg-background text-textcolor rounded"/>
						<input placeholder="Status" value={appStatus} onChange={e => setAppStatus(e.target.value)} className="border bg-background text-textcolor rounded" />
						<button className="border p-1 bg-green-400 rounded" onClick={updateApplication}>Update</button>
						<button className="border p-1 bg-orange-400 rounded" onClick={(e) => { e.stopPropagation();  setUpdating(false)}}> Finished</button>
					</div>
				</div>
			)}
		</div>
	</div>
}

export default JobApplication
