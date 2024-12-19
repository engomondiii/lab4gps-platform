// StartupsSection.js
import React from 'react';
import styles from './StartUpSection.module.css';
import { StartupCard } from './StartupCard';
import LogoComponent from './LogoComponent'; 

// Import images and icons properly
import { FaEye, FaComment, FaSearch } from 'react-icons/fa';
import HerringLogo from '../../assets/HerringLogo.png'; 
import ChackanChaLogo from '../../assets/ChackanCha.png';
import ChackanChaImage from '../../assets/Images/ChackanChaImage.png';
import image77 from '../../assets/Images/HerringPhoto.png';
import image1 from '../../assets/Images/HerringPhoto.png';

 const StartupsSection = () => {
  const startups = [
    {
      title: "ChackanCha",
      description: `ChakanCha is the first startup created by Lab4GPS, aiming to improve the working conditions of tea pickers in Kenya and respect their livelihoods. This company seeks to transform the global value chain of the tea industry in the traditional global market, establishing a system for the economic independence of the local tea industry and creating a sustainable future.`,
      imageSrc: ChackanChaImage, // Main image of startup
      logoComponent: <LogoComponent logoSrc={ChackanChaLogo} alt="ChackanCha Logo" />,
      views: 0,
      comments: 0,
      likes: 0,
      viewIcon: <FaEye />,
      commentIcon: <FaComment />
    },
    {
      title: "Herring",
      description: `CareLink DTX leverages AI to deliver affordable...`,
      imageSrc: image77,
      logoComponent: <LogoComponent logoSrc={HerringLogo} alt="Herring Logo" />,
      views: 0,
      comments: 0,
      likes: 0,
      viewIcon: <FaEye />,
      commentIcon: <FaComment />
    },
    {
      title: "Herring",
      description: `CareLink DTX leverages AI to deliver affordable...`,
      imageSrc: image1,
      logoComponent: <LogoComponent logoSrc={HerringLogo} alt="Herring Logo" />,
      views: 0,
      comments: 0,
      likes: 0,
      viewIcon: <FaEye />,
      commentIcon: <FaComment />
    },
    {
      title: "ChackanCha",
      description: `ChakanCha is the first startup created by Lab4GPS...`,
      imageSrc: ChackanChaImage,
      logoComponent: <LogoComponent logoSrc={ChackanChaLogo} alt="ChackanCha Logo" />,
      views: 0,
      comments: 0,
      likes: 0,
      viewIcon: <FaEye />,
      commentIcon: <FaComment />
    }
  ];

  return (
    <div className={styles['body-section']}>
      <div className={styles['make-an-impact']}>GPS Startups</div>
      <div className={styles['text-wrapper']}>What is GPS Startups?</div>
      <p className={styles['purpose-driven']}>
        Purpose-driven companies founded by GPS who discover the secrets to solving 
        the world's problems and transform them into business models...
      </p>

      <div className={styles.frame}>
        <div className={styles.div}>Listed Startups</div>
        <div className={styles['search-wrapper']}>
          <FaSearch className={styles.img} />
        </div>
      </div>

      <div className={styles.startup}>
        {startups.map((startup, index) => (
          <StartupCard
            key={index}
            title={startup.title}
            description={startup.description}
            imageSrc={startup.imageSrc}
            logoComponent={startup.logoComponent}
            views={startup.views}
            comments={startup.comments}
            likes={startup.likes}
            // viewIcon and commentIcon are no longer needed 
            // inside StartupCard if you now use react-icons directly inside it.
          />
        ))}
      </div>
    </div>
  );
};

export default StartupsSection;