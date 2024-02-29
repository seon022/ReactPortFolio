import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = ({data}) => {
    const settings = {
        dots: true,
        arrows: false,
        speed: 300,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return( 
        <Slider {...settings}>
            {
                data.map((item)=> (
                    <img
                    key={item}
                    src={item}
                    alt='프로젝트 사진'
                    width='100%'
                />
                ))
            }
                
      </Slider>
    );
}

export default SlickSlider;