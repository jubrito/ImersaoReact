import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
    padding: 15px;
    font-size: size 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    /* background-color: ${({ theme }) => theme.colors.black}; */
    background-color: #e2e2e24a;
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;
`

// Por padrão toda função recebe um objeto Input(props) e pela desestruturação podemos receber e alocar uma propriedade especifica: Input({ onChange})
export default function Label({ content }) {
    return (
        <div>
            <Label htmlFor="male" className="inputRadio"></Label>
        </div>
    )
}
