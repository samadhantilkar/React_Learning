import "./TechStackCard.css";
function TechStackCard(props){
    return (
        <>
            <div className="techstack-card">
                <img src={props.image} alt={props.name} />
            </div>
        </>
    )
}
export default TechStackCard;