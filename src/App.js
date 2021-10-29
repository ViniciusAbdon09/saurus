import { ContextProvider } from "./contexts/SegmentContext";
import { Navigation } from "./navigation/Navigation";

function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

export default App;
