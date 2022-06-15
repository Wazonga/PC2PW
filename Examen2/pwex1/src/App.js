
import './App.css';
import TaskList from './components/TaskList';
import ProjectType from './components/ProjectType'
import ProjectInfo from './components/ProjectInfo'

function App() {
  return (
    <div className="App">
      <ProjectType />
     <TaskList />
    </div>
  );
}

export default App;
