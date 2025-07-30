
// import '../style/AddProduct.css';
// import Sidebar from './Sidebar';
// // import Topbar from './Topbar'; // No need to import Topbar here

// const AddProduct = () => {
//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div className="main-content">
//         {/* Topbar removed from here */}
//         {/* Add Product Form */}
//         <div className="add-product-container">
//           <h2>Product</h2>
//           <div className="form-container">
//             <div className="product-info">
//               <h3>Product Information</h3>
//               <label>SKU</label>
//               <input type="text" placeholder="Input no SKU" />
//               <label>Product Name</label>
//               <input type="text" placeholder="Input product name" />
//               <div className="row">
//                 <div className="col">
//                   <label>Size</label>
//                   <input type="text" placeholder="Input Size" />
//                 </div>
//                 <div className="col">
//                   <label>Color</label>
//                   <input type="text" placeholder="Color" />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   <label>Product Category</label>
//                   <select>
//                     <option>Select product category</option>
//                     <option>Cricket</option>
//                     <option>Football</option>
//                     <option>Rugby</option>
//                     <option>Tennis</option>
//                   </select>
//                 </div>
//                 <div className="col">
//                   <label>Price</label>
//                   <input type="text" placeholder="Input Price" />
//                 </div>
//               </div>
//               <label>Quantity</label>
//               <input type="text" placeholder="Input stock" />
//               <label>Status Product</label>
//               <select>
//                 <option>Select status product</option>
//                 <option>Available</option>
//                 <option>Out of Stock</option>
//               </select>
//             </div>

//             <div className="image-product">
//               <h3>Image Product</h3>
//               <p><span style={{color: 'red'}}>Note</span>: Format photos SVG, PNG, or JPG (Max size 4mb)</p>
//               <div className="image-upload-container">
//                 <div className="image-upload-box">Photo 1</div>
//                 <div className="image-upload-box">Photo 2</div>
//                 <div className="image-upload-box">Photo 3</div>
//                 <div className="image-upload-box">Photo 4</div>
//               </div>
//               <button className="save-product-btn">Save Product</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;



import React, { useState } from 'react';
import '../style/AddProduct.css';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    sku: '',
    productName: '',
    size: '',
    color: '',
    category: '',
    price: '',
    quantity: '',
    status: '',
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.sku || !form.productName || !form.category || !form.price || !form.quantity || !form.status) {
      alert('Please fill all required fields');
      return;
    }
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    images.forEach(img => formData.append('images', img));
    try {
      await fetch('/api/product', {
        method: 'POST',
        body: formData,
      });
      navigate('/admin/product');
    } catch (err) {
      alert('Failed to add product');
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <div className="add-product-container">
          <h2>Add Product</h2>
          <form className="form-container" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="product-info">
              <h3>Product Information</h3>
              <label>SKU</label>
              <input name="sku" type="text" placeholder="Input SKU" value={form.sku} onChange={handleChange} required />
              <label>Product Name</label>
              <input name="productName" type="text" placeholder="Input product name" value={form.productName} onChange={handleChange} required />
              <div className="row">
                <div className="col">
                  <label>Size</label>
                  <input name="size" type="text" placeholder="Input size" value={form.size} onChange={handleChange} />
                </div>
                <div className="col">
                  <label>Color</label>
                  <input name="color" type="text" placeholder="Input color" value={form.color} onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Product Category</label>
                  <select name="category" value={form.category} onChange={handleChange} required>
                    <option value="">Select product category</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Rugby">Rugby</option>
                    <option value="Tennis">Tennis</option>
                  </select>
                </div>
                <div className="col">
                  <label>Price</label>
                  <input name="price" type="number" placeholder="Input price" value={form.price} onChange={handleChange} required />
                </div>
              </div>
              <label>Quantity</label>
              <input name="quantity" type="number" placeholder="Input stock quantity" value={form.quantity} onChange={handleChange} required />
              <label>Status Product</label>
              <select name="status" value={form.status} onChange={handleChange} required>
                <option value="">Select status product</option>
                <option value="Available">Available</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <div className="image-product">
              <h3>Image Product</h3>
              <p><span style={{ color: 'red' }}>Note</span>: Format photos PNG or JPG (Max size 5mb, up to 4 images)</p>
              <input type="file" name="images" multiple accept="image/*" onChange={handleImageChange} />
              <div className="image-upload-container">
                {images.length > 0 && Array.from(images).map((img, idx) => (
                  <div key={idx} className="image-upload-box">{img.name}</div>
                ))}
              </div>
              <button className="save-product-btn" type="submit">Save Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
