const Loader = () => {
    return (
        <div className="flex items-center ml-16 justify-center w-full h-full min-h-[200px]">
            <div className="relative">
                <div className="w-12 h-12 border-4 border-neutral-300 rounded-full animate-spin border-t-stone-950"></div>
                <div className="mt-4 text-center text-gray-600">Cargando...</div>
            </div>
        </div>
    );
};

export default Loader;