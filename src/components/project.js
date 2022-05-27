import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import axios from "axios";

export const Project = () => {
    const styles = style();
    const [project, setProject] = useState({});
    const [projectleg, setProjectleg] = useState("");
    const fetchProjects = async () => {
      const res = await axios.get('https://server-mariovebriyanto.herokuapp.com/api/project')
      console.log(res.data)
      setProjectleg(res.data.length)
      setProject(res.data)
      };
  
    useEffect(() => {
      fetchProjects();
    },[]);

    for(i=0;i<projectleg;i++){
    return(
      <p>
        <p>{project.project[i].nama}</p>
        <p>{project.project[i].deskripsi}</p>
        <p>{project.project[i].tools}</p>
      </p>
    );}
};

const style = createUseStyles({
  container: {
    padding: "2px 16px",
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    position: "relative",
    top: 0,
    left: 0,
  },
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    backgroundColor: "white",
    flex: "1 0 30%",
    margin: "1rem",
    padding: "1rem",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    textAlign: "center",
  },
});

export default Project;

// import React, { useState, useEffect } from "react"
// import { createUseStyles } from "react-jss";

// export const Skill = () => {
//     const styles = style();
    
//     const [project, newproject] = useState({})

    
// };

// const style = createUseStyles({
//     navbar2: {
//         listStyle: "none",
//         position: "relative",
//     },
//     navbar3: {
//         margin: "7px",
//     }
// });

// export default Skill;