import React, { useEffect, useState, Component, useRef } from "react";

// class ExampleComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       age: 0,
//     };
//   }

//   componentDidMount() {
//     this.setState({ name: "John", age: 20 });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.name !== prevState.name) {
//       console.log(`the previous name was ${prevState.name}`);
//     }
//   }

//   componentWillUnmount() {
//     console.log("Unmounting component");
//   }

//   render() {
//     return (
//       <>
//         <p>Hello world</p>
//         <button onClick={() => this.setState({ name: "Joey" })}>
//           Click to change name
//         </button>
//       </>
//     );
//   }
// }

const ExampleComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [counter, setCounter] = useState(0);
  const input = useRef();

  useEffect(() => {
    // setName("John");
    // // setName(() => {
    // //   "John";
    // //   console.log(name);
    // // });
    // setCounter(() => counter + 1);
    // setAge(20);
    // const timer = setTimeout(
    //   () => (counterValue.current = counterValue.current + 1),
    //   3000
    // );
    console.log("Render cycle is run ......");
    return () => {
      //   clearTimeout(timer);
    };
  }, [counter]);

  const onFocusTextHandler = () => {
    input.current.focus();
  };

  return (
    <>
      <h1>Name is : {name}</h1>
      <div style={{ marginTop: "50vh" }}>
        {/* <h1> Counter value is currently {counterValue.current}</h1> */}
        <input
          type="text"
          ref={input}
          value={name}
          style={{ width: "400px" }}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={onFocusTextHandler}>
          Click me to focus on the text field
        </button>
      </div>
    </>
  );
};

export default ExampleComponent;
