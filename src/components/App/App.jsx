import { Header } from "../Header/Header";
import { CountrySearch, Home, Country } from "pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "routes";

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Header />}>
        <Route index element={<Home />} />
        <Route path={routes.COUNTRY} element={<CountrySearch />} />
        <Route path={routes.COUNTRY_ID} element={<Country />} />
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Route>
    </Routes>
  );
};

