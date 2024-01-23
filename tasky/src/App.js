import './App.css';
import Task from './components/Task';
function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Clean your dishes" />
      <Task title="Laundry" deadline="Tomorrow" description="Clean your clothes"/>
      <Task title="Tidy" deadline="Today" description="Clean your house" />
    </div>
  );
}

export default App;
