const ProfileInfo = ({nombre, email}) => {
    return(
        <div className="p-4 bg-gray-700/50 border-b border-gray-700">
            <p className="text-white font-medium">{nombre}</p>
            <p className="text-gray-400 text-sm">{email}</p>
        </div>
    )
}

export default ProfileInfo