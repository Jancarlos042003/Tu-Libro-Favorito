import { useState } from "react"
import ButtonPreview from "./ButtonPreview"
import ContentPreview from "./ContentPreview"

const BookPreview = ({titulo, vistaPrevia}) =>{
    const [showPreview, setShowPreview] = useState(false)
    
    const togglePreview = () => {
        setShowPreview(!showPreview);
    };
    
    return(
        <div className="w-full flex items-center justify-center mt-8">
            <ButtonPreview click={togglePreview} />
            {showPreview && <ContentPreview titulo={titulo} vistaPrevia={vistaPrevia} onClick={togglePreview} />}
        </div>
    )
}

export default BookPreview