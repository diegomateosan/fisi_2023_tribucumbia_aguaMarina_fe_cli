import { NavBarDefault } from "../../components/navBar/navBar";
import { Footer } from "../../components/footer/footer";
import books from "../../models/books.json";
import DetailsBook from "../../components/admin/detailsBook/DetailsBook";

export const DetailsBookPage: React.FC<{
  userState: boolean;
  handleauth: () => void;
  handleLogin: () => void;
}> = ({ userState, handleauth, handleLogin }) => {
  return (
    <div className="app-container-adminpage">
      <NavBarDefault
        userState={userState}
        handleauth={() => handleauth()}
        handleLogin={() => handleLogin()}
      />

      <DetailsBook booksSeller={books} />
      <Footer></Footer>
    </div>
  );
};
