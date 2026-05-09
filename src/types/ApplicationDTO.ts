import type { ApplicationStatus } from "./ApplicationStatus"

export type JobApplicationDTO = {
	company: string
	jobTitle: string
	dateApplied: Date
	applicationStatus: ApplicationStatus
}
