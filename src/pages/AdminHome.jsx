import { Link } from "react-router-dom";
import BookList from "../components/booklist/BookList"
import CreateButton from "../components/buttons/CreateButton"
import Sidebar from "../components/sidebar/Sidebar"
import { CirclePlus } from 'lucide-react';
import useFetch from "../hooks/useFetch";
import Loader from "../components/atoms/Loader";

const AdminHome = () => {

    const {data, error, loading} = useFetch("api/libro")
    
    if(loading) return <Loader />
    if(error) return <h1 className="text-black">ERROR EN LA PETICIÓN.</h1>
    
    return(
        <div>
            <div className="flex justify-between items-center container m-auto py-2">
                <h1 className="text-black text-3xl font-bold">Todos los Libros</h1>
                <Link to={"/admin/crear"}>
                    <CreateButton Icon={CirclePlus} palabra={"Libro"} />
                </Link>
            </div>
            <BookList books={data} />
        </div>
    )
}

export default AdminHome