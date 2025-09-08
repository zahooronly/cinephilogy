import HeaderFooter from "../../components/layout/HeaderFooter";
import { Button } from "../../components/ui/Button";

const Favourite = () => {
  return (
    <HeaderFooter>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <Button>Favourite Page</Button>
        </div>
      </div>
    </HeaderFooter>
  );
};

export default Favourite;
