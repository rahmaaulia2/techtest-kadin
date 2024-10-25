export default function InputForm() {
    return (
        <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4 bg-white">
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
                <div className="flex mb-12 justify-center items-center">
                    <img className="max-w-32" src="images.png"/>
                </div>
                <h1 className="font-bold text-center text-xl my-5 text-black">Input Contact</h1>
                <form>
                    <div className="space-y-6">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter name"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter email"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Phone
                            </label>
                            <input
                                name="phone"
                                type="text"
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter phone number"
                            />
                        </div>
                    </div>
                    <div className="!mt-12">
                        <button
                            type="button"
                            className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                        >
                            Save Contact
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}