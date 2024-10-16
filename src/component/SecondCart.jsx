import dining from '../images/Dining.png'
import living from '../images/Living room.png'
import Dining from '../images/Dining.png'
import Bedroom from '../images/Bedroom.png'

function SecondCart() {
    return (
        <>
            <div>
                <h1 className="text-center mt-8 text-3xl font-bold  ">Brower The Range</h1>
                <h4 className="text-center  ">Brower The Range Brower The Range Brower The Range</h4>
            </div>
            <div className="flex flex-wrap justify-around m-8">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded w-[320px] h-[420px] overflow-hidden">
                            <img
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block"
                                src={`${Dining}`}
                            />
                        </a>
                        <div className="mt-4">
                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                Dinning
                            </h2>
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded w-[320px] h-[420px] overflow-hidden">
                            <img
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block"
                                src={`${living}`}
                            />
                        </a>
                        <div className="mt-4 ">
                            <h2 className=" text-center text-gray-900 title-font text-lg font-medium">
                                Living
                            </h2>
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 w-[320px] h-[420px] rounded overflow-hidden">
                            <img
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block"
                                src={`${Bedroom}`}
                            />
                        </a>
                        <div className="mt-4">
                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                Bedroom
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SecondCart;