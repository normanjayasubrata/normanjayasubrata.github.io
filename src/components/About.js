import React, { Component } from "react";

class About extends Component {
  render() {
    const about = (
      <div className="container">
        <h3 className="white-color">Who am I actually?</h3>
        <hr className="white-color" />
        <p className="white-color">
          I have graduated with a degree in Information Technology from Swiss
          German University. During my time at university I obtained work
          experiences and internships in developing an application and graphical
          design with a view companies in different fields and both in Indonesia
          and overseas. These were very useful in providing me with a good
          insight into working life with any companies.
        </p>

        <p className="white-color">
          Previously I work at IT company that specialized developing software
          for supply chain industry. With 3 years experience working in this
          company as Consultant/Analyst and Technical Support at once, I believe
          I have good knowledge regarding all aspect of general subject in
          information technology. I can work against deadlines and I have
          satisfactory technical skills. I pay good attention to detail and I am
          able to multi-task projects while remaining professional. I am also
          very enthusiastic and motivated.
        </p>
        <br />
        <br />
        <div className="white-color">
          <em>PS: FYI, I'm a ReactJS and ExpressJS enthusiast</em>
        </div>
      </div>
    );

    return (
      <section className="about" id="about">
        {about}
      </section>
    );
  }
}

export default About;
