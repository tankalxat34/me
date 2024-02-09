import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AppOutlet from "./AppOutlet";
import MainPage from "./MainPage/MainPage";
import Contacts from "./contacts/Contacts";
import Notfound from "./NotFound/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppOutlet />}>
          <Route index element={<MainPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
