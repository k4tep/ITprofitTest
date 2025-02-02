import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { infoSchema } from './yupObjects';
import { ajaxFormSubmit } from './ajax.js';
import './style.scss';
import Modal from './components/modal.js';

const App = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({ resolver: yupResolver(infoSchema) });
    const [isVisible, setIsVisible] = useState(false);
    const [answer, setAnswer] = useState('Nothing yet');

    const onSubmit = async (data) => {
        const fieldErrors = await ajaxFormSubmit(data);
        if (fieldErrors) {
            Object.keys(fieldErrors).forEach((fieldName) => {
                setError(fieldName, { type: 'server', message: fieldErrors[fieldName] });
            });
            setAnswer(fieldErrors);
            setIsVisible(true);
        }
    };

    return (
        <div className="wrapper">
            <Modal answer={answer} visibe={isVisible} setIsVisible={setIsVisible} />
            <h1 className="hello-text"> Hello! Please enter this information. </h1>
            {(errors.firstName?.message ||
                errors.email?.message ||
                errors.phone?.message ||
                errors.message?.message) && (
                <p className="errorField">
                    {`Incorrect
           ${[
               errors.firstName?.message,
               errors.email?.message,
               errors.phone?.message,
               errors.message?.message,
           ]
               .filter((elem) => elem !== undefined)
               .join(' or ')}
          . Please check your credentials and try again.`}
                </p>
            )}
            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <input
                    className={errors.firstName?.message ? 'error-border' : ''}
                    {...register('firstName')}
                    placeholder="First Name"
                ></input>
                <input
                    className={errors.email?.message ? 'error-border' : ''}
                    {...register('email')}
                    placeholder="E-mail"
                    type="email"
                ></input>
                <input
                    className={errors.phone?.message ? 'error-border' : ''}
                    {...register('phone')}
                    placeholder="Phone"
                ></input>
                <input
                    className={errors.message?.message ? 'error-border' : ''}
                    {...register('message')}
                    placeholder="Message"
                    type="textarea"
                ></input>
                <button type="submit" className="form-button">
                    Submit
                </button>
            </form>
            <button className="modal-button" onClick={() => setIsVisible(true)}>
                Open modal
            </button>
        </div>
    );
};

export default App;
