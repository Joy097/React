import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  let marks = 20;
  let arr = ['mango',];
  return (
    <div>
        {(()=>{
          if(marks>80){
            return "Good boy"
          }
          else{
            return "Bad boy"
          }
        })()}

        <ul>
          {
            arr.map((item,i)=>{

            })
          }
        </ul>
    </div>
  );
};

export default App;