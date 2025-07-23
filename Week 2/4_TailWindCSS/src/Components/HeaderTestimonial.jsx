import starIcon from "../assets/star.svg"

function HeaderTestimonial({text,starsCount}){
    return (
        <div>
            <div id="stars">
                {Array.from({length:starsCount}).map((_,index)=>(
                    <img src={starIcon} key={index}  alt="Star incon" />
                ))}
            </div>
            <p>"{text}"</p>
        </div>
    )
}
export default HeaderTestimonial;