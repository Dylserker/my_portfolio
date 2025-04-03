import React, { useState } from 'react';
import leftGif from '../../assets/gif/Lance.gif';
import rightGif from '../../assets/gif/Eze.gif';
import '../../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        fetch('https://formspree.io/f/votre_id_formspree', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    setSubmitStatus('error');
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-container">
            <img src={leftGif} alt="Lance" className="contact-gif" />
            <form className="contact-form electric-border" onSubmit={handleSubmit}>
                {submitStatus === 'success' && (
                    <div className="success-message">
                        Votre message a été envoyé avec succès !
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="error-message">
                        Une erreur est survenue. Veuillez réessayer.
                    </div>
                )}

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
                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
            </form>
            <img src={rightGif} alt="Eze" className="contact-gif" />
        </div>
    );
};

export default Contact;