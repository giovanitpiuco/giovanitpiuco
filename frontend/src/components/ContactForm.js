import React from 'react'

import styled from 'styled-components'

const ContactForm  = () => {
   return(
       <Form id="contact-form" method="post">
            <Input>
                <label>Name:</label> <input type="text" />
            </Input>
            <Input>
                <label>E-mail:</label> <input type="email" />
            </Input>
            <Input>
            <label>Message:</label> <textarea rows="5" />
            </Input>
            <button type="submit"> Submit</button>
        </Form>

        
   )
}

const Input = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 60vh;
    label {
        color: white;
        padding-top: 1rem;
    }
    input {
        border: 1px solid yellow;
        padding:    12px 20px;
        border-radius: 5%;
        width: 100%;
        height: 100%;
    }
    input:focus{
        background-color: #416cd5;
        color: yellow;
    }
    textarea {
        width: 100%;
        height: 150%;
        padding:    12px 20px;
        box-align: border-box;
        border-radius: 4px;
        border: 1px solid #ccc;
        resize: none;
        background-color: #f8f8f8;
        
    }
    textarea:focus{
        background-color: #416cd5;
        color: yellow;
    }

`;

const Form = styled.form`
    button{
        margin-top: 1rem;
    }
`;

export default ContactForm;