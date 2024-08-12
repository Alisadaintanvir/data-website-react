export default function Import() {
    return (
        <div id="import-section" className="bg-gray-50 ">
            <nav className="section-nav flex px-4 py-3 bg-white shadow border-b border-gray-200">
                <div id="second-section-header" className="search-left lg:flex text-xl font-semibold ml-4">Import</div>
            </nav>
            <div className="import-container bg-white shadow-lg rounded px-8 py-6 mt-20 max-w-screen-xl mx-auto">
                <div className="import-container-head text-2xl text-gray-800 font-medium mb-8">
                    Import or sync your data
                </div>
                <div className="import-container-body lg:flex justify-center pb-4">
                    <div className="import-container-body-side-left flex border border-gray-300 rounded-sm p-6 mb-4 lg:mb-0 lg:mr-6">
                        <div className="import-container-body-image bg-gray-100 flex items-center justify-center rounded-full overflow-hidden w-32 h-32">
                            <img src="./Screenshot_1.jpg" alt="" className="max-w-full h-auto" />
                        </div>
                        <div className="import-container-body-side flex flex-col ml-6">
                            <div className="import-container-body-side-title text-lg text-gray-700 font-medium mb-2">
                                Import
                            </div>
                            <div className="import-container-body-side-p text-sm text-gray-600 font-light mb-4">
                                Import contact, company information into Getprospect.
                            </div>
                            <button className="import-container-body-side-button-sv bg-blue-600 text-white flex items-center justify-center px-4 h-[33px] w-36 rounded-sm hover:bg-blue-700 transition">
                                Start an import
                            </button>
                        </div>
                    </div>
                    <div className="import-container-body-side-right flex border border-gray-300 rounded-sm p-6">
                        <div className="import-container-body-image bg-gray-100 flex items-center justify-center rounded-full overflow-hidden w-32 h-32">
                            <img src="./Screenshot_2.jpg" alt="" className="max-w-full h-auto" />
                        </div>
                        <div className="import-container-body-side flex flex-col ml-6">
                            <div className="import-container-body-side-title text-lg text-gray-700 font-medium mb-2">
                                Import
                            </div>
                            <div className="import-container-body-side-p text-sm text-gray-600 font-light mb-4">
                                Import contact, company information into Getprospect.
                            </div>
                            <button className="import-container-body-side-button-cn border bg-gray-100 text-gray-700 rounded-sm flex items-center justify-center px-4 h-[33px] w-36  border-gray-300 hover:bg-white  hover:text-blue-600 hover:border-blue-600 transition">
                                Start an import
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
