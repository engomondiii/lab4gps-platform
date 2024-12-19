import React from 'react';
import styles from '../../styles/ProjectsSection.module.css';
import { FaSearch } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  // Define your project data here
  const projects = [
    {
      title: "ChackanBridge",
      description: `Chakan Bridge is a platform that connects Kenya's IT talent with Korean companies. By verifying skill levels and providing language and cultural adaptation support, it offers tailored IT professionals to meet the needs of Korean businesses. Chakan Bridge aims to address Kenya's severe youth unemployment issue and Korea's labor shortage caused by a declining population.`,
      imageSrc: "https://s3-alpha-sig.figma.com/img/17d1/104b/0d4cd923c3fd503d6653eeff4ae35164?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0Vg4kDxWAJP4b8Zm90pKfYBMeY-V6p3yTDRuqElKQKa99ezmiOvqH3PcJejz~kgUx4FrTaX-u5APq~NWOKIYOjVh7EXodvOku4mG0GftkE6nhcaiEEyI6LzG87EOjK9N4uR2~AfYTok47iWZyuomjojS3Dg8qzGvXDFywqDBCV9fVvRbJ3Saoqj90hJAzuY3YjN6s65WAIh8DlAL3r2DeHFVZPGlo9o6nEWJ2EhYnrjT~i380pDNvdCCmFswjGlbNg3l~mmAuRBkVlhPiXKOQbYBBsmUwhzZxfW3sgjwWki8vbQuL2Ym5lboyhmCAkTRIRcwyXzALCY3bZ7NLh51Q__",
      views: 2,
      comments: 0,
      likes: 2
      // no tag for this example
    },
    {
      title: "JuaSun",
      description: `Jua Sun aims to establish solar power plants in the Barasandu region and tea factories to reduce CO₂ emissions and protect forests through sustainable energy solutions. Ultimately, Jua Sun envisions creating an eco-friendly power grid across Africa's tea-producing regions, driving growth and fostering development in areas isolated from traditional energy infrastructure.`,
      imageSrc: "https://s3-alpha-sig.figma.com/img/99fa/6c27/92f10329fd379c0c1db8dd8f1bd0b4c0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4klEP4GOAJXTqZoBAooUbueC6ySXRjK9KhIcyNrn4rM-04SjompU~66Nf6qKN3F7uwtRQtgcUaINN51wq-W3sPm831Nh2k7NjlBoMyjebd51tOpbFp9xQutnl8~1F-SfTO0zaWlcC5o4cIPDHBb2pvy50289eDgiRHq3IguL04yqI7BrPJJPKWT4xolI~wu~NVu7nXwv10YzIXMx742eC6AKQzNjsw9Z09r2SZGxQ916jiiHqOUFD8mVmZv1lu~8ptAcOPGz523ixB9~RhH-VicqSfOjljNvitFTgenRKRmJW0k1Au8BSx89zJoIy4z-WavsJwctXcaMCa1TwykiQ__",
      tagText: "Let Your light shine!",
      views: 0,
      comments: 0,
      likes: 8
    },
    {
      title: "WAH",
      description: `The WAH team is committed to guiding individuals struggling to find their life purpose. By helping them discover their goals, WAH supports people worldwide in leading purpose-driven lives and working towards a brighter, more meaningful future.`,
      imageSrc: "https://s3-alpha-sig.figma.com/img/43ae/927a/ebf3ab256009c916d877d8690e723c32?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g0vH5CTU4wjpW7DBQLSKPYeIX-IbNpnDFKBGQeYnsQeHc57RPzawYuVr48jrv22xaJCC5GAAyJSU~D-Uqcl~bu-rVXTcS3A8csO-6k4NQ4VWdch5uPImXKpXg284oviRV9r20HUrwFxV-1UcVISjA9k08heRBv~JMF3OL57keGH7wsCkQyuIN1OHo54ATMF8nblOHV9qJ89a0qTrbONgGA5oGl~VxxnVXDcCNJmY0L3ugMJBFzy5SjLUJHUT3SXLOKHETDxG72OMKoP8syBq0a-9xAGOOKWQ2OM5fWfUSuHqKfoPqUHUBSKL6o6mBluhJxS0gXFeR6P3dA0kAXHTFg__",
      tagText: "Purpose Driven Life",
      views: 0,
      comments: 0,
      likes: 0
    },
    {
      title: "Cashmere",
      description: `Working conditions in Mongolia’s garment industry are poor, and quality cashmere is costly. The solution improves workers’ conditions through transparent transactions, fair compensation, and eco-friendly processes. By selling directly to consumers, it lowers prices and ensures ethical production.`,
      imageSrc: "https://s3-alpha-sig.figma.com/img/9861/11df/f5eded5fae8485f1885beb1a048a82f3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R~e7PCJtgd3XDuVvMPHm9cl3zn1UcsfnADNhhyF9HMMd0izISMchuUXbLoHDiS8GIIa4ss96BPR5QSYeRLdsAZh6hWHWqhpuS1ByaMq8GUBKontQaahfbcugrvhC~W3oAkvCJgmYyhthJgMT4LapM13OWiQCo1qUXccCBGJhWYzzJtsKxjYQ-daNNnvHDC47122-2oHPGXjYw8UctQre3bp0bjeuU4BbD-Rq7ENd0nAXTbM5iNUzNt5EGexcV3B-ds7vNugtigaN2q83kUip5kFQBOXPmUhbB70nMAFm9yAM~5VrRFioSlJ1h09FnoJzfMKOg7VdNsIbh~BMs3pn6A__",
      tagText: "Sustainable Fashion",
      views: 0,
      comments: 0,
      likes: 0
    },
    {
      title: "Momma",
      description: `Momma is a startup dedicated to helping foreigners learn the Korean language, culture, and job environment with ease. By building strong connections between foreigners, Korean sponsors, and employers, Momma creates employment opportunities, empowering individuals to achieve sustainable economic independence.`,
      imageSrc: "https://s3-alpha-sig.figma.com/img/20ac/973f/7ba188758d7f7d2eb3db7ea350465464?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z6K0jF0-l4MlOccOqFHzLv~MaHbb17-j3gH~SjorveW5JodvLyDnIH1AzDrPNL5thh3IwfI5tGf9uL5KrVkJ~ZLHX75tdlo9~SPEXRwdfFG-fWpW1UgMMO6Xpn40iRrWsxLJh51iS-W~GTNR-FD35wtppkNohc39Rln4bOOL0cu0czrdu9Av~T6rMtzFSBoKWVizCfS6vd1yYv4Gho0dGzuCL2U2XTsSb6iAQDKWpDb38fbMGqiExvxbYmdGwsjWPoIHuloQ4ZMOE~89Jx7xRczOGIE7B4q07BZR0kbL7B9fcvZT86bqvQxTBQ4FJjSr2Hh5hcSPSVfW7zym4VxQpQ__",
      tagText: "Just Mimic!",
      views: 0,
      comments: 0,
      likes: 0
    },
    {
      title: "Naya",
      description: `Naya is a project built on the value of being "One and Only," empowering individuals to showcase their unique and distinctive designs. By nurturing design freelancers, Naya aims to help people realize their creativity and achieve economic independence.`,
      imageSrc: "https://s3-alpha-sig.figma.com/img/d8cd/430d/43e5df9837be5cf2d3d4c4ce6fbde754?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKz6nELpXCicWRa6R7fiBQns9XZtlqE0HAyUV7Uo-5PoTMD~089-gUy86xX0zeEddshGfqgq7PU1Kz~NrY3Jwoc8V1UfvMjqaiNhKbsm8-OmYyzNDsWyuJlOmJjrOeKL4hn-EmlUS6TocFSBpcrFSbm4feqS4qHQu8Tam0y5ZTRVzqa3oT7ScX8Nmdd1CEVgfnAkAzwQiMfcVApVzzCVat4m5XYGD4TJR5qc5MNHrdDubwEwx~9CIHqyH~1pSxbWjspNFAZfdaef-rvkaDjz9IzZvHMyV0reBWOpsl0BRAzRyx5pEW~UDu6utmDg6Q2hF1hsFK6XykbZup4K7yGHMw__",
      tagText: "Just Mimic!",
      views: 0,
      comments: 0,
      likes: 0
    }
  ];

  return (
    <div className={styles.bodySection}>
      <b className={styles.makeAnImpact}>GPS Projects</b>
      <div className={styles.gpsProjectParent}>
        <b className={styles.gpsProject}>{projects.length} Gps Project</b>
        <div className={styles.searchWrapper}>
          <FaSearch className={styles.searchIcon} />
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            tagText={project.tagText}
            views={project.views}
            comments={project.comments}
            likes={project.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
