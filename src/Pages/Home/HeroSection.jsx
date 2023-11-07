export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section montserrat">
          <div className="hero--section--img">
        <img  id="hero--img--main" className="heor---picture" src="./img/cool_guy.jpg" alt="Hero Section" />
      </div>
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Take the first</span>{" "}
            steps to thrive</h1>
          <p className="hero--section-description hero--description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit?</p>
            <button className="btn btn-primary hero--bnt">BOOK A CHAT</button>
      </div>

    </section>
  );
} 
