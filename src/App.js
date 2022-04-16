import logo from "./logo.svg";
import "./App.css";
//import ExampleComponent from "./hooks/HooksExample";
import ExampleComponent from "./class/ExampleClassComponent";
import UserProvider from "./hooks/Context/providers/UserProvider";
import LoginTest from "./hooks/LoginTest";
import MemoExample from "./hooks/memo/MemoExample";
import ExampleStoreUsingHooks from "./hooks/store-example-hooks/ExampleHooks";

function App() {
  return (
    <div className="App">
      {/** This is a example from Hooks conversion for store */}
      <ExampleStoreUsingHooks />

      {/** Example for Class based store data */}
      {/* <ExampleComponent /> */}

      <UserProvider>
        {/* <ExampleComponent /> */}
        {/* <LoginTest /> */}
        {/* <MemoExample /> */}
      </UserProvider>
    </div>
  );
}

export default App;
