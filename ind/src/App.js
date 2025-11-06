import React from 'react';
import Card from './Card';
import './App.css';
import car1 from './assets/car1.jpg';
import car2 from './assets/car2.jpg';
import car3 from './assets/car3.jpg';

function App() {
  return (
    <div className="App">
      <h1>Vehicle Display App</h1>

      <div className="card-container">
        <Card
          image={car1}
          title="Tesla Model S"
          description="An electric luxury sedan with incredible speed and technology."
        />
        <Card
          image={car2}
          title="Lamborghini Aventador"
          description="A high-performance sports car with a bold and iconic design."
        />
        <Card
          image={car3}
          title="BMW X5"
          description="A premium SUV combining comfort, performance, and innovation."
        />
      </div>
    </div>
  );
}

export default App;