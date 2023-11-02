import Child1 from "./component/Child1";

const PARENT = () => {
    const ItemObj = {
        name: "Joy",
        age: 76,
        city:"Dhaka"
    }
    return (
        <div>
            <Child1 
            item={ItemObj}
            title="This is passing props"
            description="This passing props description"/>
        </div>
    );
};

export default PARENT;