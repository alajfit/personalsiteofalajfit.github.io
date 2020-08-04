import React from 'react';
import './index.scss';

const ContactTitle: React.FC = () => (
    <h1 className="ContactTitle">Contact Me</h1>
)

const Form: React.FC = () => (
    <form className="Form">
        <div className="Form-person">
            <div>
                <label htmlFor="">Name</label>
                <input type="text"/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text"/>
            </div>
        </div>
        <div className="Form-message">
            <div>
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols={30} rows={10}></textarea>
            </div>
            <div>
                <input type="submit" />
            </div>
        </div>
    </form>
)

export const ContactForm: React.FC = () => (
    <div className="ContactForm">
        <ContactTitle />
        <Form />
    </div>
)
