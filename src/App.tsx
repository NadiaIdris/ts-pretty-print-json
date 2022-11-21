import RenderJson from "./components/RenderJson";
import JsonWrapper from "./components/JsonWrapper";

function App({ data }) {
  return (
    <JsonWrapper>
      <RenderJson data={data} />
    </JsonWrapper>
  );
}

export default App;
