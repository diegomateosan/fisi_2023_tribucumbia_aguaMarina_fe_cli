import React, { useState } from "react";
import "./dropdown.css";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Dropdown: React.FC<{
    items: Array<String>;
    title: string;
    handle : ()=>void;
}> = ({ title, items ,handle}) => {
    const [state, setState] = useState(false);
    const navigate = useNavigate();
    const shownDropdown = () => {
        setState(true);
    };

    const hideDropdown = () => {
        setState(false);
    };

    const showUser = async (x: String) => {
 
        if(x==="Mi Usuario"){
            navigate("/brisasMarinas/usuario/details");
        }else if (x==="Cerrar Sesión"){
            try {
                await localStorage.removeItem("token");
                handle();
                alert("Sesión terminada");
              } catch (err) {
                console.error(err);
              }
            }
       
    };



    const handleClick = () => {
        state ? hideDropdown() : shownDropdown();
    };
    let key = 0;
    return (
        <div className="dropdown">
            <div className="dropdown-menu" onClick={handleClick}>
                <span className="dropdown-title">{title}</span>
                <IoIosArrowDown className="dropdown-icon" />
                {state ? (
                    <ul className="dropdown-list" onMouseOver={shownDropdown}>
                        {items.map((item) => {
                            return (
                                <li className="dropdown-item" key={key++} onClick={()=>showUser(item)} >
                                    {item}
                                </li>
                            );
                        })}

                    </ul>
                ) : null}
            </div>
        </div>
    );
};

export default Dropdown;
