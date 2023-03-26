import MyRoutes from "./routes/routes";
import { DigimonProvider } from "./context/DigimonProvider";

function App() {
  return (
    <>
      <DigimonProvider>
        <MyRoutes />
      </DigimonProvider>
    </>
  );
}

export default App;
