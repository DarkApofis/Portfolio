import styled from "styled-components";

export const Section = styled.section`
    padding-top: 100px;
    height: 100vh;
`

export const Projects = styled.div`
    display: grid;
    grid-auto-flow: 400px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1rem 1rem;
`

export const Anchor = styled.a`
    color: #84D98A;
    text-decoration: none;
    cursor: pointer;
`

export const H2 = styled.h2`
    margin-bottom: 1rem;
`

export const ImageContainer = styled.div`
    max-height: 200px;
    border-radius: 5px;
    overflow-y: scroll;
`

export const Img = styled.img`
    max-width: 100%;
    height: auto;
`

export const P = styled.p`
    text-align: center;
`