import axios from 'axios';
import React from 'react';
import { Table } from 'reactstrap';
import { DeleteIcon } from '../../../../assets/images/xd';
import { toast } from 'react-toastify';

const List = () => {

  const [Data, isSetData] = React.useState<any[]>([]);
  console.log({ Data });

  React.useEffect(() => {
    axios.get('http://localhost:5000/api/register')
      .then((response) => {
        // console.log(response.data, "Success");
        isSetData(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  // const handleDelete = async(_id: any) => {
  //   try {
  //     await axios.post(`http://localhost:5000/api/register/:${id}`)
  //     .then((response) => {
  //       isSetData(response.data)
  //       toast.success("Hooray... Data posted Successful")
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <section className="list data-table mt-4">
      <div className='table-responsive'>
        <Table className='table'>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              {/* <th>S.N</th> */}
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
            {Data.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                {/* <td>{item._id}</td> */}
                <td>{item.firstname}</td>
                <td>{item.middlename}</td>
                <td>{item.lastname}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td className=''>
                  <img src={DeleteIcon} alt="" className='mr-0'/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  )
}

export default List;

function isSetData(data: any) {
  throw new Error('Function not implemented.');
}
function async(arg0: number) {
  throw new Error('Function not implemented.');
}

