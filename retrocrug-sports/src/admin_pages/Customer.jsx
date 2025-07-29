import React from 'react';
import '../style/Customer.css';
import Sidebar from './Sidebar';

const Customer = () => {
  const customers = [
    {
      id: '12452',
      name: 'ayush hal shrestha',
      email: 'ayush@examp.com',
      phone: '+9779876543210',
      address: '44800 jagati.bhaktapur'
    },
    {
      id: '12451',
      name: 'hanish shrestha',
      email: 'hanish@examp.com',
      phone: '+9779812345678',
      address: '44600 sallaghari.kathmandu'
    },
    {
      id: '12453',
      name: 'krish khatri',
      email: 'krish@examp.com',
      phone: '+9779805643219',
      address: '44811 thimi.bhaktapur'
    },
    {
      id: '12454',
      name: 'aishworya tamang',
      email: 'tamang@examp.com',
      phone: '+977987678787',
      address: '33700 jagati.pokhara'
    },
    {
      id: '12455',
      name: 'sadikshya gurung',
      email: 'sadik@examp.com',
      phone: '+9779008776687',
      address: 'jagati.pokharatucky 39495'
    },
    {
      id: '12456',
      name: 'Leslie pradhan',
      email: 'leslie@examp.com',
      phone: '+9779865456778',
      address: '33700 jagati.pokhara'
    },
    {
      id: '12345',
      name: 'Kristin joshi',
      email: 'kristin@examp.com',
      phone: '+977988877667',
      address: '44600 darbarmarg.kathmandu'
    },
    {
      id: '12457',
      name: 'bishwo maharjan',
      email: 'bishwo@examp.com',
      phone: '+9779565647890',
      address: '44600 baneshwor.kathmandu'
    }
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <div className="customer-section">
          <h2>Customer</h2>
          <div className="search-bar-container">
            <input type="text" placeholder="Search for id, name Customer" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button className="add-customer-btn">
            Add Customer <i className="fas fa-plus"></i>
          </button>
          <table className="customers-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Name Customer</th>
                <th>Contact Email</th>
                <th>Contact Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="customer-name-id">
                      <a href="#" style={{ color: '#d9534f', fontWeight: '600', textDecoration: 'none' }}>
                        ID{customer.id}
                      </a>
                      <div>{customer.name}</div>
                    </div>
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.address}</td>
                  <td className="action-buttons">
                    <button title="View"><i className="fas fa-eye"></i></button>
                    <button title="Edit"><i className="fas fa-edit"></i></button>
                    <button title="Delete"><i className="fas fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customer;
