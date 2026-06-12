import react, { useState } from "react";

const Products = () => {
  const [products,setProducts]=useState([]);
  const [isLoading,setisLoading]=useState(false);
  const [isError,setisError]=useState(false);

  const fetchProducts
  *-
  return (
    <>
      <div className="p-10 grid-cols-4">
        <div className="flex justify-center w-75 border rounded h-100 p-3">
          <div className="w-30 ">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
