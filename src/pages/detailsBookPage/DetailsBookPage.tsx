import { NavBarDefault } from "../../components/navBar/navBar";
import { Footer } from "../../components/footer/footer";
import books from "../../models/books.json";
import DetailsBook from "../../components/admin/detailsBook/DetailsBook";

export const DetailsBookPage: React.FC<{
  userState: boolean;
  handleauth: () => void;
}> = ({ userState, handleauth }) => {
  return (
    <div className="app-container-adminpage">
      <NavBarDefault userState={userState} handleauth={() => handleauth()} />

      <DetailsBook booksSeller={books} />
      <Footer></Footer>
    </div>
  );
};
