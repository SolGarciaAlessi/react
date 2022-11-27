
import ItemListContainer from "./components/itemListContain/ItemListContainer";
import Navbar from "./components/navBar/NavBar"

function App() {

  return (
    <div>
       <Navbar />
       <ItemListContainer greeting={"Buenos dias"}/>
    </div>
  );
}

export default App;
