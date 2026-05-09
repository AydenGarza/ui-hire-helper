import type { ApplicationStatus } from "./ApplicationStatus"

export type JobApplicationDAO = {
	company: string
	jobTitle: string
	dateApplied: Date
	applicationStatus: ApplicationStatus
	applicationId: string
	userId: string
}
