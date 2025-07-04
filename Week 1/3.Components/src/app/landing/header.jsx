import viteImg from '../../../public/vite.svg';
function Header(){
    
    return (<header>
                <img src={viteImg} style={{width:"4rem", height:"4rem"}} alt="Vite Image" />
                <h1 className='heading'> Hi, I am a React <span >Developer</span></h1>
            </header>);
}
export default Header;