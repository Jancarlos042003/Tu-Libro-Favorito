import BookList from "../components/booklist/BookList"
import CreateButton from "../components/buttons/CreateButton"
import Sidebar from "../components/sidebar/Sidebar"
import { CirclePlus } from 'lucide-react';

const AdminCard = () => {
    return(
        <div>
            <Sidebar />
            <div className="ml-16 p-4 md:p-6">
                <div className="flex justify-between items-center container m-auto py-2">
                    <h1 className="text-black text-3xl font-bold">Todos los Libros</h1>
                    <CreateButton Icon={CirclePlus} palabra={"Libro"} />
                </div>
                <BookList />
            </div>
        </div>
    )
}

export default AdminCard