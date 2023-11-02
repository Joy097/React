import Child1 from "./component/Child1";

const PARENT = () => {
    return (
        <div>
            <Child1 title="This is passing props"/>
        </div>
    );
};

export default PARENT;