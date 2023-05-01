import React from 'react'
import { Table } from 'reactstrap'
import { DeleteIcon } from '../../../../assets/images/xd';

interface Data {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  address: string;
  email: string;
  message: string;
}

const Checkbox = () => {

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

  const [dataTable, setDataTable] = React.useState<Data[]>(data);


  const DeleteData = (id: number) => {
    const filterData = dataTable.filter((item) => item.id !== id);
    console.log({ filterData });
    setDataTable(filterData)
  }


  return (
    <section className='p-4'>
      <div className='checkbox'>
        <div className="checkbox-heading">
          <h4>Checkbox</h4>
        </div>
        <div className='list data-table'>
          <div className="table-responsive">
            <Table>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.middlename}</td>
                    <td>{item.lastname}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                    <td className="action">
                      <div role='button' onClick={() => DeleteData(item.id)}>
                        <img src={DeleteIcon} alt="" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkbox