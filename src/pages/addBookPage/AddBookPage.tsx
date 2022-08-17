import { NavBarDefault } from "../../components/navBar/navBar";
import { Footer } from "../../components/footer/footer";
import { FormAddBook } from "../../components/form/addBook/AddBookForm";

export const AddBookPage: React.FC<{
  userState: boolean;
  handleauth: () => void;
}> = ({ userState, handleauth }) => {
  return (
    <div className="app-container-adminpage">
      <NavBarDefault userState={userState} handleauth={() => handleauth()} />

      <FormAddBook />
      <Footer></Footer>
    </div>
  );
};
