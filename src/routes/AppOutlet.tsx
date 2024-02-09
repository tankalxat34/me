import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const AppOutlet = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AppOutlet;
