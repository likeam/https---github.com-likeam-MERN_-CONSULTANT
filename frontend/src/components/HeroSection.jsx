import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/office.jpg" alt="resturent" />
      <div className="item">
        <h3>Business Risk </h3>
        <div>
          <h1>Your Business Risk Assesmnts</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the samll
            details!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
