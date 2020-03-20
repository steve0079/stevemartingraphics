import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                placeholder="First name" 
                name="First name" 
                ref={register({ 
                    required: true, 
                    min: 2, 
                    maxLength: 80 })} 
            />
            <input 
                type="text" 
                placeholder="Last name" 
                name="Last name" 
                ref={register({ 
                    required: true, 
                    maxLength: 100 })} />
            <input 
                type="tel" 
                placeholder="Mobile number" 
                name="Mobile number" 
                ref={register({ 
                    required: true, 
                    maxLength: 12, 
                    pattern: /(xxx)xxx-xxxx/i })} />
            <input 
                type="text" 
                placeholder="Email" 
                name="Email" 
                ref={register({ 
                        required: true, 
                        pattern: /^\S+@\S+$/i })} />
            <textarea 
                name="Message" 
                ref={register({ 
                    required: true })} />

            <input 
                type="submit" />
        </form>
    );
}