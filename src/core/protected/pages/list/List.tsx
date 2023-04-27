import React from 'react';
import { Table } from 'reactstrap';

const List = () => {
  return (
    <section className="list data-table mt-4">
      <div className='table-responsive'>
        <Table className='table'>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>S.N</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>1</td>
              <td>Subharaj</td>
              <td>Narayan</td>
              <td>Chaudhary</td>
              <td>Kathmandu, Nepal</td>
              <td>subharaj@smarttech.com.np</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>2</td>
              <td>Anjil</td>
              <td>Prasad</td>
              <td>Shakya</td>
              <td>Kathmandu, Nepal</td>
              <td>anjil@smarttech.com.np</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>3</td>
              <td>Biju</td>
              <td>Younzen</td>
              <td>Lama</td>
              <td>Kathmandu, Nepal</td>
              <td>buji@smarttech.com.np</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>4</td>
              <td>Indra</td>
              <td>Prasad</td>
              <td>Khanal</td>
              <td>Kathmandu, Nepal</td>
              <td>indra@smarttech.com.np</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>5</td>
              <td>Srijan</td>
              <td>Set</td>
              <td>ji</td>
              <td>Bhaktapur, Nepal</td>
              <td>setji@smarttech.com.np</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  )
}

export default List;