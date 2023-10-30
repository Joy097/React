import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  let marks = 100;
  return (
    <div>
        {(()=>{
          if(marks>80){
            return ""
          }
        })()}
    </div>
  );
};

export default App;