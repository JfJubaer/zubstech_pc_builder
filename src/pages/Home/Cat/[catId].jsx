import FeaturedProductCard from "@/components/FeaturedProductCard;";
import Mainlayout from "@/components/layout/mainlayout";
import React from "react";

const categoryPage = ({ allProducts }) => {
  return (
    <div>
      <>
        <h1>Welcome to pc builder page</h1>
        <h2>Our products : </h2>
        <div className="grid grid-cols-3">
          {" "}
          {allProducts?.map((p, i) => (
            <FeaturedProductCard
              product={p}
              key={i}
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default categoryPage;

categoryPage.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/books/get-cat/${params.catId}`
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allProducts: data.data,
    },
  };
};
