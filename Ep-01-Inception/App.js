/*
 *
 *
 * <div>
 *    <div>
 *      <h1>i am an h1 tag </h1>
 *    <div>
 * <div>
 *
 *
 *
 */  

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h2", {}, "i am an h2 tag"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h2", {}, "i am an h2 tag"),
  ]),
]);

const heading = React.createElement("h1", { id: "heading" }, "hello React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
