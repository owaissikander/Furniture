import Footer from "../component/Footer";

function Contact() {
    return (

<>


        <section className="text-gray-600 body-font relative">
            <div className="container ps-0 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-1/2 md:w-1 bg-white rounded-lg overflow-hidden sm:mr-10  flex justify-end   items-start relative">
                     
                    <div className="bg-white lg:mt-8 sm:p-4 lg:h-2/3 lg:w-2/3 md:w-2xl relative flex flex-col   space-y-12 flex-wrap py-6 rounded ">
                        <div className="lg:w-2/3 px-6">
                            <h2 className="title-font text-lg  font-bold text-gray-900 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Photo booth tattooed prism, portland taiyaki hoodie neutra
                                typewriter
                            </p>
                        </div>
                        
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">123-456-7890</p>
                            <p className="leading-relaxed">123-456-7890</p>

                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:pe-12 sm:p-6 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Feedback
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        Post-ironic portland shabby chic echo park, banjo fashion axe
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            defaultValue={""}
                        />
                    </div>
                    <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                        Button
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                        Chicharrones blog helvetica normcore iceland tousled brook viral
                        artisan.
                    </p>
                </div>
            </div>
        </section>
        <Footer/>
</>


    )
}

export default Contact;