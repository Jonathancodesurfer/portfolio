



const Work = (props) => {

    let logo;

    const projectsData = [
        {name : "Olas Media",
         url: "https://olasmedia.com",
         imgSrc: '/olaslogo.png',
         technologies:[
             {name:"Html",
              color:"orange",},
             {name:"Css",
              color:"blue"},
             {name:"JavaScript",
              color:"rgb(243, 224, 80)"},
             {name:"Webflow",
              color:"blue"}
            ]},

        {name: "Burham center",
         url: "https://burnhamcenter.org",
         imgSrc:  '/burnhamlogo.jpeg',
         technologies:[
            {name:"Html",
             color:"orange",},
            {name:"Css",
             color:"blue"},
            {name:"JavaScript",
             color:"rgb(243, 224, 80)"},
            {name:"Webflow",
             color:"blue"}
           ]},

        {name: "Pacabol",
         url: "https://pacabol.com",
         imgSrc: '/pacabol.png',
         technologies:[
            {name:"Html",
             color:"orange",},
            {name:"Css",
             color:"blue"},
            {name:"JavaScript",
             color:"rgb(243, 224, 80)"},
             {name:"Webflow",
             color:"blue"}
    
           ]},

           {name: "This Site",
         url: "",
         imgSrc: '/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg',
         technologies:[
            {name:"Html",
             color:"orange",},
            {name:"Css",
             color:"blue"},
            {name:"JavaScript",
             color:"rgb(243, 224, 80)"},
             {name:"React",
             color:"blue"}
    
           ]}
];

    return (
        <div className='Work-wrapper'>
            <h1 className='Work-heading'>Work Experience</h1>
            <div className='Work'>
            
            {
                projectsData.map((project) => (
                <div className='Project'>
                    <h1 key={project.name}>{project.name}</h1>     
                    <img src={project.imgSrc} className='Project_img' ></img>
                    <a key={project.url} href={project.url}> {project.url.slice(8)} </a>
                    <h2 key={project.name}>Technologies:</h2> 
                    <div className="List_flex-wrapper">
                    {
                        project.technologies.map((technology)=>(
                            
                                <ul className='Project_list'>
                                    <li  key={technology.name} >{technology.name}</li>
                                </ul>
                        ))
                    }
                    </div>
                </div>
                ))
            }
            
            </div>
        </div>
    )
}

export default Work;