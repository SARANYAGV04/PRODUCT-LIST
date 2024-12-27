import React, { useState } from "react";
import { FaEye, FaPen, FaTrashAlt, FaSignOutAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";

const ContactTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: null,
    description: "",
    price: "",
  });
  const [tableData, setTableData] = useState([]); // State for table data
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 10; // Items per page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setProductDetails({ ...productDetails, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, productDetails]); // Add new product to table
    setShowModal(false);
    setProductDetails({ name: "", image: null, description: "", price: "" }); // Reset form
  };

  const totalPages = Math.ceil(tableData.length / itemsPerPage); // Total pages

  // Paginate data
  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {/* Header Section with Logout Button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-primary"></h5>
        <button
          className="btn btn-light border border-primary text-primary d-flex align-items-center"
          style={{ padding: "0.5rem 1rem", borderRadius: "8px" }}
        >
          <FaSignOutAlt className="me-2" /> Logout
        </button>
      </div>

      {/* Add Product and Search Section */}
      <div className="d-flex justify-content-start align-items-center mb-3">
        <input
          type="text"
          placeholder="Search for name or number..."
          className="form-control w-auto"
          list="suggestions"
        />
        <datalist id="suggestions">
          <option value="Clothing"></option>
          <option value="Electronics"></option>
          <option value="Mobiles"></option>
          <option value="Furniture"></option>
          <option value="Appliances"></option>
        </datalist>
        <button
          className="btn btn-primary ms-3"
          onClick={() => setShowModal(true)}
        >
          + Add Product
        </button>
      </div>

      {/* Table Section */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>Product Name</th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>Product Description</th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>Product Price</th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>Upload Image</th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((product, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>{product.name}</td>
              <td style={{ textAlign: "center" }}>{product.description}</td>
              <td style={{ textAlign: "center" }}>{product.price}</td>
              <td style={{ textAlign: "center" }}>
                {product.image && (
                  <img
                    src={product.image}
                    alt="Product"
                    style={{ width: "60px", height: "60px" }}
                  />
                )}
              </td>
              <td style={{ textAlign: "center" }}>
                <FaEye className="text-dark me-2" />
                <FaPen className="text-dark me-2" />
                <FaTrashAlt className="text-dark" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Section */}
      <div className="d-flex justify-content-center align-items-center mt-3">
        <button
          className="btn btn-light me-2"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <FaChevronLeft /> Previous
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-light ms-2"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next <FaChevronRight />
        </button>
      </div>

      {/* Modal for Adding Product */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={productDetails.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={productDetails.description}
                onChange={handleInputChange}
                placeholder="Enter product description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={productDetails.price}
                onChange={handleInputChange}
                placeholder="Enter product price"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactTable;
