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

/*
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`
/*
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
`
*/


export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap; /* Prevent wrapping to another row */
    gap: 20px; /* Add gap between columns */
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 1; /* Allow columns to take equal width */
    min-width: 150px; /* Ensure minimum width for each column */
    margin-left: 20px;
`;


export const Link = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: #66FF66;
        transition: color 0.3s ease;
    }
`
export const Title = styled.div`
    font-size: 24px;
    color: #000000;
    margin-bottom: 40px;
    font-weight: bold;
`


