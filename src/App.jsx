import { Container, BadgeStyles } from "./styles/styles";
import { RiWhatsappFill } from "react-icons/ri";

import img01 from "@/assets/imagens/01.webp";
import img02 from "@/assets/imagens/02.webp";
import img03 from "@/assets/imagens/03.webp";
import img04 from "@/assets/imagens/04.webp";
import img05 from "@/assets/imagens/05.webp";
import img06 from "@/assets/imagens/06.webp";
import img07 from "@/assets/imagens/07.webp";
import img08 from "@/assets/imagens/08.webp";
import img09 from "@/assets/imagens/09.webp";
import img10 from "@/assets/imagens/10.webp";
import img11 from "@/assets/imagens/11.webp";
import img12 from "@/assets/imagens/12.webp";
import perfil from "@/assets/imagens/perfil.JPG";

function App() {
  const imagens = [
    { id: 1, src: img01, alt: "Imagem 1" },
    { id: 2, src: img02, alt: "Imagem 2" },
    { id: 3, src: img03, alt: "Imagem 3" },
    { id: 4, src: img04, alt: "Imagem 4" },
    { id: 5, src: img05, alt: "Imagem 5" },
    { id: 6, src: img06, alt: "Imagem 6" },
    { id: 7, src: img07, alt: "Imagem 7" },
    { id: 8, src: img08, alt: "Imagem 8" },
    { id: 9, src: img09, alt: "Imagem 9" },
    { id: 10, src: img10, alt: "Imagem 10" },
    { id: 11, src: img11, alt: "Imagem 11" },
    { id: 12, src: img12, alt: "Imagem 12" },
  ]

  const date = new Date();
  const hour = date.getHours();
  

  const handleWhatsAppClick = () => {
    const boanoite = hour >= 18 || hour < 5;
    const boatarde = hour >= 12 && hour < 18;
    const bomdia = hour >= 5 && hour < 12;

    let message;
    if (boanoite) {
      message = `Boa noite Gabriel, estou interessado em suas artes de alta qualidade!`;
    } else if (boatarde) {
      message = `Boa tarde Gabriel, estou interessado em suas artes de alta qualidade!`;
    } else {
      message = `Bom dia Gabriel, estou interessado em suas artes de alta qualidade!`;
    }

    const phoneNumber = "5531991660594"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <Container>
      <h1>Portifólio</h1>
      <div className="img-container">
        {imagens.map((imagem) => (
          <img key={imagem.id} src={imagem.src} alt={imagem.alt} />
        ))}
      </div>
      <BadgeStyles>
        <div className="container-img">
          <img src={perfil} alt="Perfil" className="foto" />
          <p>Está precisando de artes de alta qualidade? Me chame pra gente bater um papo.</p>
        </div>
        <div className="info">
          <button onClick={handleWhatsAppClick}> 
            <RiWhatsappFill size={20} color="#0b0b0b" /> Chamar</button>
        </div>
      </BadgeStyles>
    </Container>
  );
}

export default App;
