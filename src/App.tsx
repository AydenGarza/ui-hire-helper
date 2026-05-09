import JobApplication from './components/jobApplicationCard'

function App() {

  return (
    <>
			<h1 className='text-3xl text-blue-500'>im cooked</h1>
			<JobApplication company={"MetLife"} jobTitle={"Senior Meeting Lady"} dateApplied={new Date()} applicationStatus={"Applied"}></JobApplication>
    </>
  )
}

export default App
