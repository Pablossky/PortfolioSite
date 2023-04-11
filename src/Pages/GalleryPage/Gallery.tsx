import { Masonry } from 'react-plock';
import { Container } from "react-bootstrap"

import './Gallery.css'

export const GalleryPage = () => {
    const items:{url:string, alt:string}[] = [
       {url:"https://cdna.artstation.com/p/assets/images/images/061/509/010/large/pablossky-portrait4.jpg?1680975077", alt:""},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/511/915/large/pablossky-0030.jpg?1680981372", alt:""},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/511/853/large/pablossky-bez-nazwy.jpg?1680981186", alt:""},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/508/907/large/pablossky-1.jpg?1680974910", alt:""},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/508/869/large/pablossky-italy.jpg?1680974807", alt:""},
       {url:"https://cdna.artstation.com/p/assets/images/images/061/508/804/large/pablossky-portrait-3.jpg?1680974658", alt:""},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/508/797/large/pablossky-portrait-2.jpg?1680974651", alt:""},
       {url:"https://cdna.artstation.com/p/assets/images/images/061/508/794/large/pablossky-portrait-1.jpg?1680974639", alt:""},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/456/197/large/pablossky-av.jpg?1680826790", alt:""},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/449/859/large/pablossky-sand.jpg?1680809648", alt:""},
       {url:"https://cdna.artstation.com/p/assets/images/images/061/449/814/large/pablossky-ddart1.jpg?1680809585", alt:""},
       {url:"https://cdna.artstation.com/p/assets/images/images/048/238/370/large/pablossky-img-20220409-024427.jpg?1649542779", alt:""},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/504/475/large/pablossky-fg2.jpg?1680965487", alt:""}
    ];

    return <>
        <Container className="headGallery">
            <h1>Hi from Gallery!</h1>
            <article className="article">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit illo molestias iure eos enim ratione, eius unde sint iusto, harum sunt odio velit tenetur magni nisi maxime corporis? Vero, cupiditate.
                Vitae, aliquid facilis laudantium repellat fugit rem saepe minus illum omnis ipsam doloremque modi voluptatem nihil ut fugiat quos perferendis fuga. Molestias quos aspernatur at sit dolorum soluta ullam harum!
                </p>
            </article>
        </Container>

        <Container>
        <Masonry
            className='galery-masonry'
            items={items}
            config={{
                columns: [1, 2, 3],
                gap: [24, 12, 6],
                media: [640, 768, 1024],
            }}
            render={(item, idx) => (
                <img key={idx} src={item.url} alt={item.alt} style={{ width: "100%", height: "auto" }}  />
            )}
        />
        </Container>
    </>
}