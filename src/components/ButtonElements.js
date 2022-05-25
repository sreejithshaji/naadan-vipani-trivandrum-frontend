import styled from "styled-components";
import {Link} from 'react-scroll'


export const Button = styled(Link)`
    border-radius: 30px;
    background: ${({primary}) => (primary ? '#fccd04' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '24px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff' )};
    font-size: ${({fontBig}) => (fontBig ? '25px' : '19px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    font-weight: 500;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#896745')};

    }
`