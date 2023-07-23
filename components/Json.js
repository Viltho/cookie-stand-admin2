import React from "react";

const Json = ({ object }) => {
  return (
    <div className="flex flex-col items-center">
      <pre>{JSON.stringify(object, null, 2)}</pre>
    </div>
  );
};

export default Json;
