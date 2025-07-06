// import React from 'react';
// import { Link } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   return (
//     <>
//       <header>
//         <nav>
//           <div className="nav-left">
//             <div className="logo">
//               <img className="retro" src="/retrocruglogo.png" alt="logo" />
//             </div>
//           </div>
//           <div className="nav-right">
//            <ul>
//             <li><Link to="/">Home</Link></li>
//           <li><Link to="/products">Products</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/about">About</Link></li>
//          </ul>
//           </div>
//         </nav>
//       </header>

//       <main>
//         <section>
//           <div className="welcomesection" style={{ backgroundImage: "url('/hero.png')" }}></div>
//           <div className="detailsection">
//             <h2>Log in to Retrocrug</h2>
//             <span className="subtext">Enter your details below</span>
//             <form>
//               <input type="email" placeholder="Email or Phone Number" required />
//               <input type="password" placeholder="Password" required />
//               <div className="loginbtn">
//                 <button type="submit" className="primary-btn">Log in</button>
//                 <a href="#">Forgot password?</a>
//               </div>
//              <p className="signup-text">
//               Don't have an account? <Link to="/signup"><u>Sign up</u></Link>
//                   </p>
//             </form>
//           </div>
//         </section>
//       </main>

//       <footer>
//         <div className="footerfirst">
//           <img src="/retrocruglogo.png" alt="logo" />
//           <br />
//           Copyright © 2025 - All rights reserved.
//         </div>
//         <div className="footersecond">
//           <h3>Contact Us</h3>
//           <p>Email: contact@retrocrug.com</p>
//           <p>Phone: +977-9815855279</p>
//           <p>Address: Koteswor, Kathmandu, Nepal</p>
//         </div>
//         <div className="footerthird">
//           <h3>Follow us</h3>
//           <a href="/"><img src="/instalogo.png" alt="Instagram" /></a>
//           <a href="/"><img src="/twitterlogo.png" alt="Twitter" /></a>
//           <a href="/"><img src="/facebook.png" alt="Facebook" /></a>
//           <a href="/"><img src="/githublogo.png" alt="GitHub" /></a>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default LoginPage;

// src/pages/LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <Header />

      <main>
        <section>
          <div className="welcomesection" style={{ backgroundImage: "url('/hero.png')" }}></div>
          <div className="detailsection">
            <h2>Log in to Retrocrug</h2>
            <span className="subtext">Enter your details below</span>
            <form>
              <input type="email" placeholder="Email or Phone Number" required />
              <input type="password" placeholder="Password" required />
              <div className="loginbtn">
                <button type="submit" className="primary-btn">Log in</button>
                <a href="#">Forgot password?</a>
              </div>
              <p className="signup-text">
                Don't have an account? <Link to="/signup"><u>Sign up</u></Link>
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LoginPage;
