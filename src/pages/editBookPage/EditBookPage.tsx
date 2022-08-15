import { NavBarDefault } from "../../components/navBar/navBar";
import { Footer } from "../../components/footer/footer";
import books from "../../models/books.json";
import { FormAddBook } from "../../components/form/addBook/AddBookForm";
import EditBook from "../../components/admin/editBook/EditBooks";

export const EditBookPage: React.FC<{
    userState: boolean;
    setUserState: (txt: boolean) => void;
    setUserValue: (txt: string) => void;
    userValue: string;
}> = ({ userState, setUserState, setUserValue, userValue }) => {
    return (
        <div className="app-container-adminpage">
            <NavBarDefault
                userState={userState}
                setUserState={(txt: boolean) => setUserState(txt)}
                setUserValue={(txt: string) => setUserValue(txt)}
                userValue={userValue}
            />
            <EditBook booksSeller={books} />
            <Footer></Footer>
        </div>
    );
};
