import { Container } from "./style";

const Header = ({ name, modulo }) => {
  return (
    <Container>
      <h1>{`Olá, ${name}`}</h1>
      <span>{modulo}</span>
    </Container>
  );
};

export default Header;