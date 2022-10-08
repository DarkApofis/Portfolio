import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 0 2.5rem;
    z-index: 2;
    top: 0;
    height: 100px;
    width: 100%;
`

export const H2 = styled.h2`
    font-size: 1rem;
    font-weight: 500;
`

export const UL = styled.ul`
    display: flex;
`

export const LI = styled.li`
    margin-right: 1rem;
    cursor: pointer;
`

export const Anchor = styled.a`
    color: #D9D9D9;
    text-decoration: none;
`
