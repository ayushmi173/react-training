import React from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

export default function Root() {

  // previous useRouteMatch
  // const match = matchPath( {
  //   path: "/testing",
  //   caseSensitive: false, // Optional, `true` == static parts of `path` should match case
  //   end: true, // Optional, `true` == pattern should match the entire URL pathname
  // },
  // "/testing");
  

  // console.log("match", match);

  // useLocation

  const location= useLocation();

  // useHistory
  // const navigate = useNavigate();

  // const userHandler = (event) => {
  //   if (event) {
  //    navigator(`${locatiion}/profile/${userId}`);
  //   }
  // };

  
  return (
    <>
      <div id="sidebar">
        <h1>React Router</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
      {/* <button onClick={buttonHandler}>Push to /home</button> */}
    </>
  );
}
