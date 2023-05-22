import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <div >
        <h1 className='text-center text-orange-400 font-extrabold text-5xl my-10 md:my-20'>Galary Features</h1>
        
        <div className="grid grid-cols-3">
      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full" data-aos="fade-right">
          <img src="https://qph.fs.quoracdn.net/main-qimg-a5d9d84b4574efa3da28586cbfd88ad2-c" alt="Gallery Image" />
        </div>
        <div className="carousel-item h-full" data-aos="fade-right">
          <img src="https://babyjourney.net/wp-content/uploads/2020/05/word-image-28.png" alt="Gallery Image" />
        </div>
       
      </div>
      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <img src="https://th.bing.com/th/id/R.531c375b3c6073d3d2cb85bff1dac74d?rik=Ph%2bkJ9UIQUKJtg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f6%2fToy-PNG-Picture.png&ehk=YTpMNOhXiUy4bkpL%2bffqY%2bstakPM01gjpHab3WSyP%2bg%3d&risl=&pid=ImgRaw&r=0" alt="Gallery Image" />
        </div>
        <div className="carousel-item h-full" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <img src="https://4.imimg.com/data4/KK/DH/MY-20986348/educational-toy-1000x1000.jpg" alt="Gallery Image" />
        </div>
        
      </div>
      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full" data-aos="fade-left">
          <img src="https://lifestyle.co.uk/public/images/hero/img_hero-toys-rubiks.jpg" alt="Gallery Image" />
        </div>
      
        <div className="carousel-item h-full" data-aos="fade-left">
          <img src="https://images3.alphacoders.com/268/thumb-350-26839.jpg" alt="Gallery Image" />
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default Gallery;
