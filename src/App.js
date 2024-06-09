function App(props) {
    const currDate = new Date();
  
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>The date is {currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  export default App;