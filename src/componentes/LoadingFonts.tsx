import styled from "styled-components/native";

export function LoadingFonts() {

    const Container = styled.View`
        flex:1;
        justify-content:center;
        align-items:center;
        background-color: #0B845C;
        `;

    const LoadIndicator = styled.ActivityIndicator.attrs({
        color: '#fff',
        size: 50
    })``;

    return (

        <Container>
            <LoadIndicator />
        </Container>
    );
}