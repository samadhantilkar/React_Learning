import rightArrow from "../../assets/right-arrow.svg"
import './profile.css'
import ProjectCart from "../../components/projectCart";
import './mainBody.css'
import YellowBorder from "../../components/YellowBorder";
import TechStackCard from "../../components/TechStackCard";
// import "../../components/TechStackCard.css";
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

  const react={name:"React",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"}
  const TailwindCss={name:"TailwindCSS",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/1920px-Tailwind_CSS_logo.svg.png"}
  const SpringBoot={name:"SpringBoot" ,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1024px-Spring_Boot.svg.png"};
  const Kubernets={name:"Kubernets" ,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1024px-Kubernetes_logo_without_workmark.svg.png"};
  const PostgreSql={name:"PostgreSql" ,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png"};
  const MySql={name:"MySql" ,image:"https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1280px-MySQL_logo.svg.png"};
  const Kafka={name:"Kafka" ,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Apache_Kafka_logo.svg/800px-Apache_Kafka_logo.svg.png"};
  const Redis={name:"Redis" ,image:"https://imgs.search.brave.com/XS2_ioNhmu1hSqFH0NMATKL9BX6O-YU9DJddRjctVXk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY0L0xvZ28tcmVk/aXMuc3Zn"};
  const ShadCN_UI={name:"ShadCN_UI" ,image:""};

  const techStachlist=[react,TailwindCss,SpringBoot,Kubernets,PostgreSql,MySql,Kafka,Redis];

  const projectList=[UberProjectObj,AirBnbProjectObj,linkedInProjectObj];
  // const fruits=["Apple","Kiwi","Mango","PineApple"]

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

                {/* <ul>
                  {fruits.map(fruit =>
                                  <li>{fruit}</li>
                              ) 
                  } 
                </ul> */}

                <section className="project-section">
                      <h2>These are my Projects</h2>
                    <p>I build high-quality Projects of all shapes and sizes</p>
                    <div className="project-container">
                      {/* <YellowBorder>
                        <ProjectCart {...UberProjectObj}/>
                      </YellowBorder>
                      <ProjectCart {...AirBnbProjectObj}/>
                      <ProjectCart {...linkedInProjectObj}/> */}

                      {projectList.map(project => <ProjectCart {...project} key={project.title}/>)}
                    </div>
                </section>
                
                <section className="techstack-section">
                        <h2>Technologies that I know</h2>
                        <p>I have listed some of my top skills here, I know more ofcourse</p>

                        <div className="techstach-container">
                          {techStachlist.map(techstack=> <TechStackCard {...techstack} key={techstack.name}/>)}
                        </div>

                </section>
            </main>
    )
}
export default MainBody;