import React from "react"
const TaskList = ()=>{
    const [allProjects, setAllProjects] = React.useState([])

    React.useEffect(() => {
        async function getProjects(){
            const res = await fetch("https://task-node-api-rest.herokuapp.com/tasks")
            const data = await res.json()
            setAllProjects(data) //modifica el state para almacenar la data y usarla en la tabla

        }
        getProjects()
    }, [])

    return(
        <div className="card mt-3">
            <div className="card-header">
                
            </div>
            
            <div className="card-body">
                <h4> Project List</h4>
               
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Indicador Terminado</th>
                            <th>ID Proyecto</th>
                         
                        </tr>
                    </thead>
                    
                    <tbody>
                          
                       {allProjects.map((project) => (

                        
                        <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.name}</td>
                            <td>{project.done}</td>
                            <td>{project.projectId}</td>

                            
                        </tr>
                        ))}
                    </tbody>
                       
                </table>
                 </div> 
            <div className="card-footer text-muted">

            </div>
        </div>
    )
}
export default TaskList