import React from "react";

export default function Service({ Header, Text, Icon }) {
  return (
    <>
      <div>
        <div className="iconDiv">
        {Icon()}
        </div>
        <div className="d2_1">
          <h4>{Header}</h4>
          <p>{Text}</p>
        </div>
      </div>
    </>
  );
}
