import { Container } from "./style"
import Input from "../../components/Input"
import Button from '../../components/Button'
import Select from "../../components/Select"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Api from "../../services/api"
import { toast } from "react-toastify"
import { useHistory, Redirect } from "react-router-dom";
import { Link } from "react-router-dom"


function Cadastro(){

    const schema= yup.object().shape({
        name: yup.string().required('Campo Obrigatório!'),
        email: yup.string().email('Email inválido').required('Campo obrigatório!'),
        password: yup.string().min(6,'Minimo de 6 digitos').required('Campo obrigatório!'),
        passwordConfirm: yup.string().oneOf([yup.ref('password')],'Digite a mesma senha').required('Campo obrigatório!'),
        course_module: yup.string().required('Campo obrigatório!'),
    })


    const{
        register,
        handleSubmit,
        formState:{errors},
    }= useForm({resolver:yupResolver(schema)});

    const history= useHistory()
    

    const onSubmitFunction=(data)=>{
        const{course_module,name,email,password}=data
        const user={
            course_module,
            name,
            email,
            password,
            bio:' ',
            contact:' ',
        };
        Api.post('/users/',user)
        .then((response)=>{toast.success("Sua conta foi criada")
        return history.push('/') 
        })
        .catch((err)=>toast.error('Algo deu errado'))

    }

    if(localStorage.getItem('@KenzieHub:token')){
        return(
            <Redirect
            to={`/dashboard/:user_id`}
            />
        )
    }


    return(
    <Container>
         <header><h2>KenzieHub</h2> <button onClick={()=> history.push('/')}>Voltar</button> </header>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <h4> Rapido e grátis, vamos nessa</h4>
            
            <Input
            register={register}
            name='name'
            label='Nome'
            placeholder='Digite aqui seu nome'
            type='text'
            error={errors.name?.message}/>

            <Input
            register={register}
            name='email'
            label='Email'
            placeholder='Digite aqui seu email'
            type='email'
            error={errors.email?.message}/>

            <Input
            register={register}
            name='password'
            label='Senha'
            placeholder='Digite aqui sua senha'
            type='password'
            error={errors.password?.message}/>

            <Input
            register={register}
            name='passwordConfirm'
            label='Confirmar senha'
            placeholder='Digite novamente sua senha'
            type='password'
            error={errors.passwordConfirm?.message}/>

            
            <Select
            register={register}
            name='course_module'
            label='Selecione o Modulo'
            error={errors.course_module?.message}>
            
            <option value='M1'>Primeiro Módulo</option>
            <option value='M2'>Segundo Módulo</option>
            <option value='M3'>Terceiro Módulo</option>
            </Select>
            

            <Button type='submit' width='100%' >Cadastre-se</Button>
        </form>
        </Container>

    )
}

export default Cadastro