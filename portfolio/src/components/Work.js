
const Work = (props) => {

    const projectsData = [
        {name : "Olas Media",
         url: "Olas media.com",
         technologies:[
             {name:"Html",
              color:"orange",},
             {name:"Css",
              color:"blue"},
             {name:"JavaScript",
              color:"yellow"},
             {name:"Webflow",
              color:"blue"}
            ]},

        {name: "Burham center",
         url: "Burham center.org",
         technologies:[
            {name:"Html",
             color:"orange",},
            {name:"Css",
             color:"blue"},
            {name:"JavaScript",
             color:"yellow"},
            {name:"Webflow",
             color:"blue"}
           ]},

        {name: "Pacabol",
         url: "Pacabol.com",
         technologies:[
            {name:"Html",
             color:"orange",},
            {name:"Css",
             color:"blue"},
            {name:"JavaScript",
             color:"yellow"},
            {name:"Webflow",
             color:"blue"}
           ]}
];

    return (
        <div>
            <div className='Work'>
            <h1>Work Experience</h1>
            {
                projectsData.map((project) => (
                <div className='Project'>
                    <h1 key={project.name}>{project.name}</h1>
                    <img className='Project_img' ></img>
                    <a key={project.url} href='https://www.olasmedia.com'> {project.url} </a>
                    {
                        project.technologies.map((technology)=>(
                        //let fontColor = `'${technology.color}'`;
                        <ul className='Project_list'>
                        <li  key={technology.name} >{technology.name}</li>
                    </ul>
                        ))
                    }
                    
                </div>
                ))
            }
            
            </div>
        </div>
    )
}

export default Work;