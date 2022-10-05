import * as S from './styles';
import raindrop from "../../images/raindrop.png";
import cow from "../../images/cow.png";
import chicken from '../../images/chicken.png';
import swine from '../../images/swine.png';
import oneDrop from '../../images/oneDrop.png';
import emoji from '../../images/emoji.png';

function AsideBar() {
  return (
    <S.ContainerAside>
      <S.ContainerMenu>
        <S.SideTitle>MENU</S.SideTitle>
      </S.ContainerMenu>
      <S.ContainerContent>
        <S.SideCaption>Área de estudo</S.SideCaption>
        <S.ContainerHydrographicBasin to="/hydrographic-basin">
          <S.RaindropImage src={raindrop} alt="gotas" />
          <p>Bacia hidrográfica</p>
        </S.ContainerHydrographicBasin>
        <S.ContainerWaterProductivity>
          <S.SideCaption>Produtividade Hídrica<br/>- fazendas -</S.SideCaption>
          <S.ContainerMilkProduction>
            <S.MilkProductionText>Produção de leite</S.MilkProductionText>
            <S.ContainerDivsMilkProduction>
              <S.ContainerImageMilkProduction>
                <S.CowImage src={cow} alt="vaca" />
              </S.ContainerImageMilkProduction>
              <S.MilkProductionLinksContainer>
                <S.DivsMilkProduction to="/pasture">
                  <p>A pasto</p>
                </S.DivsMilkProduction>
                <S.DivsMilkProduction to="/semi-confined">
                  <p>Semi-confinado</p>
                </S.DivsMilkProduction>
                <S.DivsMilkProduction to="/confined">
                  <p>Confinado</p>
                </S.DivsMilkProduction>
              </S.MilkProductionLinksContainer>
            </S.ContainerDivsMilkProduction>
          </S.ContainerMilkProduction>
          <S.ContainerBroilerBirds to="/broiler-birds">
            <S.IconContainer>
              <S.ChickenImage src={chicken} alt="galinha" />
            </S.IconContainer>
            <div>
              <p>Aves de corte</p>
            </div>
          </S.ContainerBroilerBirds>
          <S.ContainerSwine to="/swine">
            <S.IconContainer>
              <S.SwineImage src={swine} alt="porco" />
            </S.IconContainer>
            <p>Suínos</p>
          </S.ContainerSwine>
        </S.ContainerWaterProductivity>
        <S.ScarcityImpactsContainer>
          <S.SideCaption>Escassez hídrica</S.SideCaption>
          <S.ScarcityImpactsLinkContainer to="/scarcity-impacts">
            <S.IconContainer>
              <S.oneDropImage src={oneDrop} alt="uma gota"/>
            </S.IconContainer>
            <p>Impactos escassez</p>
          </S.ScarcityImpactsLinkContainer>
        </S.ScarcityImpactsContainer>
        <S.AuthorsContainer>
          <S.SideCaption>Quem somos</S.SideCaption>
          <S.AuthorsLinkContainer to="/authors">
            <S.IconContainer>
              <S.emojiImage src={emoji} alt="emoji sorriso"/>
            </S.IconContainer>
            <p>Autores</p>
          </S.AuthorsLinkContainer>
        </S.AuthorsContainer>
      </S.ContainerContent>
      </S.ContainerAside>
  )
}

export default AsideBar;