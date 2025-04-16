import { BrowserRouter, Route, Routes } from "react-router-dom";
import CV from "./page/CV";
import Portfolio from "./page/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
