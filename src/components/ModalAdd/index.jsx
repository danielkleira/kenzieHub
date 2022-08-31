import { Container, Modal, Header } from "./style";
import * as yup from "yup";
import {useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from '../../services/api'
import Input from "../Input";
import Button from '../Button'
import Select from '../Select'
import { toast } from "react-toastify";

const ModalAdd =({setAdd,token})=>{

    const addSchema =yup.object().shape({
        title: yup.string().required('Obrigatório'),
        status: yup.string().required('Obrigatório')
    })


    const{
        register,
        handleSubmit,
        formState:{errors},
    }= useForm({resolver: yupResolver(addSchema)})

    const submitFunction= (data)=>{
        
        Api.post('/users/techs',data, {
            headers:{
                Authorization:  `Bearer ${token}`,
                
            },
        })
        .then((response) =>{
            setAdd(false);
            toast.success('Adicionado')
        })
        .catch((err)=>{
            toast.error('Algo deu errado')
        })
    }
        
        return(
            <Container>
                <Modal>
                    <Header>
                        <h2>Cadastrar Tecnologia</h2>
                        <p onClick={()=>setAdd(false)}>x</p>
                    </Header>

                    <form onSubmit={handleSubmit(submitFunction)}>
                        <Input
                        label={'Nome'}
                        name={'title'}
                        register={register}
                        placeholder='Digite o nome do seu projeto'
                        />

                        <p>{errors.title?.message}</p>

                        <Select label={'Selecionar Status'} register={register} name='status'>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                        </Select>

                        <Button whiteSchema
                        type='submit'
                        disableButton={errors.title}
                        width= '320px'
                        >
                            Cadastrar tecnologia
                        </Button>
                    </form>
                </Modal>
            </Container>
        )
}

export default ModalAdd





