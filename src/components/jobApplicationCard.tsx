import type { JobApplicationDTO } from "../types/ApplicationDTO"
import { useState } from "react";

type Props = {
	applicationDTO: JobApplicationDTO
	onUpdateCallback: () => void
}

const statuses = ["Applied", "Interviewing", "Offer", "Rejected"];

const JobApplication = ({ applicationDTO, onUpdateCallback }: Props) => {

	const [updating, setUpdating] = useState(false);
	
	return <div className="border rounded-lg px-2 m-2" onClick={() => setUpdating(true)}>
		<div className="text-textcolor font-semibold py-2">
			{applicationDTO.job_title}
		</div>
		<div className="flex gap-4 justify-between py-2 text-textcolor">
			<div>Date Applied: {applicationDTO.date_applied}</div>
			<div>Status: {applicationDTO.application_status}</div>
			<div>Company: {applicationDTO.company}</div>
			{updating ? "true": "false"}
		</div>
	</div>
}

export default JobApplication
