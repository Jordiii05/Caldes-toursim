function Intro() {
  return (
    <section className="introSection" id="intro">
      <div className="introLeft">
        <p className="introParagraph">
          Caldes de Malavella it's a small and charming city with over 2,000 years of history, iconic Roman monuments, and prestigious thermal spas. 
          The city also boasts numerous trails and forests for nature lovers.
        </p>
        <video className="introVideoPlayer" controls preload="metadata" src="/multimedia/caldesvideo.mp4"/>
      </div>

      <div className="introRight">
        <img className="introMapImage" src="/multimedia/caldesmapa.jpg" alt="Map of Caldes de Malavella"/>
      </div>
    </section>
  );
}

export default Intro;