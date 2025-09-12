import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";
function App() {
  const [formData, setFormData] = useState([]); // state to hold form data

  //function to handle form submission
  const handleFormSubmit = (newData) => {
    setFormData([...formData, newData]); // add new form data to state
    console.log("Form Data Submitted: ", newData); // log the submitted data
  };
  const deleteData = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
        }}
      >
        <div>
          <Header />
        </div>
        <div>
          <Form onSubmit={handleFormSubmit} />
        </div>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
        }}
      >
        <div>
          <Table studentData={formData} onDelete={deleteData} />
        </div>
      </div>
    </>
  );
}

export default App;
