const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-white z-40">
            <div className="relative">
                <div className="w-12 h-12 border-4 border-neutral-300 rounded-full animate-spin border-t-stone-950"></div>
            </div>
        </div>
    );
};

export default Loader;
