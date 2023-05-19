


const Banner = () => {
    return (


        <div className="carousel w-full h-[300px] md:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src='https://cdn11.bigcommerce.com/s-bfc1cbi7hy/images/stencil/original/carousel/8/slider-01__62460.jpg?c=1' className="w-full rounded-xl" />

                <div className="absolute  h-full flex justify-end   transform -translate-y-1/2  top-1/2  p-4">

                    <div className='w-1/2  space-y-7 '>
                        <h1 className='text-white font-bold text-6xl '>Affordable Price For Car Servicing</h1>
                        <p className='text-[#FFFFFF] '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-2'>
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between top-1/2 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide3" className="btn btn-circle mr-3 hover:bg-amber-500">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-amber-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://cdn11.bigcommerce.com/s-bfc1cbi7hy/images/stencil/original/carousel/7/slider-02.jpg?c=1" className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center transform -translate-y-1/2  top-1/2 ">

                    <div className='w-1/2  space-y-7 pl-12'>
                        <h1 className='text-white font-bold text-6xl  '>Affordable Price For Car Servicing</h1>
                        <p className='text-[#FFFFFF] '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-2'>
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between top-1/2 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide1" className="btn btn-circle  hover:bg-amber-500 mr-3">❮</a>
                    <a href="#slide3" className="btn btn-circle  hover:bg-amber-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src='https://cdn11.bigcommerce.com/s-bfc1cbi7hy/images/stencil/original/carousel/7/slider-02.jpg?c=1' className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center transform -translate-y-1/2  top-1/2  ">

                    <div className='w-1/2  space-y-7 pl-12'>
                        <h1 className='text-white font-bold text-6xl  '>Affordable Price For Car Servicing</h1>
                        <p className='text-[#FFFFFF] '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-2'>
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between top-1/2 transform -translate-y-1/2 left-5 right-5 ">
                    <a href="#slide2" className="btn btn-circle  hover:bg-amber-500 mr-3">❮</a>
                    <a href="#slide1" className="btn btn-circle  hover:bg-amber-500">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;