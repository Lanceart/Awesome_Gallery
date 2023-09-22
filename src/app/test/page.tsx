'use client';
import axios from "axios";
import {
    FieldValues,
    SubmitHandler,
    useForm
}from 'react-hook-form';

import { useCallback,  useState } from "react";

const RegisterModal = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('shit', data.email);
        setIsLoading(true);
        axios.post('/api/register',data)
        .finally(()=>{
            setIsLoading(false);
        })
    }

return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input id="email" type="email" {...register("email")}/>
            </div>
            <br />
            <div>
            <input id = "name" type="text" {...register("name")}/>
            </div>
            <br />
            <div>
            <input id = "password" type="text" {...register("password")}/>
            </div>
            <button type="submit">trigger</button>
        </form>
        
    </div>
);
}

export default RegisterModal;