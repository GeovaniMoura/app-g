import * as S from './styles';
import fao from '../../../../images/fao.png';
import foodAndAgriculture from '../../../../images/foodAndAgriculture.png';

function Methodology() {
  return (
    <S.ContainerMethodology>
      <S.ContainerImageAndMethodologyTitle>
        <S.FaoImageContainer
          href="https://www.fao.org/3/ca5685en/ca5685en.pdf"
          target="_blank"
        >
          <S.FaoImage src={fao} alt="fao org" />
        </S.FaoImageContainer>
        <S.FapLeapContainer
          href="https://www.fao.org/3/ca5685en/ca5685en.pdf"
          target="_blank"
        >
          <S.FapLeapTitleContainer>
            <S.FapLeapP>Metodologia</S.FapLeapP>
            <S.FapLeapP>"FAO LEAP Guidelines"</S.FapLeapP>
            <S.FapLeapP>2019</S.FapLeapP>
          </S.FapLeapTitleContainer>
          <S.FoodAndAgricultureImageContainer>
            <S.FoodAndAgricultureImage src={foodAndAgriculture} alt="fao org" />
          </S.FoodAndAgricultureImageContainer>
        </S.FapLeapContainer>
      </S.ContainerImageAndMethodologyTitle>
      <S.FapLeapTextContainer>
        <div>
          <p>Avaliação da produtividade hídrica<br></br>(escala de fazenda)</p>
        </div>
        <p>+</p>
        <p>Avaliação dos impactos associados a escassez hídrica<br></br>(bacia hidrográfica)</p>
      </S.FapLeapTextContainer>
    </S.ContainerMethodology>
  )
}

export default Methodology;
