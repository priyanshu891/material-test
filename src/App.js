import "./App.css";
import Blog from "./Components/Blog";
import Header from "./Components/Header";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Blog />
    </div>
  );
}

export default App;
