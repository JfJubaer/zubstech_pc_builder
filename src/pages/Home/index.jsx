import Mainlayout from "@/components/layout/mainlayout";

const HomePage = () => {
  return <></>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};
