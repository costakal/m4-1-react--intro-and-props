import React from "react";

import "./Header.css";

const Header = (props) => {
  console.log(props);
  return (
    <header>
      {props.participants
        .filter(
          (participant) => participant.username !== props.currentUser.username
        )
        .map((participant) => (
          <div className="header-user">
            <img
              className="header-photo"
              src={participant.avatar}
              alt="user"
            ></img>
            <p className="header-name">{participant.username}</p>
          </div>
        ))}
    </header>
  );
};

export default Header;
