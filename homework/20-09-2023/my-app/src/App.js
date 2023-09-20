import logo from "./logo.svg";
import "../src/App.css";

function App() {
  const interests = [
    "Cats",
    "JavaScript",
    "Fitness",
    "Reading",
    "Traveling",
    "Plants",
    "Music",
    "Art",
    "Tea",
    "Learning languages",
    "Photography",
    "Journaling",
    "Web Development",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Name">Evelin</div>
        <div className="Interests">
          <p>Interests:</p>
          <ul className="interest-list">
            {interests.map((interest, index) => (
              <li key={index} className="interest-item">
                {interest}
              </li>
            ))}
          </ul>
        </div>
        <div className="Input-section">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <button type="submit">Submit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
