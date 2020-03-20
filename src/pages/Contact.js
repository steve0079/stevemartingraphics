import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../utils/errorMessage';
import "./contact.css";

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="contactContainer">
            <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <h1>Contact Me:</h1>
                <label>First Name:</label>
                <input
                    name="firstName"
                    ref={register({ required: true, minLength: 2 })}
                />
                {errors.firstName && errors.firstName.type === 'required' && (
                    <div className="errorMsg">This is required.</div>
                )}
                {errors.firstName && errors.firstName.type === 'minLength' && (
                    <div className="errorMsg">This field requires a minimum of two (2) characters.</div>
                )}

                <label>Last Name:</label>
                <input
                    name="lastName"
                    ref={register({ required: true })}
                />
                {errors.lastName && <div className="errorMsg">This is required.</div>}

                <label>Email</label>
                <input
                    name="email"
                    ref={register({ required: true })}
                />
                {errors.email && <div className="errorMsg">This is required.</div>}

                <label>Message:</label>
                <textarea
                    name="message"
                    ref={register({ required: true })}
                />
                {errors.message && <div className="errorMsg">This is required.</div>}

                <input type="submit" />
            </form>
        </div>
    );
}

export default Contact;