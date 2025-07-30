// import { useState } from "react";
// import "../style/ProductCard.css"; // Corrected import path


// export default function ProductCard({
//   name,
//   price,
//   originalPrice,
//   image,
//   discount,
//   showAddToCart = true,
//   hideDollarSign = false,
//   onClick,
//   onAddToCart,
// }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onClick={onClick}
//       className="product-card"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="product-image-container">
//         <img src={image} alt={name} className="product-image" />

//         {showAddToCart && (
//           <div className={`icon-buttons ${hovered ? "visible" : ""}`}>
//             <button className="icon-button">
//               <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//               </svg>
//             </button>
//             <button className="icon-button">
//               <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276a1 1 0 011.447.894v6.764a1 1 0 01-1.447.894L15 14m-6 0l-4.553 2.276A1 1 0 013 14.276v-6.764a1 1 0 011.447-.894L9 10m6 0v4m-6-4v4" />
//               </svg>
//             </button>
//           </div>
//         )}

//         {showAddToCart && hovered && (
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               if (onAddToCart) onAddToCart();
//             }}
//             className="add-to-cart"
//           >
//             Add to Cart
//           </button>
//         )}
//       </div>

//       <h3 className="product-name">{name}</h3>
//       <div className="price-row">
//         <span className="current-price">{hideDollarSign ? price : `Rs ${price}`}</span>
//         {originalPrice && (
//           <span className="original-price">{hideDollarSign ? originalPrice : `Rs ${originalPrice}`}</span>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css"; // Import external CSS


export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  discount,
  showAddToCart = true,
  hideDollarSign = false,
  onClick,
  onAddToCart,
}) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (id) {
      navigate(`/product/${id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />

        {/* Removed icon buttons */}

        {showAddToCart && hovered && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onAddToCart) onAddToCart();
            }}
            className="add-to-cart"
          >
            Add to Cart
          </button>
        )}
      </div>

      <h3 className="product-name">{name}</h3>
      <div className="price-row">
        <span className="current-price">{hideDollarSign ? price : `Rs ${price}`}</span>
        {originalPrice && (
          <span className="original-price">{hideDollarSign ? originalPrice : `Rs ${originalPrice}`}</span>
        )}
      </div>
    </div>
  );
}