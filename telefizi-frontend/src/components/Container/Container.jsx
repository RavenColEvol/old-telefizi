import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
    min-height:100vh;
    padding-top:6rem;
`
const Container = ({children,id}) => {
    return (
        <ContainerWrapper id={id}>
            {children}
        </ContainerWrapper>
    )
}

export default Container
