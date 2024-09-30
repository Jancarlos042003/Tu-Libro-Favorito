import { X } from 'lucide-react';

const ContentPreview = ({ name, close }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-2">
            <section className="text-black">
                <div className="border-gray-300 border px-7 md:px-14 py-8 rounded-lg max-w-4xl h-[87vh] bg-white relative">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">Vista previa: {name}</h3>
                        <button 
                            onClick={close}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            aria-label="Cerrar vista previa"
                        >
                            <X size={19} />
                        </button>
                    </div>ju
                    <div className="pt-5 px-4 md:px-6">
                        <h4 className="text-xl font-bold">Capítulo 1</h4>
                        <div className='overflow-y-auto h-[calc(80vh-100px)] mt-4 scrollbar-thin'>
                            <p className='text-justify md:mr-3 mr-2'>
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            ipsum, dolor sit amet consectetur adipisicing elit. Maiores ducimus asperiores officiis a laudantium dolor sapiente vitae dolorem provident, sit, vero suscipit, officia laborum quis! Temporibus distinctio optio exercitationem magni?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContentPreview;
