import NavBar from "@/components/organisms/navBar/NavBar";
import { CockTailView, Homeview, NotFoundView, SearchView } from "@/views";
import { Route, Routes } from "react-router-dom";
import { IngredientView } from '../views/IngredientView';

export default function PublicRoutes() {
  return (
    <div>
      <NavBar /> // componente de navegación
      <Routes>
        <Route path="" element={<Homeview/>} />
        <Route path="/cocktail/:id" element={<CockTailView/>} />
        <Route path="/ingredient/:ingredientID" element={<IngredientView/>} />
        <Route path="/search/:item" element={<SearchView/>} />
        <Route path="/404" element={<NotFoundView/>} />
      </Routes>
    </div>
  );
}
