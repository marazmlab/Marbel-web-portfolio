import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
    max-width: 600px;
    margin: 0 0 0 auto;
    font-size: 1.15rem;
    line-height: 2.5;

    & a {
        text-decoration: underline;
    }
`

const Contact = () => {
    const contact = {
        email: "belzmarek@gmail.com",
        phone: "+48 515 107 805",
        links: [
            { id: 1, label: "LinkedIn", url: "https://www.linkedin.com/in/belz/" },
            { id: 2, label: "GitHub", url: "https://github.com/marazmlab" },
            { id: 2, label: "Behance", url: "https://www.behance.net/belzmareka716" },
            
        ]
    };

    // const [contact, setContact] = useState(null);

    // useEffect(() => {
    //     fetch('https://marbel.tech/api/contacts?populate=*')
    //         .then(res => res.json())
    //         .then(data => setContact(data.data[0]));
    // }, []);

    // if (!contact) return <p>Loading...</p>

    // const links = contact.links || [];

    return (
        <ContactWrapper>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <ul>
                {contact.links.map(link => (
                    <li key={link.id}>
                       <a href={link.url} target='_blank' rel='noopener noreferrer'>
                            {link.label}
                        </a> 
                    </li>
                ))}
            </ul>
        </ContactWrapper>
    );
}

export default Contact;