import { CTA } from "../../components/layout/CTA";
import { Hero } from "../../components/layout/Hero";
import { getUser } from "../../lib/utils/getUser";

const Home = () => {
  const user = getUser();
  return (
    <div className="mt-[74px]">
      <Hero />
      {!user && <CTA />}
    </div>
  );
};

export default Home;
