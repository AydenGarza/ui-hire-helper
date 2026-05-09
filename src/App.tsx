import { useState } from 'react'
import JobApplication from './jobApplicationCard'

function App() {

  return (
    <>
			<h1 className='text-3xl text-blue-500'>im cooked</h1>
			<JobApplication company={"MetLife"} jobTitle={"Senior Meeting Lady"} applicationId={2} dateApplied={new Date()} applicationStatus={"applied"}></JobApplication>
    </>
  )
}

export default App
