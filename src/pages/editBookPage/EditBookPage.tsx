import { NavBarDefault } from "../../components/navBar/navBar";
import { Footer } from "../../components/footer/footer";
import books from "../../models/books.json";
import { FormAddBook } from "../../components/form/addBook/AddBookForm";
import EditBook from "../../components/admin/editBook/EditBooks";

export const EditBookPage: React.FC<{
  userState: boolean;
  handleauth: () => void;
  handleLogin: () => void;
}> = ({ userState, handleauth, handleLogin }) => {
  return (
    <div className="app-container-adminpage">
      <NavBarDefault
        userState={userState}
        handleauth={() => handleauth()}
        handleLogin={() => handleLogin}
      />

      <EditBook booksSeller={books} />
      <Footer></Footer>
    </div>
  );
};
