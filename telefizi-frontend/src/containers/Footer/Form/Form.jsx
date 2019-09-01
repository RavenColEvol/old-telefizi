import React from 'react'
import Input from './Input/Input'
import styled from 'styled-components';

const Button = styled.button`
    width:25rem;
    background:var(--color-primary-1);
    border:0;
    padding:8px 10px;
    color:var(--color-white-1);
    border-radius:5px;
    box-shadow:0 .5rem 1rem -10px #bb565677;
    transition:.15s all linear;
    &:hover{
        box-shadow:0 18px 24px -12px #bb565677;
        transform:translateY(-1px);
    }
    @media ${props=>props.theme.media.medium}{
        width:90vw;
    }
`


export default props=>(
    <div style={{flex:1}}>
        <form>
        <Input type='text' placeholder='John Doe' label='Name :' required/>
        <Input type='email' placeholder='Johndoe@gmail.com' label='Email :' required/>
        <Input type='tel' placeholder='+91 96543 15552' label='Phone no. :' required/>
        <Input type='text' placeholder='' label='Address :' required/>
        <Input type='text' placeholder='' label='Subject :' required/>
        <Button>Send It</Button>
        </form>
    </div>
)