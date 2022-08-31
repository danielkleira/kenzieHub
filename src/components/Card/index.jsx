import { Container } from "./style";

const CardTechnologie=({tech, setEdit, setTechEdit})=>{


    const {title,status}=tech

    return(

        <Container
        onClick={()=>{
            setTechEdit(tech);
            setEdit(true)
        }}>
            <h2>{title}</h2>
            <span>{status}</span>
            
        </Container>
    )

}

export default CardTechnologie