export default function ProductTypeCovers() {
    return (
        <div style={{
                display: 'flex',
                position: 'relative',
                height: '486px',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
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
                        <a href="/women"><img src="https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-women.JPG?alt=media&token=ef5edd77-b8bb-46cc-b0ba-96f5ea58714c" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <a href="/women"><span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}>Women</span></a>   
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="/petsandowners"><img src="https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-petsandowners.JPEG?alt=media&token=7e3b4c72-b34c-4718-8431-4412e5d845f2" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <a href="/petsandowners"><span style={{ position: 'absolute', top: 135, left: 78, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}>Pets and Owners</span></a>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="/goods"><img src="https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-goods.PNG?alt=media&token=01edd039-1bc0-4e1d-943c-72944086bc18" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <a href="/goods"><span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}>Goods</span></a>    
                    </div>
                </div>
            </div>
        </div>
    )
}

