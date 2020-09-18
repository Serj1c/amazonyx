import React from 'react';
import '../css/Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product 
                        id="111"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum non nostrum ullam. Nulla, dolore!"                        
                        price={19.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
                    />
                    <Product
                        id="222"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum non nostrum ullam. Nulla, dolore!"
                        price={239.99}
                        rating={4}
                        image="https://www.220-electronics.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/e/kenwood-kmix-kmx51-mixer--up.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="333"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum non nostrum ullam. Nulla, dolore!"
                        price={199.99}
                        rating={3}
                        image="https://images.samsung.com/is/image/samsung/my-curved-c27rg5-lc27rg50fqexxm-frontblack-179755534?$PD_GALLERY_L_JPG$"                        
                    />
                    <Product 
                        id="444"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum non nostrum ullam. Nulla, dolore!"
                        price={98.99}
                        rating={5}
                        image="https://www.thesource.ca/medias/20190926144729-108085276-A.jpg-mediaConversion-640-x-480-0?context=bWFzdGVyfGltYWdlc3wxMDUxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaDUxL2hjMy85MTgzNDY4NDIxMTUwLmpwZ3w4YjM4MTRiYjdhYWI2OTcxZGYyMjRlYWNkOTU2NzBmMWViNmFjZGM3MmVjN2FkMjhhOWUwZjcxZGE1M2QwOWE4"                        
                    />
                    <Product 
                        id="555"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum non nostrum ullam. Nulla, dolore!"
                        price={598.99}
                        rating={4}
                        image="https://gopioneer.com/wp-content/uploads/2017/10/Pioneer-Cellular-Apple-iPad-Pro-12.9.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="666"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum non nostrum ullam. Nulla, dolore!"
                        price={1094.98}
                        rating={4}
                        image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg"
                    />
                </div>   
            </div>
        </div>
    )
}

export default Home;
