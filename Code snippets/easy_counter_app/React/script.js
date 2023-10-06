const container = document.querySelector('#root');
const Increment = () =>
{
    return (<div>
    <h1 id="display">0</h1>
    <div>
        <button id="button">Increment +</button>
    </div>
    </div>);
}



ReactDOM.render(Increment(), container);