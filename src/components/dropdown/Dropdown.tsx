import React, { useState } from "react";
import "./dropdown.css";
import { IoIosArrowDown } from "react-icons/io";
const Dropdown: React.FC<{
    items: Array<String>;
    title: string;
}> = ({ title, items }) => {
    const [state, setState] = useState(false);

    const shownDropdown = () => {
        setState(true);
    };

    const hideDropdown = () => {
        setState(false);
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
                                <li className="dropdown-item" key={key++}>
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
