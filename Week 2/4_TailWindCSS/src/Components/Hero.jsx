import HeaderTestimonial from "./HeaderTestimonial";

function Hero(){
    return (
        <div>
            <div id="testimonial-conatainer">
                <HeaderTestimonial text="The best I've found"/>
                <HeaderTestimonial text="Way easier than Calendly"/>
                <HeaderTestimonial text="Okay, I'am hooked"/>
            </div>
            <h1 className="text-amber-400">
                The modern way to <span> find a time to meet</span>
            </h1>   

            <p>
                You'll love it for the flexible controls to keep upir calendar
                same, They'll love it for the ultra-convenient booking experience.
            </p>
            <button>Try SavvCal risk-free</button>
            <p>Join over 2000 happy customers</p>
        </div>
    )
}
export default Hero;