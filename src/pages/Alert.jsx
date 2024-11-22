import { useEffect, useState } from "react"
import StockAlert from "../components/stock/StockAlert"
import axios from "axios"
import { API_URL } from "../../env"
import { token } from "../helpers/auth"
import Loader from "../components/atoms/Loader"

const Alert = () => {
    const[data, setData] = useState([])
    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        axios.get(`${API_URL}/api/inventario`, {
            headers: {
                Authorization: `Bearer ${token()}`
            }
        })
        .then((resp) => {
            setData(resp.data)
        })
        .catch((e) => {
            setError(e)
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    // ESTABLECER LA CANTIDAD MINIMA DE STOCK
    const stockBajo = data.filter(d => d.stock <= 10)

    if(loading) return <Loader />

    return(
        <div className="container mx-auto py-4">
            <h1 className="text-black text-3xl font-bold">  
                Alertas de Stock Bajo
            </h1>

            {stockBajo.length > 0 ? (
                stockBajo.map(s => <StockAlert key={s.id} libro={s.libro} stock={s.stock} />)
            ) : (
                <div className="text-black my-10">
                    ¡Buenas noticias 😊! Todos los libros tienen un stock adecuado.
                </div>
            )}
        </div>
    )
}

export default Alert