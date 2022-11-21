import "./App.css";
import RenderJson from "./components/JsonData";
import JsonWrapper from "./components/JsonWrapper";

function App({ data }) {
  return (
    <JsonWrapper>
      <RenderJson data={data} />
    </JsonWrapper>
  );
}

export default App;
