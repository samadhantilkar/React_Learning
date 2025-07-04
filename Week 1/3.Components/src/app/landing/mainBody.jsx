import rightArrow from "../../assets/right-arrow.svg"
import './profile.css'
import ProjectCart from "../../components/projectCart";
import './mainBody.css'
import YellowBorder from "../../components/YellowBorder";
function MainBody(){

  const UberProjectObj={
    title:"Uber Clone Application", 
    description:"Uber Desc",         
    gitHubLink:"https://google.com", 
    imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png"
  }

  const AirBnbProjectObj={
    title:"AirBnb Hotel Booking Clone" ,
    description:"AirBnb Desc",
    gitHubLink:"https://google.com",
    imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1920px-Airbnb_Logo_B%C3%A9lo.svg.png"
  }

  const linkedInProjectObj={
    title:"The LinkedIn Microservice Project", 
    description:"LinkedIn Desc",
    gitHubLink:"https://google.com",
    imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1920px-LinkedIn_2021.svg.png"
  }

    return (
            <main>
                <h2 className='name-heading'>My name is samadhan</h2>
                <ol>
                  <li>I like react Programming</li>
                  <li>I like Vite also, Webpack not so much</li>
                  <li>Let's build some interactive react project</li>
                </ol>
        
                <a href="#" className='hire-me-button'>
                  <span>Hire Me</span>  
                  <img src={rightArrow} alt="Right Arrow" />
                </a>

                <section className="project-section">
                      <h2>These are my Projects</h2>
                    <p>I build high-quality Projects of all shapes and sizes</p>
                    <div className="project-container">
                      <YellowBorder>
                        <ProjectCart {...UberProjectObj}/>
                      </YellowBorder>
                      <ProjectCart {...AirBnbProjectObj}/>
                      <ProjectCart {...linkedInProjectObj}/>
                    </div>
                </section>
                
            </main>
    )
}
export default MainBody;