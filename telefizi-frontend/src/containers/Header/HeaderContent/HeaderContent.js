import React from 'react'
import styled from 'styled-components';
import Button from '../../../components/Button/Button';
import LogoAside from '../LogoAside/LogoAside'
const ContentWrapper = styled.div`
    padding-left:7rem;
    display:flex;
    align-items:center;
    h1{
        font-weight:200;
        font-size:2.2rem;
        margin-bottom:.8rem;
        animation:slideRight .2s ease-in;
        color:var(--color-dark-1);
    }
    h3{
        font-size:0.9rem;
        font-weight:200;
        margin-bottom:calc(1.6rem);
        opacity:0;
        animation:slideUp .2s .2s ease-in ;
        animation-fill-mode:forwards;
        color:var(--color-dark-2);
    }
    div{
        flex:1 1;
    }
    @media ${props=>props.theme.media.medium}
    {
        padding-left:2rem;
        padding-right:1rem;
        h1{
            font-weight:200;
            font-size:1.9rem;
            margin-bottom:.8rem;
            
        }
        h3{
            font-size:.78rem;
            font-weight:200;
            margin-bottom:calc(1.6rem*2);
        }
    }
    @media ${props=>props.theme.media.small}
    {
        &{
            flex-direction:column-reverse;
            justify-content:center;
            align-items:center;
            padding:0 1rem;
            
            div{
                text-align:justify;
                text-align-last:center;
                flex:0 0;
            }

            h1{
                font-weight:200;
                font-size:1.3rem;
                margin-bottom:.4rem;
                text-align:center;
            }
            h3{
                font-size:.78rem;
                font-weight:200;
                margin-bottom:calc(0.8rem*2);
                text-align:justify;
            }
        }
    }
    transform:translateX(0);
    

    @keyframes slideRight{
        from{
            transform:translateX(-30px);
            opacity:0;
        }
        to{
            transform:translateX(0);
            opacity:1;
        }
    }
    @keyframes slideUp{
        from{
            transform:translateY(30px);
            opacity:0;
        }
        to{
            transform:translateX(0);
            opacity:1;
        }
    }
`
const HeaderContent = () => {
    return (
        <ContentWrapper>
            <div>
                    <h1>
                    Healthcare delivered at your home
                    </h1>
                    <h3>
                    Telefizi's affordable doctor appointments are revolutionizing the patient experience. Bringing the doctor to your doorstep.
                    </h3>
                    <Button href="#about">Book Now</Button>
            </div>
            <LogoAside/>
        </ContentWrapper>
    )
}

export default HeaderContent
