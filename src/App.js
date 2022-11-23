import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Jobs from "./components/postedjobs/Jobs";

function App() {
    return (
        <div className="body">
            <Navbar />
            {/* <Login /> */}
            <Jobs />
        </div>
    );
}

export default App;
