import Card from "./Card";

function Home() {
  return (
    <div className="center-page">
      <h1>Home</h1>

      <div className="card-container">
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Card title="Card 3" description="This is the third card." />
      </div>
    </div>
  );
}

export default Home;