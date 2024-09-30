import styled from "styled-components";
import { useState } from "react";


const TitlesHover = ({ Title }) => {
    const [hovered, setHovered] = useState(false);

    const style = {
        color: hovered? '#F1C40F' : '#000000',
        transition: 'color 0.3s ease',
        cursor: 'pointer',
        textDecoration: hovered? 'underline' : 'none',
    }

    return (
        <h2 style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {Title}
        </h2>
    )
}
export default TitlesHover;


export const Container = styled.div`
    padding: 80px 60px;
    border-radius: 0;
    background: #2C3E50;
`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
`
export const Link = styled.div`
    color: #413535;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: #ff9c0;
        transition: color 0.3s ease;
    }
`
export const Title = styled.div`
    font-size: 24px;
    color: #000000;
    margin-bottom: 40px;
    font-weight: bold;
`


