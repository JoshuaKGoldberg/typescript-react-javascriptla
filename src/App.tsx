import "./App.css";
import { Card } from "./Card";

export const App = () => {
  return (
    <div className="App">
      <header className="App-container">
        <Card courseType="Career Path" showProLabel={true} />
      </header>
    </div>
  );
};
