import { Container } from "./styles";

const Button = ({children, whiteSchema,width, ...rest})=>{
    return(
    <Container whiteSchema={whiteSchema} width={width}  {...rest}>
        {children}
    </Container>
    )

};

export default Button