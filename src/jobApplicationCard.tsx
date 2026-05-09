type ApplicationStatus = "applied" | "interviewing" | "accepted" | "rejected";

type JobApplicationSchema = {
	company: string
	jobTitle: string
	applicationId: number
	dateApplied: Date
	applicationStatus: ApplicationStatus
}

const JobApplication = ({company, jobTitle, applicationId, dateApplied, applicationStatus}: JobApplicationSchema) => {
	return <div className="border rounded-lg px-2 m-2 bg-gray-50">
		<div className="text-base font-semibold py-2">
			{jobTitle}
		</div>
		<div className="flex gap-4 justify-between py-2 text-gray-700">
			<div>{applicationId}</div>
			<div>Date Applied: {dateApplied.toLocaleDateString()}</div>
			<div>Status: {applicationStatus}</div>
			<div>{company}</div>
		</div>
	</div>
}

export default JobApplication
