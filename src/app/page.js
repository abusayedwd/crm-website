import Benner from "./component/home/Benner";
import QuotePage from "./component/home/ContactService";
import Exprerience from "./component/home/Exprerience";
import FeaturedProject from "./component/home/FeaturedProject";
import ServicePage from "./component/home/Service";

 

export default function Home() {
  return (
     <div className=" ">
          <Benner />
          <Exprerience />
          <ServicePage />
          <FeaturedProject />
          <QuotePage />
     </div>
  );
}
