import * as S from './styles';
import raindrop from "../../images/raindrop.png"
import cow from "../../images/cow.png"

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
              <div>
                <S.DivsMilkProduction to="/pasture">
                  <p>A pasto</p>
                </S.DivsMilkProduction>
                <S.DivsMilkProduction to="/semi-confined">
                  <p>Semi-confinado</p>
                </S.DivsMilkProduction>
                <S.DivsMilkProduction to="/confined">
                  <p>Confinado</p>
                </S.DivsMilkProduction>
              </div>
            </S.ContainerDivsMilkProduction>
          </S.ContainerMilkProduction>
          <S.ContainerBroilerBirds to="/broiler-birds">
            <S.CowImage src={cow} alt="vaca" />
            <p>Aves de corte</p>
          </S.ContainerBroilerBirds>
          <S.ContainerSwine to="/swine">
            <p>Suínos</p>
          </S.ContainerSwine>
        </S.ContainerWaterProductivity>
        <div>
          <S.SideCaption>Escassez hídrica</S.SideCaption>
        </div>
        <div>
          <S.SideCaption>Quem somos</S.SideCaption>
        </div>
      </S.ContainerContent>
      </S.ContainerAside>
  )
}

export default AsideBar;