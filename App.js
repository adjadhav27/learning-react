/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm a H1 Tag</h1>
 *  </div>
 * </div>
 *
 *
 *
 */

//Following Example of single <h1> element using React
// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading" /*for adding attributes like JS object properties like id, class, name, ...etc */,
//   },
//   "Hello World! from React"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a H1 tag"),
    React.createElement("h2", {}, "I'm a H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a H1 tag"),
    React.createElement("h2", {}, "I'm a H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
