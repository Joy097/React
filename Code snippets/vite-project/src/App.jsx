import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  let status = true;

  if (status=true){
    return (
      <div>
        <h1>Login Status</h1>
      </div>
    );
  }
  else{
    return (
      <div>
        <h1>Login Status</h1>      
        </div>
    );
  }
};

export default App;