import { useState } from 'react';
import './App.css';

type Student = {
  name: string;
  level: number;
  score: number;
};

const students: Student[] = [
  { name: 'Aiden Carter', level: 1, score: 88 },
  { name: 'Bella Thompson', level: 2, score: 91 },
  { name: 'Caleb Johnson', level: 3, score: 91 },
  { name: 'Daisy Nguyen', level: 3, score: 93 },
  { name: 'Ethan Wright', level: 1, score: 76 },
  { name: 'Gavin Lopez', level: 3, score: 95 },
  { name: 'Hannah Patel', level: 2, score: 95 },
  { name: 'Isaac Chen', level: 2, score: 87 },
];

const App: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const filteredStudents =
    selectedLevel === 'All'
      ? students
      : students.filter((s) => s.level === Number(selectedLevel));

  return (
    <div style={{borderColor:"green"}}>
    <div className="app-container">
      <div className="card">
        <h1 className="title">Students Overview</h1>

        <div className="filter-section">
          <label htmlFor="levelFilter">Filter by level</label>
          <select
            id="levelFilter"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="All">All Levels</option>
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
          </select>
        </div>

        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.level}</td>
                <td>{student.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};
export default App
