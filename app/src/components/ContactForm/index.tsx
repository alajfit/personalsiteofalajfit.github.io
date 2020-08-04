import React from 'react';
import { SocialBar } from 'components/SocialBar';
import { Spacer } from 'components/Spacer';
import './index.scss';

const ContactTitle: React.FC = () => (
    <h1 className="ContactTitle">Contact Me</h1>
)

const Form: React.FC = () => (
    <form className="Form">
        <div className="Form-person">
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
        </div>
        <div className="Form-message">
            <div>
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
        <Spacer />
        <SocialBar />
    </div>
)
