import { NavBarDefault } from "../../components/navBar/navBar";
import { Footer } from "../../components/footer/footer";
import { HomeAdmin } from "../../components/admin/homeAdmin/HomeAdmin";
/* import books from "../../models/books.json"; */

export const AdminPage: React.FC<{
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

      <HomeAdmin />
      <Footer></Footer>
    </div>
  );
};
