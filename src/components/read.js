import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
  const setData = (data) => {
    let { id, firstName, lastName, emailId, number, password, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Email-ID', emailId );
    localStorage.setItem('Number', number );
    localStorage.setItem('Password', password );
    localStorage.setItem('Checkbox Value', checkbox)
  }
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://6412e841b1ea7443031c82b8.mockapi.io/fakeapi1`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])
  const getData = () => {
    axios.get(`https://6412e841b1ea7443031c82b8.mockapi.io/fakeapi1`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://6412e841b1ea7443031c82b8.mockapi.io/fakeapi1/${id}`)
      .then(() => {
        getData();
      })
  }

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email-ID</th>
            <th>Number</th>
            <th>Password</th>
            <th>Checked</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </Table.Header>

        <Table.Body>
          {APIData.map((data, index) => {
            return (
              <Table.Row key={index}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.emailId}</td>
                <td>{data.number}</td>
                <td>{data.password}</td>
                <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                <td><Link to='/update'><Button onClick={() => setData(data)}>Update</Button></Link></td>
                <td><Button onClick={() => onDelete(data.id)}>Delete</Button></td>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}