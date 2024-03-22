import { useService } from "./service/service";

function App() {
  const { getManga } = useService();

  console.log(getManga());

  return (
    <>
      <button>Linux </button>
    </>
  );
}

export default App;
