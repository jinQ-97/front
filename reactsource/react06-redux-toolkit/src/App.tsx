import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavi from "./components/TopNavi";
import ReduxBasicApp from "./features/counter/ReduxBasicApp";

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<ReduxBasicApp />} />
        <Route path="/redux-basic" element={<ReduxBasicApp />} />
      </Routes>
    </>
  );
}

export default App;
