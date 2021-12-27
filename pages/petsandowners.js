import Header from '../components/Navbar';

function PetsAndOwners() {
    return (
        <div>
            <Header />
            <div style={{
                    display: 'flex',
                    position: 'relative',
                    height: '816px',
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
                            <a href="/petsandowners/gallery01"><img src="https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-petsandowners.JPEG?alt=media&token=7e3b4c72-b34c-4718-8431-4412e5d845f2" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                            <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                        </div>
                        <div style={{ position: 'relative' }}>
                            <a href="/petsandowners/gallery02"><img src="https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-gris-1.JPEG?alt=media&token=c04e94a4-3953-444b-8e95-31dfbf5bed37" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                            <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                        </div>
                        <div style={{ position: 'relative' }}>
                            <a href="/petsandowners/gallery03"><img src="https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-rojo-1.JPEG?alt=media&token=abbf0ecf-8c09-4b57-aec7-43c03eb10329" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                            <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                        </div>
                        <div style={{ position: 'relative' }}>
                            <a href="/petsandowners/gallery04"><img src="https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-azul-gris-rojo-1.JPEG?alt=media&token=7218e4cc-cad2-4560-bc7e-cf3552d731c8" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                            <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                        </div>
                        <div style={{ position: 'relative' }}>
                            <a href="/petsandowners/gallery05"><img src="https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-blanco-negro-2.JPEG?alt=media&token=a5a79ad5-6783-4081-be0f-2f8e191d0a61" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                            <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                        </div>           
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetsAndOwners
