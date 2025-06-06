import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement - JS Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "hello React");

console.log(heading);

//JSX (transpiled before it reaches browser)
// babel => converts JSX to JS
//JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)

const JsxHeading = () => (
  <h1 id="heading">
    hello React
  </h1>
);

//* component 
// class-based component

//?function-based component

const sum = 25 + 30
const HeadingComponent = () => {
  return (
    <div>
      <JsxHeading/>
      <h1 id="heading">
      Namaste React functional component
    </h1>
      <h2>{sum}</h2>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
