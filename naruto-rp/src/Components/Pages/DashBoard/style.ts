import styled from "styled-components";

export const DashBoardStyle = styled.section`

    display: flex;
    flex-direction: column;
    height: 100%;

    header{
        background-color: var(--Color-primary);
        margin: 0px;
        width: 100vw;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-top: 5px;
        padding-bottom: 5px;

        h1{
            font-size: 2em;
            padding-left: 10px;
        }

        .buttonProfile {
            color: var(--Color-gray);
            padding-right: 10px;
        }
    }

    .wiki{
        text-align: start;
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        h2{
            padding-left: 10px;
        }

        .container-wiki{
            display: flex;
            justify-content: space-around;
        }

        .elemental {
            display: flex;
            flex-direction: column;
        }

        ul{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }

    .strongest{
        text-align: start;
        display: flex;
        flex-direction: column;
        gap: 10px;

        h2{
            padding-left: 10px;
        }

        .container-Ninjas{

            li{
                width: 40%;
                position: relative;

                margin-bottom: 10px;

                p{
                    position: absolute;
                    z-index: 1;
                    bottom: 5px;
                    left: 15%;

                    text-shadow: 0 0 3px var(--Color-gray), 0 0 5px var(--Color-gray);
                }
            }

            ul{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-evenly;
                gap: 10px;
            }
        }
    }

    .kages{
        text-align: start;
        display: flex;
        flex-direction: column;
        gap: 10px;

        h2{
            padding-left: 10px;
        }

        .container-Ninjas{

            li{
                width: 40%;
                position: relative;

                margin-bottom: 10px;

                p{
                    position: absolute;
                    z-index: 1;
                    bottom: 5px;
                    left: 15%;

                    text-shadow: 0 0 3px var(--Color-gray), 0 0 5px var(--Color-gray);
                }
            }

            ul{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-evenly;
                gap: 10px;
            }
        }
    }

    footer{
        height: 120px;
        background-color: var(--Color-footer);

        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 10px;
            a{
                color: var(--Color-gray);
            }
            .naruto-rp{
                color: var(--Color-primary);
            }
            a:hover{
                cursor: pointer;
            }
        }
    }
`