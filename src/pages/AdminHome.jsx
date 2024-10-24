import BookList from "../components/booklist/BookList"
import AddBook from "../components/buttons/AddBook"
import Sidebar from "../components/sidebar/Sidebar"

const AdminCard = () => {
    return(
        <div>
            <Sidebar />
            <div className="ml-16 p-4 md:p-6">
                <div className="flex justify-between items-center container m-auto py-2">
                    <h1 className="text-black text-3xl font-bold">Todos los Libros</h1>
                    <AddBook />
                </div>
                <BookList />
            </div>
        </div>
    )
}

export default AdminCard