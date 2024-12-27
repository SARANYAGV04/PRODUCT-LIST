import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Compents/Sidebar";
import ContactTable from "./Compents/ContactTable";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <ContactTable />
      </div>
    </div>
  );
}

export default App;