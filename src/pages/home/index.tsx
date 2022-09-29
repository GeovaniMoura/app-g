import AsideBar from "../../components/AsideBar";
import Header from "../../components/header";
import * as S from './styles';

function Home() {
  return (
    <S.ContainerGeneral>
      <Header />
      <div>
        <S.ContainerMain>
          <S.DivWelcome>
            <S.BlockGray>
              <S.LogoImg></S.LogoImg>
            </S.BlockGray>
            <S.ContainerTextWelcome>
              <S.TitleWelcome>Seja bem vindos!</S.TitleWelcome>
              <S.ParagraphAbout>Esta webpage apresenta informações sobre o projeto de pesquisa <strong>“Avaliação da produtividade hídrica das atividades pecuárias e agrícolas associadas em uma bacia hidrográfica experimental localizada na Região Sul do Brasil”,</strong> desenvolvido através do Ph.D da Eng. Ambiental Sofia Helena Zanella Carra entre Out/2019- xx/2023, junto aos parceiros em destaque  </S.ParagraphAbout>
              <S.ParagraphAbout>1º Estudo sobre a temática no Brasil</S.ParagraphAbout>
            </S.ContainerTextWelcome>
          </S.DivWelcome>
          <div>
            <div>
              <AsideBar />
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </S.ContainerMain>
      </div>
    </S.ContainerGeneral>
  )
}

export default Home;