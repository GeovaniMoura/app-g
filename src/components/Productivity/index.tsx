import * as S from './styles';
import wulca from '../../images/wulca.png';
import footPrint from '../../images/footPrint.png';

function Productivity() {
  return (
    <S.ProductivityContainer>
      <S.WaterProductivityContainer>
        <S.TitleContainer>
          <S.Title>Produtividade hídrica (fazendas)</S.Title>
        </S.TitleContainer>
        <S.FormulaContainer>
            <S.pPH>PH = </S.pPH>
            <div>
              <p>kg produto produzido</p>
              <S.HrFormula />
              <p>água consumida (m3)</p>
            </div>
        </S.FormulaContainer>
        <S.BulletList>
          <S.LiBulletList>Produto produzido: leite, carcaça animal</S.LiBulletList>
          <S.LiBulletList>Água consumida: dessedentação, refrigeração e limpeza (direta) + produção alimento dieta animal (indireta)</S.LiBulletList>
        </S.BulletList>
      </S.WaterProductivityContainer>
      <S.WaterScarcityContainer>

        <S.TitleContainer>
          <S.Title>Escassez hídrica (bacia hidrográfica)</S.Title>
        </S.TitleContainer>

        <S.WulcaContainer
          href="https://wulca-waterlca.org/"
          target="_blank"
        >
          <S.WulcaImage src={wulca} alt="logo Wulca" />
          <p>AWARE - Available Water Remaining</p>
        </S.WulcaContainer>

        <S.FootPrintContainer
          href="https://waterfootprint.org/en/"
          target="_blank"
        >
          <S.FootPrintImage src={footPrint} alt="logo footprint" />
          <p>BWSI - Blue Water Scarcity Index</p>
        </S.FootPrintContainer>
      </S.WaterScarcityContainer>
    </S.ProductivityContainer>
  )
}

export default Productivity;