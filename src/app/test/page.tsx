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
        setIsLoading(true);
        axios.post('/api/register',data)
        .finally(()=>{
            setIsLoading(false);
        })
    }

return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input id="email" type="email" />
            <input id = "name" type="text" />
            <input id = "password" type="text" />
            <button type="submit">trigger</button>
        </form>
        
    </div>
);
}

export default RegisterModal;