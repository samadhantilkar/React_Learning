import './projectCart.css'
import GitHubIcon from '../assets/github.svg';
function ProjectCart(props){
    return (
        <div className="project-cart">
            <div className="img-wrapper">
                <img src={props.imgUrl} alt="" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.gitHubLink} className='img-button' target='_blank'>
                <img src={GitHubIcon} alt={"Project Img" + props}/>
                <span>View on GitHub</span>
            </a>
        </div>
    )
}

export default ProjectCart;