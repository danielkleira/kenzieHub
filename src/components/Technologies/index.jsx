import { Container} from "./style";
import { ListContainer } from "../Technologies/style";
import { HeaderContainer } from "../Technologies/style";
import CardTechnologie from "../Card";
import {MdAdd } from "react-icons/md";

const TechnologieList = ({ setTechEdit, setAdd, technologies, setEdit }) => {
  return (
    <Container>
      <HeaderContainer>
        <h2>Tecnologias</h2>
        <button onClick={() => setAdd(true)}>
          <MdAdd />
        </button>
      </HeaderContainer>
      <ListContainer>
        <ul>
          {technologies.map((tech) => (
            <li key={tech.id}>
              <CardTechnologie
                setTechEdit={setTechEdit}
                setEdit={setEdit}
                tech={tech}
              />
            </li>
          ))}
        </ul>
      </ListContainer>
    </Container>
  );
};

export default TechnologieList;