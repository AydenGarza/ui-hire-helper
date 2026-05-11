import type { JobApplicationDTO } from "../types/ApplicationDTO"

type Props = {
	applicationDTO: JobApplicationDTO
}

const JobApplication = ({ applicationDTO }: Props) => {
	return <div className="border rounded-lg px-2 m-2 bg-gray-50">
		<div className="text-base font-semibold py-2">
			{applicationDTO.job_title}
		</div>
		<div className="flex gap-4 justify-between py-2 text-gray-700">
			<div>Date Applied: {applicationDTO.date_applied}</div>
			<div>Status: {applicationDTO.application_status}</div>
			<div>{applicationDTO.company}</div>
		</div>
	</div>
}

export default JobApplication
