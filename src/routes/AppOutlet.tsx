import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const AppOutlet = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppOutlet;
