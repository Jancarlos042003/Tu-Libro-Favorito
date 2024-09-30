import { useState } from "react"
import ButtonPreview from "./ButtonPreview"
import ContentPreview from "./ContentPreview"

const BookPreview = () =>{
    const [showPreview, setShowPreview] = useState(false)
    
    const togglePreview = () => {
        setShowPreview(!showPreview);
    };
    
    return(
        <div className="w-full flex items-center justify-center mt-8">
            <ButtonPreview click={togglePreview} />
            {showPreview && <ContentPreview name={"cambiar"} close={togglePreview} />}
        </div>
    )
}

export default BookPreview