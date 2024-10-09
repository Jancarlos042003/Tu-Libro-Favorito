import { SwatchBook } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () =>{
    return(
        <div className="cursor-pointer">
            <Link className="flex items-end" to="/">
                <SwatchBook size={40} />
                <span className="italic text-lg">Tu Libro Favorito</span>
            </Link>
        </div>
    )
}

export default Logo;