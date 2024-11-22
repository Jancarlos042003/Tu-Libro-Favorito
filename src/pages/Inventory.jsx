import { useEffect, useState } from "react";
import BooksInventory from "../components/form/BooksInventory"
import CreateInventary from "../components/form/CreateInventory"
import { API_URL } from "../../env";
import axios from "axios";
import { token } from "../helpers/auth";
import Loader from "../components/atoms/Loader";

const Inventory = () => {

    const [inventario, setInventario] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        axios.get(`${API_URL}/api/inventario`, {
            headers: {
                Authorization: `Bearer ${token()}`
            }
        })
        .then((resp) => {
            setInventario(resp.data)
        })
        .catch((e) => {
            setError("Error: " + e)
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, []); 

    // Función para actualizar el estado después de actualizar un stock
    const handleUpdateSuccess = (updatedItem) => {
        setInventario(prevData => 
            prevData.map(item => 
                item.id === updatedItem.id ? updatedItem : item
            )
        );
    };

    if(loading) return <Loader />

    return (
        <div className="py-4">
            <CreateInventary inventario={inventario} />
            <BooksInventory data={inventario} onUpdateSuccess={handleUpdateSuccess} />
        </div>
    );
}

export default Inventory