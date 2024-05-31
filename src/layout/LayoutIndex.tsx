import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const LayoutIndex = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "56px",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default LayoutIndex;
