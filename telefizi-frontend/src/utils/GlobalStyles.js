import {createGlobalStyle} from 'styled-components'
import circular from '../assest/circular.otf'
export default createGlobalStyle`
    @font-face {
        font-family:'Circular std';
        src: url(${circular});
    }
    *{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }

    html{
        box-sizing:border-box;
        --color-primary-1:${props=>props.theme.colors['color-primary-1']};
        --color-primary-2:${props=>props.theme.colors['color-primary-2']};
        --color-primary-3:${props=>props.theme.colors['color-primary-3']};
        --color-dark-1:${props=>props.theme.colors['color-dark-1']};
        --color-dark-2:${props=>props.theme.colors['color-dark-2']};
        --color-white-1:${props=>props.theme.colors['color-white-1']};
        --color-white-2:${props=>props.theme.colors['color-white-2']};

        --media-medium:${props=>props.theme.media.medium};
        scroll-behavior:smooth;
    }

    body{
        font-family:'Circular std',sans-serif;
        font-size:62.5%;
        font-weight:400;
        line-height:1.6;
        background:var(--color-white-1);
        color:var(--color-dark-1);
        overflow-x:hidden;
    }

    @media ${props=>props.theme.media.smallest}{
        font-size:55%;
    }

    a,input{
        text-decoration:none;
        border:none;
    }
    ::selection{
        color:white;
        background:var(--color-primary-3);
    }
`
