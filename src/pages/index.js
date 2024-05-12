import Mainlayout from "@/components/layout/mainlayout";



export default function HomePage() {
  return (
   <>
   <h1>Pc builder pro</h1>
   </>
  );
}
HomePage.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};