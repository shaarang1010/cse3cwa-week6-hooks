import logo from "./logo.svg";
import "./App.css";
import ExampleComponent from "./hooks/HooksExample";
import UserProvider from "./hooks/Context/providers/UserProvider";
import LoginTest from "./hooks/LoginTest";

function App() {
  return (
    <div className="App">
      {/* <ExampleComponent /> */}
      <UserProvider>
        {/* <ExampleComponent /> */}
        <LoginTest />
      </UserProvider>
    </div>
  );
}

export default App;
