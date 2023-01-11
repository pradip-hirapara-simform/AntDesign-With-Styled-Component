
import styled from "styled-components";

export const CardStyle = styled.div`
    display: block;
    border: 1px solid ${props => {console.log(props.theme);return props.theme.primary}};
    padding: 10px;
    border-radius: 4px;
    h1 {
        color: #000;
    }
`