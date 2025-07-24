// import React from 'react';
// import './BestSellers.css';

// const Homepage = () => {
//   const bestSellers = [
//     {
//       id: 1,
//       name: "Kookaburra Ghost Pro",
//       price: "RS.85,000",
//       image: "kook_ghostpro_main.png",
//       alt: "Cricket bat"
//     },
//     {
//       id: 2,
//       name: "Gilbert G-TR4000",
//       price: "RS.2,300",
//       image: "gilbertgt.jpg",
//       alt: "Rugby ball"
//     },
//     {
//       id: 3,
//       name: "adidas Football Pro",
//       price: "RS.5,500",
//       image: "uefaball.webp",
//       alt: "Football"
//     },
//     {
//       id: 4,
//       name: "Wilson Tour Slam",
//       price: "RS.7,500",
//       image: "wilsonracket.jpeg",
//       alt: "Tennis racket"
//     }
//   ];

//   return (
//     <div className="homepage">
//       {/* Best Sellers Section */}
//       <section className="best-sellers">
//         <div className="container">
//           <div className="section-header">
//             <h2>Best-sellers</h2>
//             <a href="#" className="view-all">View all</a>
//           </div>
//           <div className="products-grid">
//             {bestSellers.map((product) => (
//               <div key={product.id} className="product-card">
//                 <div className="product-image">
//                   <img src={product.image} alt={product.alt} />
//                 </div>
//                 <div className="product-info">
//                   <h3>{product.name}</h3>
//                   <p className="price">{product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Homepage;


import React from 'react';
import './BestSellers.css';

const Homepage = () => {
  const bestSellers = [
    {
      id: 1,
      name: 'SS English Willow',
      price: 'RS.10,500',
      image: '/bat.png',
      alt: 'Cricket Bat'
    },
    {
      id: 2,
      name: 'Kookaburra Ball',
      price: 'RS.5,500',
      image: '/ball.png',
      alt: 'Cricket Ball'
    },
    {
      id: 3,
      name: 'Forza Rugby Ball',
      price: 'RS.1,950',
      image: '/rugby.png',
      alt: 'Rugby Ball'
    }
  ];

  return (
    <div className="homepage">
      <section className="best-sellers">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Best-sellers</h2>
            <a href="#" className="view-all">View all</a>
          </div>

          <div className="products-grid">
            {bestSellers.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.alt} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                </div>
                <div className="add-to-cart">
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

