export interface Props {
    booksSeller: Array<{
        id: number;
        title: string;
        gender?: string;
        description: string;
        author: string;
        price: number;
        image: string;
        percentDiscount?: number;
        sku: string;
        isbn: string;
        editorial: string;
        anyo: number;
        pages?: number;
        language: string;
        weight?: number;
        width?: number;
        height?: number;
        age: string;
    }>;
}

/* export interface Book {
    id: number;
    title: string;
    gender?: string;
    description: string;
    author: string;
    price: number;
    image: string;
    percentDiscount?: number;
    sku: string;
    isbn: string;
    editorial: string;
    anyo: number;
    pages?: number;
    language: string;
    weight?: number;
    width?: number;
    height?: number;
    age: string;
} */

export interface User {
    idcliente: number;
    nombre: string;
    apellido: string;
    telefono: number;
    dni: number;
    correo: string;
    contraseña: string;
}

/* export interface PropsUser {
    users: Array<{
        idcliente: number;
        nombre: string;
        apellido: string;
        telefono: number;
        dni: number;
        correo: string;
        contraseña: string;
    }>;
} */
