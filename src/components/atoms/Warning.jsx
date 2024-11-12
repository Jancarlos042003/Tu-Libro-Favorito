import { Link } from "react-router-dom";

const Warning = ({ texto1, texto2= "" }) => (
    <p className="text-center p-2 bg-red-100 text-red-800 mb-3">
        <span>{texto1} </span>
        <Link className="underline" to={"/login"}>
            Inicia sesión
        </Link>
        <span> o </span>
        <Link className="underline" to={"/registro"}>
            Regístrate
        </Link>
        <span> {texto2}.</span>
    </p>
);

export default Warning;
