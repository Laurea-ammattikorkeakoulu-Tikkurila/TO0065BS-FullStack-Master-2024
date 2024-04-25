import "./App.css";
import Hello from "./components/Hello";
import CustomHello from "./components/CustomHello";
import Elementti from "./components/Elementti";
import Time from "./components/Time";
import Lista from "./components/Lista";

const App = () => {
  return (
    <div className="App">
      <h1> Laurea FullStack 2024 React sovellus!</h1>
      <Time />
      <Hello />
      <CustomHello
        author="Aku Ankka"
        greeting="'Tere Moro Hei!'"
        color="blue"
        image="https://www.shutterstock.com/image-vector/donald-duck-character-vector-illustration-600nw-2307712567.jpg"
      />
      <CustomHello
        author="Mikki Hiiri"
        greeting="'Goedemorgen!'"
        color="green"
        image="https://cdn.pixabay.com/photo/2022/05/30/04/50/mickey-mouse-7230486_640.png"
      />
      {<Elementti />}

      <Lista />
    </div>
  );
};

export default App;
