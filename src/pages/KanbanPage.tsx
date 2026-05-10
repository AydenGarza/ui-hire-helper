import { useState, useEffect } from "react"

export default function KanbanPage() {
	return (
		<div>
			<h1>
				kanban

				{localStorage.getItem("access_token")}
			</h1>
		</div>
	)
}