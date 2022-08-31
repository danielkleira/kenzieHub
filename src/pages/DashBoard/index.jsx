import { Redirect } from "react-router-dom"
import { Container, ContentContainer } from "./style"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import Api from '../../services/api'
import ModalAdd from "../../components/ModalAdd"
import ModalEdit from "../../components/ModalEdit"
import Header from "../../components/Header"
import NavBar from "../../components/Navbar"
import TechnologieList from "../../components/Technologies"

const Dashboard = () => {

    const params= useParams()

    const [technologies , setTechnologies]=useState([]);
    const [name , setName]=useState('');
    const [module , setModule]=useState('');
    const [edit , setEdit]=useState(false);
    const [add , setAdd]=useState(false);
    const [techEdit, setTechEdit] = useState({});
    const [token, setToken]= useState(localStorage.getItem('@KenzieHub:token'));
    
    

    useEffect(()=>{
        Api.get(`users/${params.user_id}`)
        .then((response) => response.data)
        .then((data) => {
        setTechnologies(data.techs);
        setName(data.name);
        setModule(data.course_module);
      })
      .catch((err) => console.log(err));
  },);

  

  
    if(!localStorage.getItem('@KenzieHub:token')){
        return(
            <Redirect
            to={`/`}
            />
        )
    }
    

    return(
        <>
        <Container>
            {add && <ModalAdd setAdd={setAdd} token={token}/>}
            {edit && (<ModalEdit setEdit={setEdit} techEdit={techEdit} token={token}/>
            )}
            
           
            <ContentContainer>
            <NavBar/>
            </ContentContainer>
            
            <hr/>
            <ContentContainer>
                <Header name={name} modulo={module}/>
            </ContentContainer>
            
            <hr/>
            
            <ContentContainer>
                <TechnologieList 
                setTechEdit={setTechEdit}
                technologies={technologies}
                setEdit={setEdit}
                setAdd={setAdd}
                />
            </ContentContainer>
            </Container>
            </>
        )
}

export default Dashboard