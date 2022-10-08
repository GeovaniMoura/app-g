import * as S from './styles';

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
      </S.WaterScarcityContainer>
    </S.ProductivityContainer>
  )
}

export default Productivity;