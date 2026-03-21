// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import './style.css'; // Assume the same CSS is used

const mockUsers = [
  { fullname: "Alice Smith", username: "alice123", email: "alice@test.com", phone: "1112223333", password: "password123" },
  { fullname: "Bob Johnson", username: "bobby", email: "bob@test.com", phone: "4445556666", password: "password123" },
  { fullname: "Charlie Brown", username: "cbrown", email: "charlie@test.com", phone: "7778889999", password: "password123" },
  { fullname: "Diana Prince", username: "wonder", email: "diana@test.com", phone: "0001112222", password: "password123" },
  { fullname: "Evan Wright", username: "ewright", email: "evan@test.com", phone: "3334445555", password: "password123" }
];

export default function App() {
  // State to track if user is logged in, and who they are
  const [currentUser, setCurrentUser] = useState(null);

  // States for Sign-Up Form
  const [signUpData, setSignUpData] = useState({
    fullname: '', email: '', username: '', password: '', phone: '', date: '', location: ''
  });

  // States for Sign-In Form
  const [signInData, setSignInData] = useState({ identifier: '', password: '' });

  // Handle Input Changes for Sign Up
  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  // Handle Sign Up Submit
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Action: User is trying to Sign-Up");

    // Check if any value is empty
    const isAnyFieldEmpty = Object.values(signUpData).some(val => val.trim() === '');
    if (isAnyFieldEmpty) {
      alert("Sign-Up Failed: All fields are required!");
      return;
    }

    setCurrentUser(signUpData.fullname);
  };

  // Handle Sign In Submit
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log("Action: User is trying to Sign-In");

    const foundUser = mockUsers.find(user => {
      const matchId = (user.username === signInData.identifier || user.email === signInData.identifier || user.phone === signInData.identifier);
      const matchPass = (user.password === signInData.password);
      return matchId && matchPass;
    });

    if (foundUser) {
      setCurrentUser(foundUser.fullname);
    } else {
      alert("Sign-In Failed: Invalid credentials.");
    }
  };

  // Render the Welcome Page if logged in
  if (currentUser) {
    return (
      <div className="welcome-container">
        <h1>Hello, {currentUser}!</h1>
        <p>Welcome to your new dashboard. We are so glad to have you here.</p>
        <button onClick={() => setCurrentUser(null)}>Log Out</button>
      </div>
    );
  }

  // Render Forms if not logged in
  return (
    <div>
      <h1>INSA Week 2 Assignment</h1>

      <h2>Sign-Up If you are new</h2>
      <form onSubmit={handleSignUpSubmit}>
        <label>Full-Name</label>
        <input type="text" name="fullname" onChange={handleSignUpChange} placeholder="Full Name" />

        <label>Email</label>
        <input type="email" name="email" onChange={handleSignUpChange} placeholder="Email" />

        <label>Username</label>
        <input type="text" name="username" onChange={handleSignUpChange} placeholder="username" />

        <label>Password</label>
        <input type="password" name="password" onChange={handleSignUpChange} placeholder="password" />

        <label>Phone</label>
        <input type="text" name="phone" onChange={handleSignUpChange} placeholder="phone" />

        <label>Birth Date</label>
        <input type="date" name="date" onChange={handleSignUpChange} />

        <label>Location</label>
        <input type="text" name="location" onChange={handleSignUpChange} placeholder="location" />

        <button type="submit">Sign Up</button>
      </form>

      <h2>Sign-in If you have an account</h2>
      <form onSubmit={handleSignInSubmit}>
        <label>Enter Your Phone, Email or User Name</label>
        <input
          type="text"
          onChange={(e) => setSignInData({ ...signInData, identifier: e.target.value })}
        />

        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}