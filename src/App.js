// import Article from "./components/Article";
import Header from "./components/Header";
import Main from "./pages/Main";

// import {useState } from "react";

function App() {

  // let [carrinho, setCarrinho] = useState(0);



  // const AddItem = () => {
  //   setCarrinho(carrinho + 1)
  //   console.log(carrinho)
  // }

  // const RemoveItem = () => {
  //   if (carrinho > 0) {
  //     setCarrinho(carrinho - 1)
  //     console.log(carrinho)
  //   }

  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Article /> */}

      {/* <div className="btndiv flex-space-between">
          <h1>Carrinho de compras: {carrinho}</h1>
          <div className="btns flex">
            <button className="add-button" onClick={() => AddItem()}>ADICIONAR</button> <br />
            <button className="remove-button" onClick={() => RemoveItem()}>REMOVER</button>
          </div>
        </div> */}
    </div>
  );
};

export default App;