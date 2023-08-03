import React from 'react';

const LatestToy = () => {
    return (
        <div className='mb-12'>
        <h2 className="text-orange-500 text-3xl text-center mb-9 font-bold mb-4">Our Latest Toys</h2>
        <marquee  behavior="scroll" direction="left" ><span className="text-2xl font-semibold text-orange-300">Offer</span>-Free shipping on order $99</marquee>


            
<div className="grid grid-cols-2 md:grid-cols-4 p-3 gap-4"style={{ backgroundImage: "url('https://images.pexels.com/photos/950241/pexels-photo-950241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i5.walmartimages.com/asr/a7b21a89-0b3b-4d9b-9486-f5bc2efbb3f8_2.a90cc808ad8afe05186a14acec47f58b.jpeg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://cdn.shopify.com/s/files/1/1569/9941/products/VA90063_350x@2x.jpg?v=1613821235" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://learn2code.club/wp-content/uploads/2016/01/amazing-science-ststiobn.png" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://th.bing.com/th/id/OIP.h5YYjwVEzh6aqf57q1XYGwHaHf?pid=ImgDet&rs=1" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://www.stpgoods.com/media/catalog/product/1/9/196973.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://cdn.shopify.com/s/files/1/1511/9696/products/little_lab_main_image_1024x1024@2x.jpg?v=1561173724" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i5.walmartimages.com/asr/f15dfbcd-4063-4a5c-88d4-337e15fe9bf7_1.a9af30c3c60e29661413d4a49502e94f.jpeg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ytimg.com/vi/vobzuwvT2S8/maxresdefault.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://www.sinoning.com/wp-content/uploads/2020/07/73598-tlcbnr.jpg" alt=""/>
        </div>
    </div>
</div>

        </div>
    );
};

export default LatestToy;