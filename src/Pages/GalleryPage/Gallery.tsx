import { Masonry } from 'react-plock';
import { Container } from "react-bootstrap"
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import './Gallery.css'

export const GalleryPage = () => {
    const items:{url:string, alt:string, tag?:string,}[] = [
       {url:"https://cdna.artstation.com/p/assets/images/images/061/509/010/large/pablossky-portrait4.jpg?1680975077", alt:"", tag:"Digital"},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/511/915/large/pablossky-0030.jpg?1680981372", alt:"", tag:"Blender Digital"},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/511/853/large/pablossky-bez-nazwy.jpg?1680981186", alt:"", tag:"Blender Digital"},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/508/907/large/pablossky-1.jpg?1680974910", alt:"", tag:"Digital"},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/508/869/large/pablossky-italy.jpg?1680974807", alt:"", tag:"Digital"},
       {url:"https://cdna.artstation.com/p/assets/images/images/061/508/804/large/pablossky-portrait-3.jpg?1680974658", alt:"", tag:"Digital"},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/508/797/large/pablossky-portrait-2.jpg?1680974651", alt:"", tag:"Digital"},
       {url:"https://cdna.artstation.com/p/assets/images/images/061/508/794/large/pablossky-portrait-1.jpg?1680974639", alt:"", tag:"Digital"},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/456/197/large/pablossky-av.jpg?1680826790", alt:"", tag:"Digital"},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/449/859/large/pablossky-sand.jpg?1680809648", alt:"", tag:"Digital"},
       {url:"https://cdna.artstation.com/p/assets/images/images/061/449/814/large/pablossky-ddart1.jpg?1680809585", alt:"", tag:"Digital"},
       {url:"https://cdna.artstation.com/p/assets/images/images/048/238/370/large/pablossky-img-20220409-024427.jpg?1649542779", alt:"", tag:"Blender Digital"},
       {url:"https://cdnb.artstation.com/p/assets/images/images/061/504/475/large/pablossky-fg2.jpg?1680965487", alt:"", tag:"Digital"},
       {url:"https://i.imgur.com/VzA023r.png", alt:"", tag:"Blender Digital"},
       {url:"https://i.imgur.com/TdaWklR.png", alt:"", tag:"Blender Digital"},
       {url:"https://i.imgur.com/qJdlv6X.png", alt:"", tag:"Blender Digital"},
       {url:"https://i.imgur.com/2AktXUT.jpg", alt:"", tag:"Traditional"},
       {url:"https://i.imgur.com/wincdVn.jpg", alt:"", tag:"Traditional"},
       {url:"https://i.imgur.com/8TbBAJB.jpg", alt:"", tag:"Traditional"},
       {url:"https://i.imgur.com/Ju2UZlT.jpg", alt:"", tag:"Traditional"},
       {url:"https://i.imgur.com/ECmq5DB.jpg", alt:"", tag:"Traditional"},
       {url:"https://i.imgur.com/VvYaLwt.png", alt:"", tag:"Digital"},
    ];

    const [filteredItems, setFilteredItems]= useState(items);
    const [radioValue, setRadioValue] = useState('All');
    const shuffledItems = shuffleArray(filteredItems);

    const radios = [
        { name: 'All', value: 'All' },
        { name: 'Blender', value: 'Blender' },
        { name: 'Digital Art', value: 'Digital' },
        { name: 'Traditional', value: 'Traditional' },
      ];

    function shuffleArray<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
      return array;
    }

    function filterList(value:string) {
        setRadioValue (value);

        let data:any[]=[];

        if (value=="All"){data=items;}
        else {
            data = items.filter(items=>items.tag?.includes(value));
        }
        setFilteredItems(data);
    }

    
    return <>
        <Container className="headGallery">
            <h1>My arts</h1>
            <article className="article">
                <p>I present you some of my works. I mixed up there 3D arts, digital drawings and even ones created with traditional methods.
                </p>
            </article>
        </Container>

        <Container className="gallery">
            <div className='galleryButtons'>
            <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    className='radioButton'
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={'dark'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => filterList(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
            </ButtonGroup>
            </div>
        <Masonry
            className='galery-masonry'
            items={shuffledItems}
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