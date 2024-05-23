/* eslint-disable react-hooks/rules-of-hooks */
import Mainlayout from "@/components/layout/mainlayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const builderComponentsDetails = ({ components }) => {
  const router = useRouter();
  const { category } = router.query;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const handleAddComponent = (component) => {
    dispatch(addComponent({ category, component }));
    router.push("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Select a {category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component) => (
          <div
            key={component.id}
            className="border p-4 rounded"
          >
            <Image
              src={component.image}
              alt={component.name}
              className="mb-2"
            />
            <h2 className="text-lg">{component.name}</h2>
            <p>Price: ${component.price}</p>
            <p>Status: {component.status}</p>
            <p>Rating: {component.rating}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => handleAddComponent(component)}
            >
              Add To Builder
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default builderComponentsDetails;

builderComponentsDetails.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};

export async function getServerSideProps(context) {
  const { builderId } = context.params;
  const response = await fetch(
    `http://localhost:5000/api/v1/books/get-cat/${builderId}}`
  );
  return {
    props: {
      components: response.data,
    },
  };
}
