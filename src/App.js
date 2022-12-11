import Counter from "./components/counter/Counter";
import CustomButton from "./components/customButton/CustomButton";
import ItemListContainer from "./components/itemListContain/ItemListContainer";
import Navbar from "./components/navBar/NavBar"

function App() {

  return (
    <div>
       <Navbar />

       <Counter />

       <ItemListContainer />


     
    </div>
  );
}

export default App;
