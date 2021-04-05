import React from "react";

import Nav from "react-bootstrap/Nav";

function Navigasi(props) {
  return (
    <div>
      <div className="h1">TimFlix Movie</div>
      <div className="Navigasi">
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/Movie">Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/TV">TV</Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default Navigasi;
