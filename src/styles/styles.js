import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 1140px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;

  .img-container{
    width: 100%;
    max-width: 1140px;  
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(4, minmax(200px, 1fr));

    img{
      width: 240px;
      height: auto;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
 
      object-fit: cover;
    }

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, minmax(150px, 1fr));

      img{
      width: 220px;
      }
    }

    @media (max-width: 810px) {
      grid-template-columns: repeat(3, minmax(120px, 1fr));
          img{
      width: 200px;
      }
    }

        @media (max-width: 768px) {
      grid-template-columns: repeat(3, minmax(120px, 1fr));
          img{
      width: 180px;
      }
    }
     @media (max-width: 600px) {
      grid-template-columns: repeat(3, minmax(150px, 1fr));

      img{
      width: 150px;
      }
    }

         @media (max-width: 520px) {
      grid-template-columns: repeat(2, minmax(200px, 1fr));

       img{
      width: 200px;
      }
    }
    @media (max-width: 490px) {
      grid-template-columns: repeat(2, minmax(200, 1fr));

      img{
      width: 200px;
      }
    }

    @media (max-width: 420px) {
      grid-template-columns: repeat(2, minmax(150px, 1fr));

      img{
      width: 150px;
      }
    }

    @media (max-width: 350px) {
      grid-template-columns: repeat(1, minmax(220px, 1fr));

      img{
      width: 220px;
      }
    }
}
`;

export const BadgeStyles = styled.div`
  position: fixed;
  opacity: 0;
  z-index: 10;
  bottom: 20px;
  transform: translatey(20px);
  margin-inline: 20px;
  width: 100%;
  max-width: 600px;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: #0b0b0b40;
  backdrop-filter: blur(10px);
  animation: fadeInUp 1s forwards;
  animation-delay: 2s;

  .container-img{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 73%;
    color: #fafafa;

    p{
      @media (max-width: 400px){
        display: none !important;
      }
    }
  }

  .foto{
    width: 50px;
    border-radius: 8px;
  }

  button{
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    background-color: #fafafa;
    color: #0b0b0b;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 12px;
  }

  @keyframes fadeInUp {
  to{
    opacity: 1;
    transform: translateY(0px) ;
    }
  }

  @media (max-width: 1000px){
    max-width: 600px;  
  }
    @media (max-width: 400px){
    max-width: 300px;  
  }
`;

