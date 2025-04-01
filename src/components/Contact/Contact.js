import React, { useState } from 'react';
import '../../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre nom et prénom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder="Votre message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;