import "../styles/App.css";
import Layout from "./Layout";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
//import Home from "./pages/Home";
//import Signup from "./pages/Signup";

function App() {
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}

export default App;
