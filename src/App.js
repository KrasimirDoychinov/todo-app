import Card from "./components/Card";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div>
      <Card>
        <Form />
        <hr className="bg-warning"/>
        <List />
      </Card>
    </div>
  );
}

export default App;
