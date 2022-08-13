import React from "react";
import "../admin/homeAdmin.css";
import "../tabla/tabla.css";

export const FilaDefault: React.FC<{}> = () => {
    return (
        <div className="app-container-fila">
            <div className="wrapper-table-history">
                <table>
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Nombre del libro</th>
                            <th>Fecha de préstamo</th>
                            <th>Fecha de entrega</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
