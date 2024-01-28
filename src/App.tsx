import {
  CaretLeft,
  CaretRight,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import "./index.css";
import { useEffect, useState } from "react";
import livCampanha from "./assets/liv-campanha.mp4";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }
  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000); // Change slide every 10 seconds
    return () => clearInterval(timer); // Clear timer on component unmount
  }, []);

  const element = document.querySelector(".slide");

  element?.classList.add("move-right");

  // Define your slides here
  const slides = [
    {
      img: "https://static.wixstatic.com/media/c470d0_047253e05b7342a68cd6ab0c9fdc6ec8~mv2.png/v1/fill/w_484,h_317,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/isca-1.png",
      title: "Onde Investir em 2024.",
      class: "slide-prev",
      btn: "Acesse e baixe agora",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSc-5XnR2DD5fLctUELg74KIt-qU1BilPV4tA68Ny_KywBmAsQ/viewform",
      text: "As principais ações, fundos imobiliários e títulos de renda pública, segundo especialistas do BTG. ",
      text2: "Controle suas finanças e tome decisões de investimento.",
    },
    {
      img: "https://static.wixstatic.com/media/c470d0_0420086f3de8425ab1a1cd72c50e883e~mv2.png/v1/fill/w_509,h_478,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_0420086f3de8425ab1a1cd72c50e883e~mv2.png",
      title:
        "Aprenda a investir em fundos imobiliários com o BTG Pactual e a LIV Capital.",
      class: "slide",
      btn: "Increva-se agora",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScRi9QdqZfYRFaHw3GrSyWH15OvncM_zi7zSIrQRnucSE804Q/viewform",
    },

    {
      img: "https://static.wixstatic.com/media/c470d0_53d4b2b3646a4515b99100b73a4ea47a~mv2.png/v1/fill/w_600,h_402,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/isca-3.png",
      title:
        "Teste diferentes estratégias de investimento com o simulador BTG Pactual e LIV Capital.",
      class: "slide-next",
      btn: "Experimente agora",
      href: "https://liv-capital.ondeinvestir.live/?utm_source=livcapital&utm_medium=livcapial-banner&utm_campaign=livcapital-onde_investir_24",
    },
    // Add as many slides as you want
  ];

  const nextSlide = () => {
    setCurrentSlide((oldSlide) => {
      let newSlide = oldSlide + 1;
      if (newSlide === slides.length) {
        newSlide = 0; // Loop back to the start
      }

      return newSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((oldSlide) => {
      let newSlide = oldSlide - 1;
      if (newSlide < 0) {
        newSlide = slides.length - 1; // Loop back to the end
      }
      return newSlide;
    });
  };
  // Crie um novo objeto URL com a URL atual
  const url = new URL(window.location.href);
  url.href = url.href.replace(/#.*$/, ""); // Remova o hash
  window.location.hash = ""; // Remova o hash
  window.history.replaceState("", "", url.href);
  // Use o método history.replaceState para atualizar a URL sem recarregar a página
  return (
    <>
      <body>
        <header>
          <nav id="nav" className={`${menu ? "active" : ""}`}>
            <img
              src="https://static.wixstatic.com/media/c470d0_cc958d2c03094deb998478c12cc70dac~mv2.png/v1/fill/w_233,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LIV-1-8.png"
              alt=""
            />
            <ul id="menu">
              <li>
                <a href="#form">+Renda</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#contact">Atendimento</a>
              </li>
              <li>
                <a href="#bem-estar">Bem estar</a>
              </li>
              <li>
                <a href="#resultados">Resultados</a>
              </li>
              <li>
                <a href="#confidence">Pode confiar</a>
              </li>
              <a href="#products">Investir</a>
            </ul>
            <button id="btn-mobile" onClick={toggleMenu}>
              Menu
            </button>
          </nav>
        </header>
        <main>
          <section id="form">
            <div id="form-content" className="container">
              <div className="text-container">
                <h1>Aumente sua renda & Estilo de vida</h1>
                <p>
                  Faça o seu dinheiro trabalhar para você
                  <br />
                  com a assessoria particular da LIV Capital
                </p>
                <form
                  action="https://formsubmit.co/danielsouzaoliveira.contato@gmail.com"
                  method="POST"
                  id="head-form"
                >
                  <input type="hidden" name="_captcha" value="false"></input>
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  ></input>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://www.sejaliv.com.br"
                  ></input>
                  <input
                    type="hidden"
                    name="_cc"
                    value="felipe.moraes@liv.capital,rafael.plens@liv.capital,camilabritoribeiro.marketing@gmail.com"
                  ></input>
                  <label htmlFor="">Nome</label>
                  <input type="text" name="Nome" />
                  <label htmlFor="">Whatsapp</label>
                  <input type="tel" name="tel" />
                  <label htmlFor="">Email</label>
                  <input type="email" name="email" />
                  <label htmlFor=""></label>
                  <input
                    type="submit"
                    className="submit"
                    value="Aumentar minha renda"
                  />
                </form>
              </div>
              <img
                src="https://static.wixstatic.com/media/c470d0_08bd659a8695409fa3ded96db08e2595~mv2.jpg/v1/crop/x_1820,y_0,w_4592,h_4667/fill/w_492,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/casal-adulto-lindo-feliz-sentado-no-lado-do-iate-assistindo-na-beira-mar-e-abracando-enqua.jpg"
                alt=""
              />
            </div>
          </section>
          <section id="services">
            <p>A LIV TE AJUDA COM: </p>
            <div id="services-content">
              <div className="img-text">
                <img
                  src="https://static.wixstatic.com/media/c470d0_f9b124432db14169a1afd0d26a02224b~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_f9b124432db14169a1afd0d26a02224b~mv2.png"
                  alt=""
                />
                <p>O aumento da sua renda</p>
              </div>
              <div className="img-text">
                <img
                  src="https://static.wixstatic.com/media/c470d0_453913f4d225497ebdfc2b07d16dacb5~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_453913f4d225497ebdfc2b07d16dacb5~mv2.png"
                  alt=""
                />
                <p>O cuidado das suas aplicações</p>
              </div>
              <div className="img-text">
                <img
                  src="https://static.wixstatic.com/media/c470d0_138ecd81081a44c19235de0953c6de8e~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_138ecd81081a44c19235de0953c6de8e~mv2.png"
                  alt=""
                />
                <p>A evolução do seu negócio</p>
              </div>
            </div>
            <a href="#products"> Conhecer os produtos</a>
          </section>

          <section id="iscas">
            <div className="slide-transition">
              <button onClick={prevSlide}>
                <CaretLeft />{" "}
              </button>

              <div className={`slide ${slides[currentSlide].class}`}>
                <img className="" src={slides[currentSlide].img} alt="" />
                <div className="text-btn">
                  <h1 className="">{slides[currentSlide].title}</h1>
                  <p>{slides[currentSlide].text}</p>
                  <p className="text2">{slides[currentSlide].text2}</p>
                  <a href={slides[currentSlide].href} target="_blank">
                    {slides[currentSlide].btn}
                  </a>
                </div>
              </div>
              <button onClick={nextSlide}>
                <CaretRight />
              </button>
            </div>
          </section>

          <section id="contact">
            {mobile ? (
              <div id="contact-content" className="container">
                <div className="text-container">
                  <h1>POR QUE SER TRATADO COMO MAIS UM?</h1>
                  <img
                    src="https://static.wixstatic.com/media/c470d0_82538e684bc44e86a538a5363a3d7889~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_82538e684bc44e86a538a5363a3d7889~mv2.png"
                    alt=""
                  />
                  <p>
                    Fazemos um diagnóstico das suas características e sugerimos
                    investimentos específicos para o seu perfil.
                  </p>
                  <a href="">Ter um atendimento personalizado</a>
                </div>
              </div>
            ) : (
              <div id="contact-content" className="container">
                <div className="text-container">
                  <h1>POR QUE SER TRATADO COMO MAIS UM?</h1>
                  <p>
                    Fazemos um diagnóstico das suas características e sugerimos
                    investimentos específicos para o seu perfil.
                  </p>
                  <a href="#products">Ter um atendimento personalizado</a>
                </div>
                <img
                  src="https://static.wixstatic.com/media/c470d0_82538e684bc44e86a538a5363a3d7889~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_82538e684bc44e86a538a5363a3d7889~mv2.png"
                  alt=""
                />
              </div>
            )}
          </section>

          <section id="calc">
            <div id="calc-content" className="container">
              <h1>Calculadora de investimentos</h1>
              <iframe
                className=".calc-iframe"
                src="https://typebot.co/my-typebot-mqm0epo"
                style={{
                  height: "500px",
                  border: "none",
                  overflow: "hidden",
                  backgroundColor: "none",
                }}
              ></iframe>
            </div>
          </section>

          <section id="bem-estar">
            {mobile ? (
              <div id="bem-estar-content" className="container">
                <div className="text-container">
                  <h1>
                    POUPE TEMPO
                    <br />
                    COM UMA ASSESSORIA
                  </h1>
                  <img
                    src="https://static.wixstatic.com/media/c470d0_5ee8a42172354778a4b6dc28a0044c42~mv2.png/v1/fill/w_261,h_261,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_5ee8a42172354778a4b6dc28a0044c42~mv2.png"
                    alt=""
                  />
                  <p>
                    Equilíbrio e bem estar são essenciais. Uma assessoria poupa
                    o seu tempo e dinheiro, com os primeiros desafios do mercado
                    financeiro.
                  </p>
                  <a href="#products">Poupar meus recursos</a>
                </div>
              </div>
            ) : (
              <div id="bem-estar-content" className="container">
                <img
                  src="https://static.wixstatic.com/media/c470d0_5ee8a42172354778a4b6dc28a0044c42~mv2.png/v1/fill/w_261,h_261,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_5ee8a42172354778a4b6dc28a0044c42~mv2.png"
                  alt=""
                />
                <div className="text-container">
                  <h1>
                    POUPE TEMPO
                    <br />
                    COM UMA ASSESSORIA
                  </h1>
                  <p>
                    Equilíbrio e bem estar são essenciais. Uma assessoria poupa
                    o seu tempo e dinheiro, com os primeiros desafios do mercado
                    financeiro.
                  </p>
                  <a href="#products">Poupar meus recursos</a>
                </div>
              </div>
            )}
          </section>

          <section id="resultados">
            <h1>A vida é feita de perspectivas, certo?</h1>
            <p>
              Aqui vão algumas ideias do que você pode fazer com os lucros dos
              seus investimentos
            </p>
            <div id="resultados-content" className="container">
              <div className="text-container" id="photos">
                <div className="trip">
                  <div className="filter">
                    <p>Viajar</p>
                  </div>
                </div>
                <div className="health">
                  <div className="filter">
                    <p>Investir na saúde da sua família</p>
                  </div>
                </div>
                <div className="bounty">
                  <div className="filter">
                    <p>Complementar a sua renda</p>
                  </div>
                </div>
              </div>
              <a href="#products">Dar um up no lifestyle</a>
            </div>
          </section>
          <section id="confidence">
            <h1>A GENTE SÓ INVESTE COM QUEM CONFIA</h1>
            <p>A LIV Capital é:</p>
            <div id="confidence-content" className="container">
              <div className="logo-text">
                <div className="image-text">
                  <img
                    src="https://static.wixstatic.com/media/c470d0_aab9f06982ef45ac9e907ca051b975a2~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_aab9f06982ef45ac9e907ca051b975a2~mv2.png"
                    alt=""
                  />
                  <p>Parceira do banco BTG Pactual</p>
                </div>
                <div className="image-text">
                  <img
                    src="https://static.wixstatic.com/media/c470d0_d6dc335a8ea2412690942444cb4dbdcb~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_d6dc335a8ea2412690942444cb4dbdcb~mv2.png"
                    alt=""
                  />
                  <p>Devidamente registrada na CVM</p>
                </div>
              </div>
              <video
                src={livCampanha}
                muted={false}
                controls={true}
                className="campanha"
              ></video>
              <p>
                Além disso, nossos sócios são especializados no mercado
                financeiro
              </p>
            </div>
            <div className="profiles">
              <div className="prof-text">
                <img
                  src="https://static.wixstatic.com/media/c470d0_c1a49e8c35cb43ac9aa936ddc3510594~mv2.png/v1/fill/w_280,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_c1a49e8c35cb43ac9aa936ddc3510594~mv2.png"
                  alt=""
                />
                <h1>Felipe Moraes</h1>
                <p>
                  Vasta experiência no mercado financeiro, com mais de 20 anos
                  no atendimento de patrimônios corporativos e familiares.
                </p>
              </div>
              <div className="prof-text">
                <img
                  src="https://static.wixstatic.com/media/c470d0_3a0714e82afd4efe92ffd8dc7ee33aea~mv2.png/v1/fill/w_279,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c470d0_3a0714e82afd4efe92ffd8dc7ee33aea~mv2.png"
                  alt=""
                  className="Rafa"
                />
                <h1>Rafael Plens</h1>
                <p>
                  É médico cardiologista formado pela USP e possui MBA em
                  Finanças pelo INSPER. Oferece assessoria especializada para
                  médicos e clientes de alta renda.
                </p>
              </div>
            </div>
            <a href="#products"> Investir com a LIV</a>
          </section>

          <section id="products">
            <div id="products-content">
              <div className="products-white">
                <div className="white-content">
                  <h1>Produtos para pessoas</h1>
                  <ul className="products">
                    <li>Carteiras administradas</li>
                    <li>Fundos exclusivos</li>
                    <li>400 fundos independentes</li>
                    <li>Previdência privada com multifundos</li>
                    <li>Carteiras de renda variável</li>
                    <li>Carteiras de renda fixa</li>
                    <li>Planejamento fiscal</li>
                    <li>Planejamento sucessório</li>
                    <li>Assessoria individualizada</li>
                  </ul>
                </div>
              </div>
              <div className="products-black">
                <div className="black-content">
                  <h1>Produtos para empresas</h1>

                  <ul className="products">
                    <li>Crédito</li>
                    <li>Câmbio</li>
                    <li>Previdência e seguros coletivos</li>
                    <li>Antecipação de recebíveis</li>
                    <li>Estruturação de dívidas</li>
                    <li>Investment Banking (IB)</li>
                    <li>Gestão de caixa</li>
                    <li>Mercado livre de energia</li>
                    <li>Compra de ativos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="socials">
            <a href="https://www.instagram.com/liv.capital/" target="_blank">
              <InstagramLogo className="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/livcapital/"
              target="_blank"
            >
              <LinkedinLogo className="Linkedin" weight="bold" />
            </a>
          </div>
          <p>Feito por Queijo&Goiabada</p>
        </footer>
      </body>
    </>
  );
}

export default App;
