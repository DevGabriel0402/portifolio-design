import styled from "styled-components";
import perfil from "../assets/imagens/perfil.JPG";

const Loading = () => {
  return <Container><img src={perfil} alt="Perfil" /></Container>;
};

export const Container = styled.div`
    position: fixed;
    margin: 0 auto;
    background-color: #0b0b0bee;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fafafa;
    font-size: 24px;
    opacity: 1;
    z-index: 9999;
    animation: fadeOut 3s forwards;
    animation-delay: 1s;
    backdrop-filter: blur(10px);
   
    img{
        width: 50px;
        border-radius: 8px;
        filter: drop-shadow(0 0 0.1rem #fafafa) grayscale(100%);
        animation: pulse 2s linear infinite;
    }

    @keyframes fadeOut {
        0%{
            opacity: 1;
            
        }
        90%{
            opacity: 0.9; 
        }
        100%{
            opacity: 0;
            display: none;
        }
    }

    @keyframes pulse {
        0%{
           opacity: 0;
    
        }
        50%{
            opacity: 1;
        }
        100%{
           opacity: 0;
   
           
        }
        
    }
`;

export default Loading;