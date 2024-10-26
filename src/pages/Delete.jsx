import Inventory from "./Inventory";

const Delete = () => {
    const exampleBook = {
        titulo: "Cien Años de Soledad",
        isbn: "978-3-16-148410-0",
        precio: 25.99,
        descuento: 10,
        descripcion: "Una obra maestra de Gabriel García Márquez que narra la historia de la familia Buendía.",
        resumen: "La historia de siete generaciones de la familia Buendía en el pueblo ficticio de Macondo.",
        vistaPrevia: "Capítulo 1: Muchos años después, frente al pelotón de fusilamiento...",
        imagenPortada: "https://example.com/portada.jpg",
        imagenSubportada: "https://example.com/subportada.jpg",
        fechaPublicacion: "1967-06-05",
        autor: ["Gabriel García Márquez"],
        editorial: "Editorial Planeta",
        categorias: ["Ficción", "No Ficción"],
        subcategorias: ["Categoria 1", "Categoria 2"]
    };
    return(
        <Inventory />
    )
} 

export default Delete