import Mainlayout from "@/components/layout/mainlayout";
import Link from "next/link";
import React from "react";

const details = ({ product }) => {
  // console.log(product);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* <Image
        width={100}
        height={100}
        src={product?.image}
        alt={product?.productName}
        className="w-full h-48 object-cover"
      /> */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product?.productName}</h3>
        <p className="text-gray-600 mb-2">{product?.category}</p>
        <p className="text-gray-800 font-semibold mb-2">${product?.price}</p>
        <p
          className={`text-sm ${
            product?.status === "In Stock" ? "text-green-600" : "text-red-600"
          } font-semibold mb-2`}
        >
          {product?.status}
        </p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0a1 1 0 0 1 .785.385l3.55 4.537 5.438.794a1 1 0 0 1 .554 1.705l-4.09 3.993.968 5.422a1 1 0 0 1-1.451 1.055L10 15.937l-5.115 2.683a1 1 0 0 1-1.451-1.055l.968-5.422-4.09-3.993a1 1 0 0 1 .554-1.705l5.438-.794L9.215.385A1 1 0 0 1 10 0z"
            />
          </svg>
          <p className="text-yellow-500">{product?.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default details;

//new doc added on serverside

details.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/books/get-components/${params.id}`
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data.data,
    },
  };
};
