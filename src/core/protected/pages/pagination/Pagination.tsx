import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';
import { Table } from 'reactstrap';
// import { Next, Previous } from '../../../../assets/images/xd';

interface Data {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  address: string;
  email: string;
  message: string;
}

const Pagination = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const data: Data[] = [
    { id: 1, firstname: 'John', middlename: 'prasad', lastname: 'Wick', address: 'America', email: 'john@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 2, firstname: 'Jane', middlename: 'dev', lastname: 'Lane', address: 'Nepal', email: 'jane@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 3, firstname: 'Bob', middlename: 'kumar', lastname: 'Marley', address: 'Africa', email: 'bob@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 4, firstname: 'Mary', middlename: 'raj', lastname: 'Lee', address: 'Australia', email: 'mary@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 5, firstname: 'Peter', middlename: 'narayan', lastname: 'Hans', address: 'India', email: 'peter@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 6, firstname: 'Kate', middlename: 'lal', lastname: 'Pery', address: 'Switzerland', email: 'kate@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 7, firstname: 'Tom', middlename: 'prasad', lastname: 'Holland', address: 'Iran', email: 'tom@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 8, firstname: 'Emma', middlename: 'dev', lastname: 'Watson', address: 'USA', email: 'emma@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 9, firstname: 'Adam', middlename: 'kumar', lastname: 'Smith', address: 'Japan', email: 'adam@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 10, firstname: 'Lucy', middlename: 'raj', lastname: 'Pucy', address: 'China', email: 'lucy@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 11, firstname: 'Ben', middlename: 'narayan', lastname: 'Ten', address: 'Korea', email: 'ben@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 12, firstname: 'Alex', middlename: 'lal', lastname: 'Zender', address: 'Russia', email: 'alex@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 13, firstname: 'Lisa', middlename: 'prasad', lastname: 'Ola', address: 'Kuwait', email: 'lisa@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 14, firstname: 'Tim', middlename: 'dev', lastname: 'Land', address: 'Qatar', email: 'tim@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 15, firstname: 'Sara', middlename: 'ali', lastname: 'Khan', address: 'Saudi Arab', email: 'sara@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 16, firstname: 'Mike', middlename: 'raj', lastname: 'Tyson', address: 'Dubai', email: 'mike@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 17, firstname: 'Olivia', middlename: 'narayan', lastname: 'Dom', address: 'Malaysia', email: 'olivia@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 18, firstname: 'Tony', middlename: 'lal', lastname: 'Villa', address: 'Germany', email: 'david@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 19, firstname: 'Julia', middlename: 'prasad', lastname: 'Rat', address: 'Peru', email: 'julia@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
    { id: 20, firstname: 'Harry', middlename: 'dev', lastname: 'Potter', address: 'Azgard', email: 'harry@example.com', message: 'Lorem ipsum dolor sit amet consectetur,' },
  ];

  const itemsPerPage = 3;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const currentItems = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="table-with-pagination p-4 list data-table">
      <div className='pagination-heading'>
        <h4>REACT PAGINATE</h4>
      </div>
      <div className='table-responsive'>
        <Table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.middlename}</td>
                <td>{item.lastname}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </section>
  );
};

export default Pagination
