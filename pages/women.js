import React from 'react';

function Women() {
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
                        <a href="#"><img src="images/8B5EAD68-0636-46E3-B16B-471049E9E657.jpg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/BE57A173-2D4F-48D4-A681-96920081068F.jpeg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 155, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/24CED3EE-F1A9-4460-B9DA-ADD9ED9DEF41.jpeg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/788B8368-246D-4825-89CA-4557AECB0163.jpeg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Women