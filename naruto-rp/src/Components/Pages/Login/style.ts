import styled from 'styled-components'

export const LoginStyle = styled.section`

        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 320px;
        min-height: 100vh;

    .divLogin{
        display: flex;
        flex-direction: column;
        gap: 10px;

        h1{
            color: var(--Color-primary);
        }
    }

    .logoHeader{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
    

        input{
            outline: none;
            border: none;
            height: 35px;
            border-radius: 5px;

            padding: 5px;
        }
    }


`