import React from "react";

import Pagination from "react-bootstrap/Pagination";
function Page(props) {
  let prevBtn = {};
  let NextBtn = {};

  if (props.me === 1) {
    prevBtn["hidden"] = "hidden";
  }
  if (props.me === 500) {
    NextBtn["hidden"] = "hidden";
  }
  return (
    <div>
      <div className="center">
        <Pagination>
          <Pagination.First
            onClick={() => props.before(props.me / props.me)}
            {...prevBtn}
          />
          <Pagination.Prev
            onClick={() => props.before(props.me - 1)}
            {...prevBtn}
          />
          <Pagination.Item
            onClick={() => props.before(props.me - 1)}
            {...prevBtn}
          >
            {props.me - 1}
          </Pagination.Item>
          <Pagination.Item active>{props.me}</Pagination.Item>
          <Pagination.Item
            onClick={() => props.before(props.me + 1)}
            {...NextBtn}
          >
            {props.me + 1}
          </Pagination.Item>
          <Pagination.Next
            onClick={() => props.before(props.me + 1)}
            {...NextBtn}
          />
          <Pagination.Last
            onClick={() => props.before(props.me / props.me + 99)}
            {...NextBtn}
          />
        </Pagination>
      </div>
    </div>
  );
}
export default Page;
