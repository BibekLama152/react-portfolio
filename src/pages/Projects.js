import React from 'react';

const projectData = [
  {
    title: "Lotto Game (Java GUI)",
    image: "/assets/LottoGame.png",
    description: "Created a GUI-based Lotto game using Java Swing (JOptionPane). Users input a number between 3 and 27, and the program randomly generates numbers to match. I developed the number logic, user interaction flow, and replay feature. Outcome: Strengthened GUI development and input validation."
  },
  {
    title: "Song Library Filter (Java Console App)",
    image: "/assets/SongDemo.png",
    description: "Built a song management system using enums and file input. Allowed filtering by genre, artist, and duration. I implemented the logic for file reading, filtering, and console display. Outcome: Gained deeper understanding of enums, file I/O, and modular programming."
  },
  {
    title: "Java Quiz Game (Test App)",
    image: "/assets/Test.png",
    description: "Developed a multiple-choice quiz game using Java and JOptionPane for GUI input. Users are prompted with questions and receive instant feedback. I handled answer checking, score tracking, and final result calculation. Outcome: Improved GUI interaction and conditional logic handling."
  }
];

const Projects = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {projectData.map((project, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '1rem',
            width: '300px',
            backgroundColor: '#f9f9f9'
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
            />
            <h3 style={{ marginTop: '1rem' }}>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
