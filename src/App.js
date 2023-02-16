import "./App.css";
import AboutUs from "./Components/About us";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter as  Router,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar title="textUtils" />
        <Routes>
          <Route exact path="/about"element={<AboutUs/>}/>
          <Route  exact path="/"element={<TextForm heading="Enter the text to analyze of era" />}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
