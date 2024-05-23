import Mainlayout from "@/components/layout/mainlayout";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BuilderPage = () => {
  const dispatch = useDispatch();
  const selectedComponents = useSelector(
    (state) => state.components.selectedComponents
  );

  useEffect(() => {
    dispatch(fetchComponents());
  }, [dispatch]);

  const categories = [
    "CPU",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
  ];

  const isBuildComplete = Object.keys(selectedComponents).length >= 5;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PC Builder</h1>
      {categories.map((category) => (
        <div
          key={category}
          className="mb-4"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl">{category}</h2>
            <Link
              href={`/components/${category.toLowerCase().replace(" ", "-")}`}
            >
              <a className="bg-blue-500 text-white px-4 py-2 rounded">
                Choose/Select
              </a>
            </Link>
          </div>
          {selectedComponents[category] && (
            <div className="mt-2 p-4 border rounded">
              <h3 className="text-lg">{selectedComponents[category].name}</h3>
              <p>Price: ${selectedComponents[category].price}</p>
            </div>
          )}
        </div>
      ))}
      <button
        className={`bg-green-500 text-white px-4 py-2 rounded ${
          !isBuildComplete && "opacity-50 cursor-not-allowed"
        }`}
        disabled={!isBuildComplete}
      >
        Complete Build
      </button>
    </div>
  );
};

export default BuilderPage;

BuilderPage.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};
