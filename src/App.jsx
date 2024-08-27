import Header from "./component/Header.jsx";
import Results from "./component/Results.jsx";
import UserInput from "./component/User-Input.jsx";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handlerChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} OnChange={handlerChange} />
      {!inputIsValid && <p className="center">Please enter valid duration.</p>}
      {inputIsValid && <Results input={userInput} />}
      
    </>
  );
}

export default App;
