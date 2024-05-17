import Landpage1 from "../assets/landpage1.png"
import Plus from "../assets/plus.svg"
import Play from "../assets/play.svg"
import Frame from "../assets/frame1.png"
import Landpage2 from "../assets/landpage2.png"

import './Home.css'
import ReactSlick from "../components/ReactSilck"
import CarouselDefault from "../components/CarouselDefault"
import { MainCard } from "../components/MainCard"
import { ImageCard } from "../components/ImageCard"



const imageLinks = [
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Hw5vsJ1M6ONv8-q_MCwSElYfLx2VLpCsRA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpsOkff4PKmyVgvACGJKgASkklcwl1PEJpA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1OVYxDhGbHVMOJrKWNoP4HedlKl55HhBSg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHm0wFn_IR_KHqUwj4I2eygIWJe22HxeP_EQ&usqp=CAU"
    // Add more image links as needed
];

function Home() {
    return (

        <div className="grid grid-cols-1 grid-rows gap-4">
            <div ><img
                className="desktop-img"
                src={Landpage1}
                alt="nature image"
            />
                <img
                    className="lg:h-[calc(100vh-18vh)] w-full lg:object-cover lg:object-center  md:hidden sm:block lg:hidden"
                    src={Frame}
                    alt="nature image"
                />
                <div className="landpage-top-text md:mt-0 lg:mt-0 mt-5 p-3 md:p-0 lg:p-0">
                    <p className="md:text-lg lg:text-lg text-md animate-typing overflow-hidden whitespace-nowrap border-r-4  pr-5   font-bold">Bringing Life to Your walls</p>
                    <h4 className="md:text-5xl lg:text-5xl text-3xl pt-3 font-bold">Looking to Print Your<span className=" flex-1 block pt-1">Photos On Canvas?</span></h4>
                    <p className="md:text-lg lg:text-lg text-md pt-3 ">Decorate your walls with beautiful memories using your <span className="md:flex-1 md:block pt-3">favourite photos</span></p>
                    <div className="mt-4">
                        <button className="bg-black hover:bg-hoverblack text-gray-800 font-bold py-2 px-4  inline-flex items-center w-max ">
                            <span>Customize Now</span>
                            <img className="fill-current w-5 h-5 ml-2" src={Plus} alt="Plus" />
                        </button>
                        <button className="bg-gray-300 hover:bg-hoverblack text-gray-800 font-bold py-2 px-4  inline-flex items-center bg-transparent ml-3">
                            <span>How It Work</span>
                            <img className="fill-current w-5 h-5 ml-2 text-black" src={Play} alt="Plus" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row-start-2 md:p-10 lg:p-10 md:mt-2 lg:mt-2  pl-3 md:pl-3 lg:pl-3 pr-3 md:pr-0 lg:pr-0">
                <h4 className="text-3xl font-bold">New Canvas</h4>
                <p className="text-lg">You can start with creating your photo with frame.</p>
                <div className="silck-banner mt-10"><ReactSlick imageLinks={imageLinks} /></div>
                <div className="mobile-slide h-[calc(100vh-30vh)] mt-10">
                    <CarouselDefault imageLinks={imageLinks} />
                </div>
            </div>
            <div className="row-start-3 relative">
                <img
                    className="desktop-img2"
                    src={Landpage2}
                    alt="nature image"
                />
                <div className="landpage-center-text">
                    <h4 className="text-4xl font-bold text-white ">How it Works</h4>
                    <p className="text-white font-bold text-lg">Get your business logo into more hands,</p>
                    <div className="flex gap-8 mt-10 "> <img
                        className="hidden  lg:block h-80 w-80 rounded-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        alt="nature image"
                    />
                        <img
                            className="hidden  lg:block h-80 w-80 rounded-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                        <img
                            className="hidden  lg:block h-80 w-80 rounded-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                        <img
                            className="hidden  lg:block h-80 w-80 rounded-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="nature image"
                        />
                    </div>

                    <div className="  landing-center-image   ml-10 md:ml-0 md:mt-48">
                        <div className="flex gap-8">
                            <img
                                className="md:block sm:block lg:hidden h-40 w-40 rounded-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=60"
                                alt="nature image"
                            />
                            <img
                                className="md:block sm:block lg:hidden h-40 w-40 rounded-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=60"
                                alt="nature image"
                            />
                        </div>
                        <div className="flex gap-8 mt-5">
                            <img
                                className="md:block sm:block lg:hidden h-40 w-40 rounded-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=60"
                                alt="nature image"
                            />
                            <img
                                className="md:block sm:block lg:hidden h-40 w-40 rounded-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                                alt="nature image"
                            />
                        </div>

                    </div>
                </div>
            </div>
            <div className="row-start-4 ">
                <h4 className="text-3xl font-bold mt-10 pl-10">Free Delivery </h4>
                <p className="text-lg pl-10">Get your business logo into more hands,</p>
                <div className="flex flex-col justify-center items-center">

                    <div className="cover aspect-h-9 w-[calc(100vw-5vw)] h-96 ">
                        <video className="rounded-lg object-center object-fill w-full h-96 " autoPlay loop muted>
                            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>



            </div>
            <div className="row-start-5"> <div className="p-10">
                <div>
                    <h4 className="text-3xl font-bold">Happy Customers</h4>
                    <p>Get your business logo into more hands</p>
                </div>
                <div className="flex gap-6 justify-center mt-5 flex-col md:flex-row">
                    <MainCard />
                    <MainCard />
                    <MainCard />
                    <MainCard />
                </div>
            </div></div>

            <div className="row-start-6 bg-blue-gray-50 p-10">
                <div className="flex justify-center items-center md:pl-60 lg:pl-60 flex-col md:justify-center md:items-center lg:justify-center lg:items-center md:flex-row lg:flex-row">
                    <div className="">
                        <h1 className="text-3xl font-bold">Tell your Canvas story</h1>
                        <p className="text-lg md:w-1/2 lg:w-1/2">Transform your walls, tell your story, and relive the moments that matter most with our exceptional photo canvas prints.A simple photo can be transformed into a beautiful piece of art when placed in a frame.
                            <br />
                            <br />

                            Not only does it give the photo a physical presence, but it also adds a touch of elegance and personalization to any space.
                        </p>
                    </div>
                    <div className="md:w-5/6 lg:w-5/6 mt-5">
                        <ImageCard />
                    </div>
                </div>
            </div>

            <div className="row-start-7 p-10">
                <div className="">
                    <h4 className="text-3xl font-bold">Recent Moments we printed</h4>
                    <p className="text-lg">Get your business logo into more hands</p>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-6 pl-5">
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />

                </div>
            </div>
            <div className="bg-black h-60">

            </div>
        </div>

    )
}

export default Home