import React from 'react';

const Accounts = () => (
  <div>
    <label htmlFor="user"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="user" required />
    <br />
    <label htmlFor="pass"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="pass" required />
    <button type="submit">Login</button>
    <button type="submit">Sign Up</button>
    <br /> <br />
  </div>
)

export default Accounts;