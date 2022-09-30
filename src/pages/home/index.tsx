import AsideBar from "../../components/AsideBar";
import Header from "../../components/Header";
import Welcome from "../../components/Welcome";
import * as S from './styles';

function Home() {
  return (
    <S.ContainerGeneral>

      <Header />

      <S.ContainerMain>
        <Welcome />

        <S.DivMain>

          <S.ContainerAside>
            <AsideBar />
          </S.ContainerAside>

          <S.ContainerCenter>

            <S.ContainerFarmsAndReasonsAndMethodology>

              <S.ContainerFarmsAndReasons>

                <S.ContainerProjectReasons>
                  <AsideBar />
                </S.ContainerProjectReasons>

                <S.ContainerEvaluatedFarms>
                  <AsideBar />
                </S.ContainerEvaluatedFarms>

              </S.ContainerFarmsAndReasons>

              <S.ContainerMethodology>
                <AsideBar />
              </S.ContainerMethodology>

            </S.ContainerFarmsAndReasonsAndMethodology>

            <S.ContainerProductivity>
              <AsideBar />
            </S.ContainerProductivity>

          </S.ContainerCenter>

        </S.DivMain>

      </S.ContainerMain>
      
    </S.ContainerGeneral>
  )
}

export default Home;