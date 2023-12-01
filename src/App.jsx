import "./App.css";
import { getPostCategory } from "./api";
import LeftMenu from "./components/LeftMenu";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostMenu from "./components/PostMenu";
import RightMenu from "./components/RightMenu";

function App() {
  console.log(getPostCategory());

  return (
    <div className="App bg-gray-100">
      <Navbar />
      <div className="flex gap-1 px-5 2xl:px-40">
        <div className="w-1/3 mt-5">
          <LeftMenu />
        </div>
        <div className="">
          <PostMenu />
          <Post />
        </div>
        <div className="mt-5">
          <RightMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
