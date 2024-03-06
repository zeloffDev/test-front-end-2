import { Homepage } from "@/pages/homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
