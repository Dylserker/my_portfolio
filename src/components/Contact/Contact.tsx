import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../../styles/Contact.css';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .send('service_8ihlzfs', 'template_fyoqchp', formData, '_Mz0Df-MlYz-Xe8vV')
            .then(() => {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="contact-container">
            <form className="contact-form electric-border" onSubmit={handleSubmit}>
                {submitStatus === 'success' && (
                    <div className="success-message">Votre message a été envoyé avec succès !</div>
                )}

                {submitStatus === 'error' && (
                    <div className="error-message">Une erreur est survenue. Veuillez réessayer.</div>
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
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
            </form>
        </div>
    );
};

export default Contact;


