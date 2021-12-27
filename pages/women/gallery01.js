import Header from '../../components/Navbar';

function Women() {
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
                            <img src="https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-women.JPG?alt=media&token=ef5edd77-b8bb-46cc-b0ba-96f5ea58714c" style={{ width: 350, height: 310, objectFit: 'cover' }}/>
                            <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                        </div>                                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Women