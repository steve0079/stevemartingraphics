import React from 'react';
import { useForm } from 'react-hook-form';
import "./contact.css";

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault()
        console.log(data)
        event.target.reset()
    };

    return (
        <div className="contactContainer">
            <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <h1>Contact Me:</h1>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    ref={register({ required: true, minLength: 2, maxLength: 30 })}
                />
                {errors.firstName && errors.firstName.type === 'required' && (
                    <div className="errorMsg">This is required.</div>
                )}
                {errors.firstName && errors.firstName.type === 'minLength' && (
                    <div className="errorMsg">This field requires a minimum of two (2) characters.</div>
                )}
                {errors.firstName && errors.firstName.type === 'maxLength' && (
                    <div className="errorMsg">This field requires a maximum of thirty (30) characters.</div>
                )}

                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    ref={register({ required: true, maxLength: 30 })}
                />
                {errors.lastName && errors.lastName.type === 'required' && (
                    <div className="errorMsg">This is required.</div>
                )}
                {errors.lastName && errors.lastName.type === 'maxLength' && (
                    <div className="errorMsg">This field requires a maximum of thirty (30) characters.</div>
                )}

                <label>Phone Number</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    ref={register({ required: true /*, pattern: /^[1-9]\d{2}-\d{3}-\d{4}/i*/ })}
                />
                {errors.phoneNumber && errors.phoneNumber.type === 'required' && (
                    <div className="errorMsg">This is required.</div>
                )}
                {/* {errors.phoneNumber && errors.phoneNumber.type === 'pattern' && (
                    <div className="errorMsg">Please follow phone number format 000-000-0000.</div>
                )} */}

                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && errors.email.type === 'required' && (
                    <div className="errorMsg">This is required.</div>
                )}
                {errors.email && errors.email.type === 'pattern' && (
                    <div className="errorMsg">Please follow standard email format.</div>
                )}

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