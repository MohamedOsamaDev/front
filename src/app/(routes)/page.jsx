import Services from "@src/components/home/services/services";
import home_test from "./home.test";
import Landing from "@src/components/home/landing/Landing";
import Reviews from "@src/components/home/reviews/reviews";
import { getHomePage } from "@src/_lib/home";
import { getSession } from "@src/_lib/auth";

const page = async () => {
  const { landing, services } = await getHomePage()
  const { teachers = [] } = await home_test();




  return (
    <main className="ShowSmoothEffect">
      <div className="coverHeader" />
      <Landing data={landing} />
      <Services data={services} />
      <Reviews data={teachers} />

    </main>
  );
};

export default page;
