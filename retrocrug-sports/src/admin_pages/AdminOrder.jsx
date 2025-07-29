import React from 'react';
import '../style/AdminOrder.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const AdminOrder = () => {
  const [activeTab, setActiveTab] = React.useState('All Orders (441)');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const orders = [
    {
      id: '021231',
      productName: 'SS cricket bat',
      productImage: 'https://via.placeholder.com/40?text=Bat',
      customer: 'Leslie Alexander',
      price: 10000,
      date: '04/17/23',
      status: 'Shipping'
    },
    {
      id: '021231',
      productName: 'Mr yod football',
      productImage: 'https://via.placeholder.com/40?text=Ball',
      customer: 'Leslie Alexander',
      price: 650,
      date: '04/17/23',
      status: 'Cancelled'
    },
    {
      id: '021231',
      productName: 'Kanky Kitadakate (Green)',
      productImage: 'https://via.placeholder.com/40?text=Green',
      customer: 'Leslie Alexander',
      price: 2400,
      date: '04/17/23',
      status: 'Shipping'
    },
    {
      id: '021231',
      productName: 'Story Honzo (Cream)',
      productImage: 'https://via.placeholder.com/40?text=Cream',
      customer: 'Leslie Alexander',
      price: 3000,
      date: '04/17/23',
      status: 'Shipping'
    },
    {
      id: '021231',
      productName: 'Kookaburra ball',
      productImage: 'https://via.placeholder.com/40?text=Ball',
      customer: 'Leslie Alexander',
      price: 1200,
      date: '04/17/23',
      status: 'Cancelled'
    },
    {
      id: '021231',
      productName: 'GM shoes',
      productImage: 'https://via.placeholder.com/40?text=Shoes',
      customer: 'Leslie Alexander',
      price: 6000,
      date: '04/17/23',
      status: 'Shipping'
    },
    {
      id: '021231',
      productName: 'Beige Coffe (Navy)',
      productImage: 'https://via.placeholder.com/40?text=Navy',
      customer: 'Leslie Alexander',
      price: 2200,
      date: '04/17/23',
      status: 'Cancelled'
    },
    {
      id: '021231',
      productName: 'Wilson Racket',
      productImage: 'https://via.placeholder.com/40?text=Racket',
      customer: 'Leslie Alexander',
      price: 7000,
      date: '04/17/23',
      status: 'Cancelled'
    }
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        {/* Removed individual Topbar instance as per request */}
        <div className="orders-section" style={{ backgroundColor: '#54548B', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', color: 'white' }}>
          <h2 style={{ marginBottom: '20px' }}>Orders</h2>

          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Search for iid, name product"
              style={{
                width: '100%',
                padding: '10px 15px',
                borderRadius: '20px',
                border: 'none',
                outline: 'none',
                fontSize: '1rem'
              }}
            />
            <button style={{ position: 'relative', left: '-35px', border: 'none', background: 'transparent', cursor: 'pointer' }}>
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', backgroundColor: '#f8f9fa', borderRadius: '20px', color: '#54548B' }}>
            {['All Orders (441)', 'Shipping (100)', 'Completed (300)', 'Cancel (41)'].map((tab) => (
              <div
                key={tab}
                onClick={() => handleTabClick(tab)}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '10px 0',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  backgroundColor: activeTab === tab ? '#2E227B' : 'transparent',
                  color: activeTab === tab ? 'white' : '#54548B',
                  border: '1px solid #2E227B',
                  userSelect: 'none'
                }}
              >
                {tab}
              </div>
            ))}
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#212529' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th><input type="checkbox" /></th>
                <th>Orders</th>
                <th>Customer</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td><input type="checkbox" /></td>
                  <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={order.productImage} alt={order.productName} style={{ width: '40px', height: '40px', borderRadius: '5px' }} />
                    <div>
                      <a href="#" style={{ color: '#2E227B', fontWeight: '600', textDecoration: 'none' }}>{order.id}</a>
                      <div>{order.productName}</div>
                    </div>
                  </td>
                  <td>{order.customer}</td>
                  <td>{order.price}</td>
                  <td>{order.date}</td>
                  <td>
                    <span style={{
                      padding: '5px 10px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      backgroundColor: order.status === 'Shipping' ? '#d6c9f9' : '#f9d6d6',
                      color: order.status === 'Shipping' ? '#6a4ed6' : '#d66a6a'
                    }}>
                      {order.status}
                    </span>
                  </td>
                  <td style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button title="View" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <i className="fas fa-eye"></i>
                    </button>
                    <button title="Edit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <i className="fas fa-edit"></i>
                    </button>
                    <button title="Delete" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <i className="fas fa-trash"></i>
                    </button>
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

export default AdminOrder;
