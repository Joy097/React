const container = document.querySelector('#root');
const element = React.createElement("div", null, 
[React.createElement("p",null, "hello world"),
React.createElement("p",null, "hello world"),
React.createElement("p",null, "hello world")]);

ReactDOM.render(element, container);