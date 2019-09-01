import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
    text-align:center;
    font-size:1rem;
    color:var(--color-dark-2);
    margin:1rem;
`
export default props =>(
    <Div>
        © {new Date().getFullYear()}  by Ravi Lamkoti.
    </Div>
)