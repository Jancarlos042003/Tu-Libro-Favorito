import AddButton from "../buttons/AddButton";
import Input from "../input/Input";
import { useState } from "react";
import Close from "../buttons/Close";
import CreateAuthorModal from "../modal/CreateAuthorModal";

const AuthorInputs = () => {
    const [authors, setAuthors] = useState(['']); // Iniciamos con un input vacío

    const handleAddAuthor = () => {
        setAuthors([...authors, '']); // Agregamos un nuevo string vacío al array
    };

    const handleAuthorChange = (index, value) => {
        const newAuthors = [...authors];
        newAuthors[index] = value;
        setAuthors(newAuthors);
    };

    const handleRemoveAuthor = (index) => {
        const newAuthors = authors.filter((_, i) => i !== index);
        setAuthors(newAuthors);
    };

    return (
        <div className="space-y-2">
            {authors.map((author, index) => (
                <div key={index} className="flex items-center gap-2">
                    <div className="flex-1">
                        <Input
                        titulo={index === 0 ? "Autor" : ""}
                        tipo="text"
                        placeholder="Ingrese el autor del libro"
                        value={author}
                        onChange={(e) => handleAuthorChange(index, e.target.value)}
                        />
                    </div>
                    {index > 0 && (
                        <Close onClose={() => handleRemoveAuthor(index)} />
                    )}
                </div>
            ))}
        </div>
    );
}


export default AuthorInputs