import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import CostumersSection from "../components/CostumersSection/CostumersSection"
import Perk from "../components/Perk/perk"
import BannerCarousel from "../components/Sites/BannerCarousel"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "gatsby"
import SEO from "../components/seo"
import ContactSection from "../components/ContactSection/ContactSection"


import modelo from "../images/1-1-modelo.svg"
import desenvolvimento from "../images/1-2-desenvolvimento.svg"
import entregas from "../images/1-3-entregas.svg"
import contrato from "../images/1-4-contrato.svg"


import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <SEO
        title="Websites"
        keywords={
          [
            `pré moldados`,
            `casa`,
            `construção`,
            `cachoeira do sul`,
            `obra`,
            `material de construção`,
          ]
        }
      />

      <Banner />

      <TextBlockImg
        id="processos"
        title="Processos"
        subtitle="Conheça o passo-a-passo, desde o projeto até a entrega do seu website"
      >
        <div className="flex-container trio-block">
          <Perk
            img={modelo}
            alt="Escolha de modelo e estrutura do site"
            title="Escolha de modelo e estrutura do site"
            content="Nessa etapa você vai discutir conosco como o site vai ser, se tem alguma inspiração e toda sua estrutura."
          />
          <Perk
            img={desenvolvimento}
            alt="Desenvolvimento"
            title="Desenvolvimento"
            content="Desenvolvimento personalizado e otimizado, abrangendo todas as métricas que os maiores buscadores avaliam para seu site ficar bem ranqueado."
          />
          <Perk
            img={entregas}
            alt="Entregas contínuas"
            title="Entregas contínuas"
            content="Para que você acompanhe os processos de desenvolvimento, fazemos pequenas entregas para que você aprove ou faça considerações de mudanças. Tudo do jeito que você gostar."
          />
          <Perk
            img={contrato}
            alt="Contrato de serviço"
            title="Contrato de serviço"
            content="Todo o trabalho vai estar assegurado por um contrato de serviço. Pode confiar."
          />
        </div>
      </TextBlockImg>

      <CostumersSection
        id="clientes"
        title="Clientes"
        subtitle="Essas empresas já confiaram no nosso trabalho e hoje lucram na internet"
      >
        <BannerCarousel />
      </CostumersSection>

      <div className="mx-auto" style={{ maxWidth: '600px' }}>
        <ContactSection />
      </div>

      {/* <TextBlock
        id="sobre"
        title="Você quer que as pessoas comprem de você quando pesquisam coisas na internet?"
        paragraph="Saiba como ter o seu próprio site faz você vender muito mais."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button cta="Saiba como!" />
        </Link>
      </TextBlock> */}

      {/* <Packages
        title="Our Packages"
        para="Choose the perfect solution for you. With benefits to suit all budgets Startup can offer amazing value and expert advice"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Standard">
            <ul>
              <li>
                <MdDone />1 User
              </li>
              <li>
                <MdDone />
                1GB Storage
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                24/7 Support
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="I want this!" />
            </Link>
          </Package>
          <Package title="Hyper" active={true}>
            <ul>
              <li>
                <MdDone />
                24/7 Support
              </li>
              <li>
                <MdDone />
                Dedicated Advisor
              </li>
              <li>
                <MdDone />
                Unlimited Storage
              </li>
              <li>
                <MdDone />
                Unlimited Users
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="I want this!" />
            </Link>
          </Package>
          <Package title="Super">
            <ul>
              <li>
                <MdDone />
                10 Users
              </li>
              <li>
                <MdDone />
                500GB Storage
              </li>
              <li>
                <MdDone />
                Advice Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages> */}

      {/* <Contact
        id="contact"
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      /> */}

      {/* TODO */}

      {/* banner */}

      {/* cards: Features dos sites */}

      {/* Projetos já realizados, fazer um mock das páginas no celular - FIgma */}

      {/* Mande-me uma mensagem no whatsapp agora mesmo! (caixa de texto com o mesmo formato do contato do whats e quando clica em enviar, bota o texto na api do whats) */}
    </Layout>
  </>
)
