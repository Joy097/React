import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  let marks = 100;
  return (
    <div>
      {marks>80?<h1>Brilliant Result</h1>:<h1>Average result</h1>}
    </div>
  );
};

export default App;