import { useState } from "react";

export const Us = () => {
  const [num, setnum] = useState(0);
  const handleadd = () => {
    setnum(num + 1);
  };

  const handlesub = () => {
    setnum(num - 1);
  };

  return (
    <div className="container border p-4">
      <p className="fs-3">Number:{num}</p>
      <button onClick={handleadd} className="btn btn-info p-4">
        +
      </button>
      <button onClick={handlesub} className="btn btn-warning p-4">
        -
      </button>
    </div>
  );
};
 