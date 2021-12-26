import React from 'react';

function PetsAndOwners() {
    return (
        <div style={{
                display: 'flex',
                position: 'relative',
                height: '486px',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                paddingTop: '220px',
            }}
        >
            <div style={{
                    width: '1086px',
                    display: 'flex',
                    maxWidth: '1200px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '1336px',
                }}
            >
                <div style={{
                        width: '100%',
                        display: 'grid',
                        gridGap: 30,
                        gridTemplateColumns: '1fr 1fr 1fr',
                    }}
                >
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/0803F4BC-F267-4EB6-A8E0-880AA438DE25 2.jpeg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/043CE7B4-AF79-4EEB-B282-B5DA75580663.jpeg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 155, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/4DE78DFB-F30B-4375-93FC-6FCE7D0B9F5B 2.jpeg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/ADAFD1CE-6B9A-4B9B-AB72-721147941E34.jpeg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetsAndOwners