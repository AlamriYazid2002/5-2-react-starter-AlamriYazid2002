import './App.css'
import StudentName from './component/StudentName'
import StudentID from './component/StudentID'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
          <StudentName name = "Yazid" />
          <StudentID id = "202176430" />
        </div>
      </main>
    </div>
  )
}

export default App
