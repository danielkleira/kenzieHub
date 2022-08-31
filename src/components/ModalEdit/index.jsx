import { Container, Modal, Header } from "./style";
import * as yup from "yup";
import {useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from '../../services/api'
import Input from "../Input";
import Button from '../Button'
import Select from '../Select'
import { toast } from "react-toastify";

const ModalEdit =({setEdit,techEdit,token})=>{
    const {title, id}= techEdit

    const addSchema =yup.object().shape({
        status: yup.string().required('Obrigatório')
    })


    const{
        register,
        handleSubmit,
        formState:{erros},
    }= useForm({resolver: yupResolver(addSchema)})

    const submitFunction= ({status})=>{
        const tecstatus={status}
        Api.put(`/users/techs/${id}`,tecstatus, {
            headers:{
                Authorization:  `Bearer ${token}`,
            },
        })
        .then((response) =>{
            setEdit(false);
            toast.success('Editado')
        })
        .catch((err)=>{
            toast.error('Algo deu errado')
        })
    }



    const submitDel = ()=>{
        Api.delete(`/users/techs/${id}`,{headers:{
            Authorization:  `Bearer ${token}`,
        },}).then((response) =>{
            setEdit(false);
            toast.success('Deletado')
        })
        .catch((err)=>{
            toast.error('Algo deu errado')
        })
    }
        
        return(
            <Container>
                <Modal>
                    <Header>
                        <h2>Tecnologia Detalhes</h2>
                        <p onClick={()=>setEdit(false)}>x</p>
                    </Header>

                    <form onSubmit={handleSubmit(submitFunction)}>
                        <Input
                        label={'Nome do projeto'}
                        name={'title'}
                        register={register}
                        placeholder={title}
                        />


                        <Select label='Status' register={register} name='status'>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </Select>

                        <Button type="submit"  submitButton width="204px">
                            Salvar alterações
                        </Button>

                        <Button type="button" onClick={submitDel} width="98px">
                            Excluir
                        </Button>

                    </form>
                </Modal>
            </Container>
        )
}
export default ModalEdit