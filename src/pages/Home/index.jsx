import FeaturedProductCard from "@/components/FeaturedProductCard;";
import Mainlayout from "@/components/layout/mainlayout";

const HomePage = ({ allProducts }) => {
  //   console.log(allProducts);
  return (
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
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/books/get-components"); // --> json server
  const data = await res.json();
  //   console.log(data);
  return {
    props: {
      allProducts: data.data,
    },
    revalidate: 10,
  };
};
