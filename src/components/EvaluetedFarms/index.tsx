import * as S from './styles';
import raindrop from '../../images/raindrop.png';
import farmer from '../../images/farmer.png';

function EvaluetedFarms() {
  return (
    <S.ContainerEvaluatedFarms>
      <S.TitleContainer>
        <S.TitleEvaluedFarms>
          Fazendas avaliadas
        </S.TitleEvaluedFarms>
      </S.TitleContainer>
      <S.QuantityAndHydrographicContainer>
        <S.QuantityFarmsContainer>
          <div>
            <S.FarmerImage src={farmer} alt="fazendeiro" />
          </div>
          <ul>
            <li>115 fazendas</li>
          </ul>
        </S.QuantityFarmsContainer>
        <S.HydrographicBasinContainer>
          <div>
            <S.RaindropImage src={raindrop} alt="gotas" />
          </div>
          <p>Bacia Hidrográfica Lajeado Tacongava (Brasil)</p>
        </S.HydrographicBasinContainer>
      </S.QuantityAndHydrographicContainer>
    </S.ContainerEvaluatedFarms>
  )
}

export default EvaluetedFarms;