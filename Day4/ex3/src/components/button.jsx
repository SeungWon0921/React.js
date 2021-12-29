import React from "react";
import styled, {css} from 'styled-components';
import { darken, lighten } from "polished";

const sizeStyles = css`
    ${props =>
        props.size == 'large'&&
        css`
            height: 3rem;
            font-size: 1.3rem;
    `}
    ${props =>
        props.size == 'medium' &&
        css`
            height: 2.3rem;
            font-size: 1rem;`
    }
    ${props=>
        props.size == 'small' &&
        css`
            height: 1.8rem;
            font-size: 0.8rem;
        `
    }
`
const StyledButton = styled.button `
    color: White;
    font-weight: bold;
    outline: none;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    height: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    ${colorStyle}
`;

const colorStyle = css`
    ${({theme, color}) => {
        const selected = theme.palette[color];

        return css`
            background-color: ${selected};
            &:hover {
                background-color: ${lighten(0.1, selected)}
            }
            &:active {
                background-color: ${darken(0.1, selected)}
            }
        `;
    }}
`;


function Button({ children, color, size, ...rest }){
    return <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>
}

Button.defaultProps = {
    color: 'pink',
    size: 'medium'
}

export default Button;