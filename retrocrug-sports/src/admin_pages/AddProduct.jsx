// import React from 'react';
// import '../style/AddProduct.css';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';

// const AddProduct = () => {
//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div className="main-content">
//         <Topbar />
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



import React from 'react';
import '../style/AddProduct.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const AddProduct = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        {/* Add Product Form */}
        <div className="add-product-container">
          <h2>Product</h2>
          <div className="form-container">
            <div className="product-info">
              <h3>Product Information</h3>
              <label>SKU</label>
              <input type="text" placeholder="Input no SKU" />
              <label>Product Name</label>
              <input type="text" placeholder="Input product name" />
              <div className="row">
                <div className="col">
                  <label>Size</label>
                  <input type="text" placeholder="Input Size" />
                </div>
                <div className="col">
                  <label>Color</label>
                  <input type="text" placeholder="Color" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Product Category</label>
                  <select>
                    <option>Select product category</option>
                    <option>Cricket</option>
                    <option>Football</option>
                    <option>Rugby</option>
                    <option>Tennis</option>
                  </select>
                </div>
                <div className="col">
                  <label>Price</label>
                  <input type="text" placeholder="Input Price" />
                </div>
              </div>
              <label>Quantity</label>
              <input type="text" placeholder="Input stock" />
              <label>Status Product</label>
              <select>
                <option>Select status product</option>
                <option>Available</option>
                <option>Out of Stock</option>
              </select>
            </div>

            <div className="image-product">
              <h3>Image Product</h3>
              <p><span style={{color: 'red'}}>Note</span>: Format photos SVG, PNG, or JPG (Max size 4mb)</p>
              <div className="image-upload-container">
                <div className="image-upload-box">Photo 1</div>
                <div className="image-upload-box">Photo 2</div>
                <div className="image-upload-box">Photo 3</div>
                <div className="image-upload-box">Photo 4</div>
              </div>
              <button className="save-product-btn">Save Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;