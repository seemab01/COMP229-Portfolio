// Projects page: four projects with an image, my role and the outcome
function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>

      <div className="cards">
        <div className="card">
          <img src="/images/project-3.svg" alt="Personal portfolio website" />
          <h3>Personal Portfolio Website</h3>
          <p>This website! A six page portfolio built with React, React Router and CSS.</p>
          <p><b>My role:</b> Designer and developer</p>
          <p><b>Outcome:</b> A responsive site with a working contact form, hosted online.</p>
        </div>

        <div className="card">
          <img src="/images/project-1.svg" alt="Task manager app" />
          <h3>Task Manager App (in progress)</h3>
          <p>A to-do list app where you can add, finish and delete tasks.</p>
          <p><b>My role:</b> Developer (practice project)</p>
          <p><b>Outcome:</b> Learning React state and how to build forms.</p>
        </div>

        <div className="card">
          <img src="/images/project-2.svg" alt="Weather app" />
          <h3>Weather App (in progress)</h3>
          <p>A page that shows the weather for a city that the user searches.</p>
          <p><b>My role:</b> Developer (practice project)</p>
          <p><b>Outcome:</b> Learning how to get data from an API.</p>
        </div>
        <div className="card">
          <img src="/images/project-4.svg" alt="Expense and budget tracker" />
          <h3>Expense and Budget Tracker (in progress)</h3>
          <p>A finance app where you can record income and expenses, set a monthly budget and see totals by category.</p>
          <p><b>My role:</b> Developer (practice project, built on my accounting background)</p>
          <p><b>Outcome:</b> Practicing React state, forms and calculating totals and balances.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
