import { Container, SelectContainer} from "./style";


export default function Select({children,label,register,name, ...rest}){
    return(
        <Container>
            <div>{label}</div>

            <SelectContainer {...register(name)} {...rest}>
                {children}
                
            

            </SelectContainer>

        </Container>
    )




}