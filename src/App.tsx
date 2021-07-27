import './App.css';
import { Card } from './Card';

// const logCardGreeting = () => {
//   console.log("I am a fun card!")
// }

export const App = () => {
  return (
    <div className="App">
      <header className="App-container">
        <Card 
          courseType="Career Path" 
          showProLabel={true}
        />
      </header>
    </div>
  );
};
