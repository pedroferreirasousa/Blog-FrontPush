import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Article from "./pages/Article";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={Main}/>
            <Route path="/articles/:id" Component={Article}/>
        </Routes>
    </BrowserRouter>
)

export default Rotas;