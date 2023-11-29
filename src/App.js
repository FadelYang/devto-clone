import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

function App() {
  return (
    <div className="App bg-gray-100">
      <Navbar/>
      <Post />
    </div>
  );
}

export default App;
