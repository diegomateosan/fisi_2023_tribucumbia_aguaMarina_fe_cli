import React, { useState } from "react";
import { FiSave } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { Props } from "../../../models/interfaces";
import { FcUndo, FcCompactCamera } from "react-icons/fc";
import "./editBook.css";
import "../../form/addBook/addBookForm.css";

const EditBook: React.FC<Props> = ({ booksSeller }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const idNumber = Number(id);
    const [selectedImage, setSelectedImage] = useState<File | null>();

    const [styleImg, setStyleImg] = useState(false);
    const [styleEditTitle, setStyleEditTitle] = useState(false);
    const [styleEditDesc, setStyleEditDesc] = useState(false);
    const [styleEditAuthor, setStyleEditAuthor] = useState(false);
    const [styleEditEditorial, setStyleEditEditorial] = useState(false);
    const [styleEditAnyo, setStyleEditAnyo] = useState(false);
    const [styleEditLanguage, setStyleEditLanguage] = useState(false);
    const [styleEditPages, setStyleEditPages] = useState(false);
    const [styleEditWeight, setStyleEditWeight] = useState(false);
    const [styleEditWidth, setStyleEditWidth] = useState(false);
    const [styleEditHeight, setStyleEditHeight] = useState(false);
    const [styleEditAge, setStyleEditAge] = useState(false);
    const [styleEditPrice, setStyleEditPrice] = useState(false);
    const [styleEditDiscount, setStyleEditDiscount] = useState(false);
    const [styleEditStock, setStyleEditStock] = useState(false);

    const [styleEditSku, setStyleEditSku] = useState(false);
    const [styleEditIsbn, setStyleEditIsbn] = useState(false);

    let book = booksSeller.find((book) => book.id === idNumber);

    const handleChange = (
        e:
            | React.FormEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
        variable: String
    ) => {
        const newValue = e.currentTarget.value;
        switch (variable) {
            case "title":
                newValue ? setStyleEditTitle(true) : setStyleEditTitle(false);

                break;

            case "desc":
                newValue ? setStyleEditDesc(true) : setStyleEditDesc(false);

                break;

            case "author":
                newValue ? setStyleEditAuthor(true) : setStyleEditAuthor(false);

                break;

            case "editorial":
                newValue
                    ? setStyleEditEditorial(true)
                    : setStyleEditEditorial(false);

                break;

            case "anyo":
                newValue ? setStyleEditAnyo(true) : setStyleEditAnyo(false);

                break;

            case "pages":
                newValue ? setStyleEditPages(true) : setStyleEditPages(false);

                break;

            case "weight":
                newValue ? setStyleEditWeight(true) : setStyleEditWeight(false);

                break;

            case "width":
                newValue ? setStyleEditWidth(true) : setStyleEditWidth(false);

                break;

            case "height":
                newValue ? setStyleEditHeight(true) : setStyleEditHeight(false);

                break;

            case "age":
                newValue ? setStyleEditAge(true) : setStyleEditAge(false);

                break;

            case "price":
                newValue ? setStyleEditPrice(true) : setStyleEditPrice(false);

                break;

            case "discount":
                newValue
                    ? setStyleEditDiscount(true)
                    : setStyleEditDiscount(false);

                break;

            case "sku":
                newValue ? setStyleEditSku(true) : setStyleEditIsbn(false);

                break;

            case "isbn":
                newValue ? setStyleEditIsbn(true) : setStyleEditIsbn(false);

                break;

            case "language":
                newValue
                    ? setStyleEditLanguage(true)
                    : setStyleEditLanguage(false);
                break;

            case "stock":
                newValue ? setStyleEditStock(true) : setStyleEditStock(false);
                break;
            default:
                break;
        }
    };

    const saveChanges = () => {
        alert("Cambios Exitosos");
    };

    const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
        setStyleImg(true);
    };

    const removeSelectedImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSelectedImage(null);
        setStyleImg(false);
    };

    return (
        <div className="app-container-editBook">
            <div className="wrapper-editBook">
                <div className="header-addBookForm">
                    <FcUndo
                        title="Regresar"
                        onClick={() => navigate(-1)}
                        className="goBackTo"
                    />
                    <h2>
                        EDITAR LIBRO {book!.id}: {book!.title}
                    </h2>
                </div>
                <p className="header-addBookForm-desc">
                    Edite los datos de este libro rellenando los campos que
                    desea modificar.
                </p>
                <form className="form-addBook">
                    <div className="body-editBook">
                        <div className="wrapper-details-general">
                            <h3>Detalles del libro general</h3>
                            <div className="body-addBook-details-book-general">
                                <div className="body-addBook-details-book-img">
                                    <div className="form__group--file field">
                                        <label
                                            htmlFor="imgBook"
                                            className="form__label--file-selected"
                                        >
                                            <input
                                                type="file"
                                                id="imgBook"
                                                name="imgBook"
                                                className="form__field--file"
                                                placeholder="Modificar Imagen"
                                                required
                                                onChange={(e) => imageChange(e)}
                                            />
                                            Modificar Imagen
                                            <FcCompactCamera />
                                        </label>

                                        {selectedImage ? (
                                            <div className="cointainer-preview-img">
                                                <img
                                                    src={URL.createObjectURL(
                                                        selectedImage
                                                    )}
                                                    alt="Thumb"
                                                    className="img-addBook"
                                                />
                                                <button
                                                    onClick={
                                                        removeSelectedImage
                                                    }
                                                >
                                                    Volver a la Imagen Original
                                                </button>
                                            </div>
                                        ) : (
                                            <img
                                                src={book!.image}
                                                alt="Thumb"
                                                className="img-addBook"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="body-addBook-details-book-about">
                                    <div className="field-edit editBook-title">
                                        {styleEditTitle ? (
                                            <h3 className="edited-label">
                                                Título{" "}
                                            </h3>
                                        ) : (
                                            <h3>Título </h3>
                                        )}

                                        <input
                                            placeholder={book!.title}
                                            onChange={(e) =>
                                                handleChange(e, "title")
                                            }
                                        ></input>
                                    </div>

                                    <div className="field-edit editBook-description">
                                        {styleEditDesc ? (
                                            <h3 className="edited-label">
                                                Descripción
                                            </h3>
                                        ) : (
                                            <h3>Descripción</h3>
                                        )}

                                        <textarea
                                            placeholder={book!.description}
                                            onChange={(e) =>
                                                handleChange(e, "desc")
                                            }
                                        ></textarea>
                                    </div>

                                    <div className="body-addBook-details-book-grid">
                                        <div className="field-edit editBook-author">
                                            {styleEditAuthor ? (
                                                <h3 className="edited-label">
                                                    Autor
                                                </h3>
                                            ) : (
                                                <h3>Autor</h3>
                                            )}

                                            <input
                                                placeholder={book!.author}
                                                onChange={(e) =>
                                                    handleChange(e, "author")
                                                }
                                            ></input>
                                        </div>
                                        <div className="field-edit editBook-editorial">
                                            {styleEditEditorial ? (
                                                <h3 className="edited-label">
                                                    Editorial
                                                </h3>
                                            ) : (
                                                <h3>Editorial</h3>
                                            )}

                                            <input
                                                placeholder={book!.editorial}
                                                onChange={(e) =>
                                                    handleChange(e, "editorial")
                                                }
                                            ></input>
                                        </div>

                                        <div className="field-edit editBook-anyo">
                                            {styleEditAnyo ? (
                                                <h3 className="edited-label">
                                                    Año
                                                </h3>
                                            ) : (
                                                <h3>Año</h3>
                                            )}

                                            <input
                                                type="number"
                                                placeholder={String(book!.anyo)}
                                                onChange={(e) =>
                                                    handleChange(e, "anyo")
                                                }
                                            ></input>
                                        </div>

                                        <div className="field-edit editBook-language">
                                            {styleEditLanguage ? (
                                                <h3 className="edited-label">
                                                    Idioma
                                                </h3>
                                            ) : (
                                                <h3>Idioma</h3>
                                            )}
                                            <input
                                                placeholder={String(
                                                    book!.language
                                                )}
                                                onChange={(e) =>
                                                    handleChange(e, "language")
                                                }
                                            ></input>
                                        </div>
                                        <div className="field-edit editBook-pages">
                                            {styleEditPages ? (
                                                <h3 className="edited-label">
                                                    Páginas
                                                </h3>
                                            ) : (
                                                <h3>Páginas</h3>
                                            )}

                                            <input
                                                type="number"
                                                placeholder={String(
                                                    book!.pages
                                                )}
                                                onChange={(e) =>
                                                    handleChange(e, "pages")
                                                }
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-details-pyshical">
                            <div className="body-addBook-details-book-physical">
                                <div className="field-edit editBook-weight">
                                    {styleEditWeight ? (
                                        <h3 className="edited-label">Peso</h3>
                                    ) : (
                                        <h3>Peso</h3>
                                    )}

                                    <input
                                        type="number"
                                        placeholder={String(book!.weight)}
                                        onChange={(e) =>
                                            handleChange(e, "weight")
                                        }
                                    ></input>
                                </div>

                                <div className="field-edit editBook-width">
                                    {styleEditWidth ? (
                                        <h3 className="edited-label">Ancho</h3>
                                    ) : (
                                        <h3>Ancho</h3>
                                    )}

                                    <input
                                        type="number"
                                        placeholder={String(book!.width)}
                                        onChange={(e) =>
                                            handleChange(e, "width")
                                        }
                                    ></input>
                                </div>

                                <div className="field-edit editBook-height">
                                    {styleEditHeight ? (
                                        <h3 className="edited-label">Altura</h3>
                                    ) : (
                                        <h3>Altura</h3>
                                    )}

                                    <input
                                        type="number"
                                        placeholder={String(book!.height)}
                                        onChange={(e) =>
                                            handleChange(e, "height")
                                        }
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-details-selling">
                            <h3>Detalles de venta</h3>
                            <div className="body-addBook-details-book-selling">
                                <div className="field-edit editBook-price">
                                    {styleEditPrice ? (
                                        <h3 className="edited-label">Precio</h3>
                                    ) : (
                                        <h3>Precio</h3>
                                    )}

                                    <input
                                        type="number"
                                        placeholder={String(book!.price)}
                                        onChange={(e) =>
                                            handleChange(e, "price")
                                        }
                                    ></input>
                                </div>

                                <div className="field-edit editBook-discount">
                                    {styleEditDiscount ? (
                                        <h3 className="edited-label">
                                            Porcentaje de Descuento
                                        </h3>
                                    ) : (
                                        <h3>Porcentaje de Descuento</h3>
                                    )}

                                    <input
                                        type="number"
                                        placeholder={String(
                                            book!.percentDiscount
                                        )}
                                        onChange={(e) =>
                                            handleChange(e, "discount")
                                        }
                                    ></input>
                                </div>

                                <div className="field-edit editBook-stock">
                                    {styleEditStock ? (
                                        <h3 className="edited-label">Stock</h3>
                                    ) : (
                                        <h3>Stock</h3>
                                    )}

                                    <input
                                        type="number"
                                        placeholder={String(50)}
                                        onChange={(e) =>
                                            handleChange(e, "stock")
                                        }
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <button className="btn-add-book" onClick={saveChanges}>
                            <FiSave />
                            <span>Guardar Cambios</span>
                        </button>
                    </div>
                </form>

                {/* <div className="field-edit editBook-age">
                    {styleEditAge ? (
                        <h3 className="edited-label">Público</h3>
                    ) : (
                        <h3>Público</h3>
                    )}

                    <input
                        placeholder={book!.age}
                        onChange={(e) => handleChange(e, "age")}
                    ></input>
                </div> */}

                {/* <div className="field-edit editBook-sku">
                    {styleEditSku ? (
                        <h3 className="edited-label">SKU</h3>
                    ) : (
                        <h3>SKU</h3>
                    )}

                    <input
                        placeholder={book!.sku}
                        onChange={(e) => handleChange(e, "sku")}
                    ></input>
                </div>

                <div className="field-edit editBook-isbn">
                    {styleEditIsbn ? (
                        <h3 className="edited-label">ISBN</h3>
                    ) : (
                        <h3>ISBN</h3>
                    )}

                    <input
                        placeholder={book!.isbn}
                        onChange={(e) => handleChange(e, "isbn")}
                    ></input>
                </div>
 */}
            </div>
        </div>
    );
};

export default EditBook;
