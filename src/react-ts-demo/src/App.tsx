import './App.css';
import { Card } from './Card';

const logCardGreeting = () => {
  console.log("I am a fun card!")
}

export const App = () => {
  return (
    <div className="App">
      <header className="App-container">
        <Card 
          courseName="Front-End Engineer" 
          courseType="Career Path" 
          clickHandler={logCardGreeting}
          showProLabel={true}
          tag="Job Essentials"
        />
      </header>
    </div>
  );
};
