import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 100px 0 0 0;
    margin: 0 auto;
    max-width: 900px;
    height: auto;
    @media (min-width: 800px){
        flex-direction: row;
        gap: 3rem;
    }
`

export const InfoContainer = styled.div`
    max-width: 500px;
`


export const P = styled.p`
    margin-bottom: 1rem;
    font-size: clamp(0.9rem, 5vw, 1rem);
    &:first-of-type{
        margin-top: 1rem;
    }
`

export const UL = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(150px, 250px));
    gap: 0.5rem;
    margin-bottom: 1rem;
`

export const LI = styled.li`
    position: relative;
    padding-left: 1rem;
    font-size: 0.9rem;
    &::before{
        content: "▹";
        position: absolute;
        left: 0px;
        color: #84D98A;
    }
`
export const Img = styled.img`
    max-width: 100%;
    height: auto;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
`

export const DIV = styled.div`
    align-self: center;
    position: relative;
    width: 300px;
    height: 300px;
    margin-bottom: 1rem;
    background-color: #84D98A;
    border-radius: 5px;
    &::after{
        content: '';
        display: block;
        position: absolute;
        left: 20px;
        top: 20px;
        width: 100%;
        height: 100%;
        border: 2px solid #84D98A;
        border-radius: 5px;
        z-index: -1;
    }
    &:hover {
        ${Img}{
            mix-blend-mode: normal;
            filter: none;
        }
    }
`

export const ImageContainer = styled.div`
    align-self: center;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    overflow: hidden;
`
