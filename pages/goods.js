import Header from '../components/Navbar';

function Goods() {
    return (
        <div>
            <Header />
            <div style={{
                    display: 'flex',
                    position: 'relative',
                    height: '486px',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingTop: '100px',
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
                            <a href="/goods/gallery01"><img src="https://imagizer.imageshack.com/img924/3168/dBmZr8.jpg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                            <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                        </div>
                        <div style={{ position: 'relative' }}>
                            <a href="/goods/gallery02"><img src="https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/medias-azul-1.jpg?alt=media&token=81dc1661-d6d1-46d0-87c7-6438d4300e4e" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                            <span style={{ position: 'absolute', top: 135, left: 155, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goods
