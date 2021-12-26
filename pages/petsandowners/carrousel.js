import React, { useState } from 'react';
import './Producto.css'

function Gallery() {

    const [selectedImg, setSelectedImg] = useState([0]);

    return (
        <div style={{ marginTop: 75 }}>
            <div className='titulo-paginas' style={{ padding: 10 }}>
                <h1>Medias - Amarillo</h1>
            </div>
            <div className='contenedor-grid-producto'>
                <div className='grid-producto-imagen'>
                    <div className='grid-producto-imagen-contenedor'>
                        <img src={selectedImg} alt='Selected' className='grid-producto-imagen-contenedor-solo' />
                        <div className='grid-producto-imagen-contenedor-items'>
                            <img 
                                key='0'
                                src='https://imagizer.imageshack.com/img924/3168/dBmZr8.jpg'
                                alt='image'
                                onClick={() => setSelectedImg()}
                            />
                            <img 
                                key='1'
                                src='https://imagizer.imageshack.com/img923/2639/9Ildr1.jpg'
                                alt='image'
                                onClick={() => setSelectedImg()}
                            />
                            <img 
                                key='2'
                                src='https://imagizer.imageshack.com/img922/1858/RvRflR.jpg'
                                alt='image'
                                onClick={() => setSelectedImg()}
                            />
                            <img 
                                key='3'
                                src='https://imagizer.imageshack.com/img922/6738/ZahNjl.jpg'
                                alt='image'
                                onClick={() => setSelectedImg()}
                            />         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery
