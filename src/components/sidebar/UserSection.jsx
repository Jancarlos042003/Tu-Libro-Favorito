import { useState } from "react";
import Avatar from "./Avatar"
import ProfileMenu from "./ProfileMenu"

const UserSection = ({usuario, onLogout}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <div className="relative">
            <Avatar 
                iniciales={usuario.iniciales}
                isActive={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && (
                <>
                    <div className="absolute bottom-full left-full mb-2 ml-2">
                        <ProfileMenu usuario={usuario} onLogout={onLogout} />
                    </div>
                    <div 
                        className="fixed inset-0 z-10"
                        onClick={() => setIsMenuOpen(false)}
                    />
                </>
            )}
        </div>

    )
}

export default UserSection