const container = document.querySelector('#root');
const Increment = () =>
{
    const [counter, setCounter] = React.useState(0)
    return (<div>
    <h1 id="display">{counter}</h1>
    <div>
        <button id="button" c>Increment +</button>
    </div>
    </div>);
}



ReactDOM.render(Increment(), container);