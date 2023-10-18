import styled from 'styled-components';

export const FooterStyle = styled.div`
    display: flex;
    box-sizing: border-box;
    background: #333;
    color: white;
    width: 100%;
    padding: 5px;
    height: 120px;
    margin-top: auto;

    a {
        color: #fff;
        margin-block: auto;
        margin-left: 20px;
    }

    div {
        margin-inline-start: auto;
        display: flex;
        padding-inline: 10px;
        align-items: center;
    }

    i {
        color: #fff;
        font-size: 40px;
        margin-inline-start: auto;
        margin-right: 20px;

        &:hover {
            color: #ff9900;
        }
    }

    @media(max-width:380px) {
        max-width: 370px;
        min-width: 100%;
    }
`