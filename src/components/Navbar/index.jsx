import { Container } from "./style";
import {} from "react-router-dom";
import { useHistory } from "react-router-dom";

const NavBar = () => {

  const history=useHistory()


  return(
    <Container>
      Kenzie Hub
      <button
      onClick={()=>{history.push('/'); localStorage.clear()}}
      >
        Sair
      </button>
    </Container>
  )

}

export default NavBar