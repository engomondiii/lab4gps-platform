import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/AboutSection.css";
import { FaHandsHelping, FaBuilding, FaUsers, FaTools, FaNetworkWired,  } from "react-icons/fa";

const AboutSection = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("why");

  // Extract the `tab` query parameter from the URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [location.search]);
  const content = {
    why: (
      <div className="why-content">
        <div className="why-main">
          <div className="why-image-container"></div>
          <div className="why-main-text">
            <h3>Purpose: Solving Global Problems through Education, Research, and Practice</h3>
            <p>Problem Solving through Education, Research, and Practice</p>
            <p>
              Lab4GPS is a community dedicated to bringing innovation to local and global communities
              through education, research, and practical application. Lab4GPS plays a pivotal role in
              transforming the resolution of global problems into a scalable and sustainable business
              model, enabling individuals to joyfully engage in altruistic endeavors.
            </p>
            <p>
              We refer to individuals who dedicate their lives to solving specific issues as Global
              Problem Solvers (GPS).
            </p>
            <p>
              Lab4GPS is responsible for helping people happily perform good deeds that solve the
              world's problems. People who have set solving a specific problem as their life's purpose
              are called Global Problem Solvers (abbreviated as GPS).
            </p>
            <p>
              GPS discovers the secrets to solving the world's problems and creates products or
              services based on them.
            </p>
          </div>
        </div>
        <h4>Slogan</h4>
        <p>
          <strong>We Solve Global Problems for Others:</strong> Under the slogan "We solve global
          problems for others," Lab4GPS is dedicated to addressing various global issues. Our goal
          is not just to solve problems but to contribute to creating a better world.
        </p>
        <p>Our goal is not simply to solve problems, but to contribute to creating a better world.</p>
        <h4>Love in Action</h4>
        <p>
          <em>“Love in action”</em> is the principle at the heart of all activities at Lab4GPS. We
          practice love as concrete actions, not just emotions.
        </p>
        <p>Love is not just a feeling, but is practiced through concrete actions.</p>
        <h4>Business as Love</h4>
        <p>
          <em>“Business as love”</em> summarizes the business philosophy of Lab4GPS. We view
          business not just as a pursuit of profit but as a means of practicing love.
        </p>
        <p>We see business as a means of practicing love, rather than simply pursuing profit.</p>
      </div>
    ),
    
    
    
    

who: (
  <div className="who-content">
    <div className="who-main">
      <div className="who-text">
        <h3>Who We Are</h3>
        <p>
          We are a community focused on solving global issues through education, research, and practice.
          We firmly believe that 'Solving others' problems is love in action.'
        </p>
        <p>
          To pursue this mission, we amalgamate the specialized knowledge and strengths of each individual
          to form a community, tackling challenging tasks that are impossible to achieve alone.
        </p>
        <blockquote>
          Lab4GPS is a research institute that aims to solve world problems under the slogan of 'Love in Action'.
          We believe that 'solving other people's problems is the practice of love.'
        </blockquote>
      </div>
      <div className="who-image-container"></div>
    </div>

    <h4>Our Team</h4>
    <div className="team-list">
      <div className="team-item">
        <FaHandsHelping className="team-icon" />
        <p><strong>IWL Partners:</strong> As the primary sponsors of Lab4GPS, they provide the financial support necessary for our research and innovation projects. They support GPS in developing sustainable solutions and offer strategic direction for global problem-solving.</p>
      </div>
      <div className="team-item">
        <FaBuilding className="team-icon" />
        <p><strong>GPS Startups:</strong> Purpose-driven companies founded by GPS who discover the secrets to solving the world's problems and transform them into business models. They lead the way in developing innovative and sustainable solutions to address social issues.</p>
      </div>
      <div className="team-item">
        <FaUsers className="team-icon" />
        <p><strong>GPS PD (Program Development):</strong> A team of experts who develop GPS programs and train GPS. They design educational programs and training courses to help GPS acquire the necessary skills and knowledge.</p>
      </div>
      <div className="team-item">
        <FaTools className="team-icon" />
        <p><strong>GPS Specialists:</strong> Experts who assist GPS Startups and Lab4GPS members by leveraging their Purpose-Specific Skill Sets. They provide technical and strategic support needed for GPS to achieve their goals, based on diverse expertise.</p>
      </div>
      <div className="team-item">
        <FaBuilding className="team-icon" />
        <p><strong>Lab4GPS Operations Team:</strong> Individuals who manage Lab4GPS through tasks such as organizational operations, human resources, space provision, channel expansion, toolbox installation, and digital transformation. They create an efficient work environment to ensure optimal performance from all team members.</p>
      </div>
      <div className="team-item">
        <FaNetworkWired className="team-icon" />
        <p><strong>Shared Service Center:</strong> A future center that will provide specialized services such as startup incubation, legal services, and accounting services to Lab4GPS members. By offering highly specialized services, it helps GPS grow and make a greater impact.</p>
      </div>
    </div>

    <h4>Who We Serve</h4>
    <div className="serve-section">
      <div className="serve-item">
        <div className="serve-image global-community"></div>
        <div className="serve-text">
          <p><strong>Global Community:</strong> The ultimate beneficiaries of the positive changes brought about by purpose-driven business. Thanks to the innovative and sustainable solutions developed by GPS and GPS Startup Teams supported by Lab4GPS, their quality of life is improved, and various social problems are addressed, with love put into action.</p>
        </div>
      </div>
      <div className="serve-item">
        <div className="serve-image individuals"></div>
        <div className="serve-text">
          <p><strong>Individuals Aiming to Solve Problems (GPS/GPS Startups):</strong> GPS and GPS Startup Teams are individuals passionate about dedicating their lives to solving the world's problems, and we support them in realizing their vision and goals.</p>
        </div>
      </div>
      <div className="serve-item">
        <div className="serve-image stakeholders"></div>
        <div className="serve-text">
          <p><strong>Stakeholders and Investors:</strong> We serve and stakeholders who resonate with our vision and goals and wish to invest their time and resources with love. They not only provide financial support but also strategic advice and networks to ensure successful global problem-solving.</p>
        </div>
      </div>
    </div>
  </div>
),

what: (
  <div className="what-content">
    <h3>Mission: Empowering GPS through Education, Research, and Practice</h3>
    <p>Supporting GPS through education, research, and practice</p>

    <div className="development-program">
      <i className="development-icon" />
      <div className="program-text">
        <h4>Development of GPS Programs</h4>
        <p>
          The GPS program combines Christian values with entrepreneurial spirit to train the next
          generation of global leaders (GPS) to address global issues.
        </p>
        <p>
          Students from different academic disciplines collaborate to solve problems. Based on the
          principle that "solving other people's problems is an act of love," the GPS program
          emphasizes real-world problem-solving experiences and broader understanding of global
          challenges.
        </p>
      </div>
    </div>

    <div className="program-gallery">
      {/* 5 images styled as a gallery */}
      <div className="gallery-image image-1" />
      <div className="gallery-image image-2" />
      <div className="gallery-image image-3" />
      <div className="gallery-image image-4" />
      <div className="gallery-image image-5" />
    </div>

    <div className="training-program">
      <div className="training-image" />
      <div className="training-text">
        <h4>Training GPS Through the GPS Program</h4>
        <p>
          Lab4GPS trains the next generation of Global Problem Solvers (GPS) through educational
          programs, helping students discover their identity and build a roadmap for success.
        </p>
        <p>
          Emphasizing 'learning through practice,' students apply their knowledge to real-world
          problems, preparing them to be trusted leaders in solving global challenges.
        </p>
      </div>
    </div>

    <h4>Current State</h4>
    <div className="current-state">
      <div className="current-item">
        <div className="current-image chakancha" />
        <p>
          <strong>Chakancha:</strong> The first startup created by Lab4GPS, aiming to improve
          working conditions of Kenyan tea pickers while ensuring sustainable practices in the tea
          industry.
        </p>
      </div>
      <div className="current-item">
        <div className="current-image momma" />
        <p>
          <strong>Momma:</strong> A startup helping foreigners learn the Korean language and
          culture, facilitating economic independence through sponsor-employer relationships.
        </p>
      </div>
      <div className="current-item">
        <div className="current-image wah" />
        <p>
          <strong>Wow (WAH):</strong> Supporting individuals to discover their purpose in life,
          fostering a purpose-driven future globally.
        </p>
      </div>
      <div className="current-item">
        <div className="current-image chakan-cashmere" />
        <p>
          <strong>Chakan Cashmere:</strong> Advocating fair wages and sustainable practices in
          Mongolia through eco-friendly products made of recycled cashmere.
        </p>
      </div>
    </div>
  </div>
),






    where: (
      <div className="where-content">
        <h3>Vision: Pioneering the Path to a Better World through Education, Innovation, and Collaboration</h3>
        <p>
        Leading a better world through education, innovation and collaboration

        </p>
        <p>
        Lab4GPS envisions a future where education, innovation, and collaboration converge to solve the world's problems. 

We aim to establish an  online university and  a platform that connects those with problems to those who can solve them ,  creating a comprehensive problem-solving ecosystem that supports global problem-solving.
        </p>
        <p>
        Lab4GPS envisions a future where the world’s problems are solved through education, innovation, and collaboration.
We aim to create a comprehensive ecosystem that supports global problem solving by establishing a platform and an online university that connects people with problems with people who can solve them .


        </p>
        <h4>Univ 4.0</h4>
        <p>
        Univ 4.0 expands the GPS program online, making it accessible to students worldwide. This platform offers the GPS curriculum, equipping students with the skills and knowledge necessary to address global issues. By providing a robust educational foundation, Univ 4.0 empowers the next generation of global leaders to develop innovative solutions and drive sustainable change.


        </p>
        <p>
        Univ 4.0 extends the GPS program online, making it accessible to students around the world.
The platform provides the GPS curriculum with the skills and knowledge needed to solve global problems.
By providing a strong educational foundation, Univ 4.0 enables the next generation of global leaders to develop innovative solutions and drive sustainable change.        </p>
        <h4>SNS 4.0</h4>
        <p>
        SNS 4.0 is an online hub where people with problems can meet people who can solve them.
The platform promotes collaboration by sharing ideas and solutions to solve global problems and promoting collaborative projects. 

Each stage is gamified, providing clear goals and rewards, and participants gradually gain knowledge and skills by solving real-world problems. 

You can acquire and challenge yourself with increasingly complex problems.        </p>
        <p>
        SNS 4.0 is an online hub where people with problems can meet people who can solve them.
The platform promotes collaboration by sharing ideas and solutions to solve global problems and promoting collaborative projects. 

Each stage is gamified, providing clear goals and rewards, and participants gradually gain knowledge and skills by solving real-world problems. 

You can acquire and challenge yourself with increasingly complex problems.



        </p>
        
        <h4>Our Vision</h4>
        <p>
        Our vision includes training the next generation of global leaders essential for addressing these issues and establishing companies focused on problem-solving. We aspire to play a leading role in creating a better world with global consumers. 

Through our programs and support, the GPS we nurture will solve global problems and generate Joy, Money, and Love, positively impacting the world. They will lead research and innovation to address various global issues, collaborating with the global community to seek sustainable solutions. We will continuously support them in contributing to a better future by solving diverse world problems.


        </p>
        <p>
        We aim to build a company focused on problem solving and to develop the next generation of global leaders who are essential to solving the world's problems.
Through our programs and support, GPS will solve the world's problems, create joy, money, love, and make a positive impact on the world.


        </p>
      </div>
    ),
    how: (
      <div className="how-content">
        <h3>Core Values: Love, Courage, and Wisdom</h3>
        <p>Love, Courage, and Wisdom
        </p>
        <h4>Love</h4>
        <p>
        At Lab4GPS, love equates to solving problems for others with genuine care and compassion. Inspired by the teachings of Jesus Christ, this principle drives our commitment to addressing societal needs through innovation, emphasizing unconditional and sacrificial love, empathy, and forgiveness.
        </p>
        <p>
        Love is true concern and compassion. 

It means solving other people's problems  .

        </p>
    
        <h4>Courage</h4>
        <p>
        Courage signifies a commitment to pioneering new frontiers despite uncertainties and risks. Inspired by Jesus' bravery in confronting oppositions and making sacrifices, we invest profoundly in the dreams of innovators, enabling impactful transformations that extend beyond technical metrics.
        </p>
        <p>
        Courage is the ability to endure uncertainty and risk. 

It signifies a commitment to pioneering new territories.
        </p>
    
        <h4>Wisdom</h4>
        <p>
        Leveraging collective knowledge and experience to foster sustainable and ethical advancements. Inspired by the teachings and discernment of Jesus, we navigate complex challenges with insight and understanding, making balanced decisions for the greater good.
          </p>
        <p>
        Wisdom is having insight and understanding of complex problems. 

and  make balanced decisions.
        </p>
    
        <p>
        At Lab4GPS, our Core Values ​​Love, Courage, and Wisdom compose the framework of our purpose.  These values ​​guide us in nurturing innovative enterprises, transforming technologies into thriving solutions, and fostering lasting positive change. 

Through Love, Courage, and Wisdom, Lab4GPS is committed to empowering innovators to address global challenges and contribute to a better world.
        </p>
        <p>
        At Lab4GPS, our core values ​​of Love, Courage, and Wisdom frame our purpose.
These values ​​guide us as we foster innovative companies, transform technology into thriving solutions, and foster lasting positive change.
Lab4GPS is committed to helping GPS solve global problems and contribute to a better world.


        </p>
    
        <h4>Scripture Verses</h4>
        <blockquote>
          <strong>John 13:34</strong><br />
          “A new command I give you: Love one another.  As I have loved you, so you must love one another.”        </blockquote>
        <p>
        A new commandment I give to you, that you love one another; just as I have loved you, that you also love one another.


        </p>
        <p>
        This verse embodies the core spirit of Lab4GPS. Following Jesus' teachings, we practice love and dedicate ourselves to solving others' problems.
        </p>

        <p>
        We follow the teachings of Jesus and practice love, dedicating ourselves to solving other people's problems.
        </p>
    
        <blockquote>
          <strong>Romans 8:28</strong><br />
          “And we know that in all things God works for the good of those  who love him, who have been called according to his purpose.”
        </blockquote>
        <p>
        And we know that all things work together for good to those who love God, to those who are the called according to his purpose.

</p>
<p>
This verse inspires the vision and mission of Lab4GPS. As those who love God and are called according to His purpose, we believe that all our efforts will work together for good.


</p>
<p>
We believe that as people who love God and are called according to His purpose, all our efforts will be for good.


</p>
      </div>
    ),
    
    
    
    
    

  };

  // Render content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "why":
        return content.why;
      case "who":
        return <p>{content.who}</p>;
      case "what":
        return <p>{content.what}</p>;
      case "where":
        return <p>{content.where}</p>;
      case "how":
        return <p>{content.how}</p>;
      
      
      
      default:
        return null;
    }
  };


  

  return (
    <div className="about-container">
       {/* Description */}
       <div className="about-description">
        <h2>About Lab4GPS</h2>
        <p>
          Lab4GPS is committed to solving global challenges through practical love, collaboration,
          and innovative solutions. Discover our mission, vision, purpose, and the core values that guide us.
        </p>
      </div>
      {/* Tabs */}
      <div className="tabs">
        {["why", "who", "what", "where", "how"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="tab-content">{content[activeTab]}</div>
    </div>
  );
};

export default AboutSection;

