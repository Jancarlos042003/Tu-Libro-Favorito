import MenuOptions from "./MenuOptions"
import ProfileInfo from "./ProfileInfo"

const ProfileMenu = ({usuario, onLogout}) => {
    return(
        <div className="min-w-[170px] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <ProfileInfo nombre={usuario.nombre} email={usuario.email} />
            <MenuOptions onLogout={onLogout} />
        </div>
    )
} 

export default ProfileMenu