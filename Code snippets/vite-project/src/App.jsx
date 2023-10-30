import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  let marks = 20;
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
    </div>
  );
};

export default App;