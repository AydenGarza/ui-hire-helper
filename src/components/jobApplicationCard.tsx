import type { JobApplicationDTO } from "../types/ApplicationDTO"

type Props = {
	applicationDTO: JobApplicationDTO
}

const JobApplication = ({ applicationDTO }: Props) => {
	return <div className="border rounded-lg px-2 m-2 bg-gray-50">
		<div className="text-base font-semibold py-2">
			{applicationDTO.jobTitle}
		</div>
		<div className="flex gap-4 justify-between py-2 text-gray-700">
			<div>Date Applied: {applicationDTO.dateApplied.toLocaleDateString()}</div>
			<div>Status: {applicationDTO.applicationStatus}</div>
			<div>{applicationDTO.company}</div>
		</div>
	</div>
}

export default JobApplication
