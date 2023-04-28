import React, { useState } from "react";
import "./pagination.scss";
import { Table } from "reactstrap";

interface TableData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const data: TableData[] = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
  { id: 4, name: "Dave", age: 40, email: "dave@example.com" },
  { id: 5, name: "Emily", age: 45, email: "emily@example.com" },
  { id: 6, name: "Frank", age: 50, email: "frank@example.com" },
  { id: 7, name: "George", age: 55, email: "george@example.com" },
  { id: 8, name: "Henry", age: 60, email: "henry@example.com" },
  { id: 9, name: "Isabel", age: 65, email: "isabel@example.com" },
  { id: 10, name: "John", age: 70, email: "john@example.com" },
];

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const slicedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // const pageNumbers = Array.from(
  //   { length: Math.ceil(data.length / itemsPerPage) },
  //   (_, index) => index + 1
  // );

  const pageNumbers = Array.from(
    { length: 13 },
    (_, index) => index + 1
  );

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {slicedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="pagination">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1 ? true : false}
        >
          Prev
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === pageNumbers.length ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;