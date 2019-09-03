import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
    border:2px solid #f2f2f2;
    padding:8px 10px;
    display:block;
    border-radius:5px;
    width:95%;
    margin-bottom:1rem;
    &:focus{
        border:2px solid #eacccc;
        transition:.15s all linear;
    }
    &:invalid{
        border:2px solid #c87777;
    }
    @media ${props=>props.theme.media.medium}{
        width:100%;
    }
    @media ${props=>props.theme.media.small}{
        width:100%;
    }
`
export default props =>(
    <>
        <div>
            <label style={{fontSize:'.85rem'}}>{props.label}</label><br/>
            <Input type={props.type} placeholder={props.placeholder}></Input>
        </div>
    </>
)