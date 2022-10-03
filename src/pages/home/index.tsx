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
                <h1 style={{ fontSize: 20, margin: 5 }}>MENU</h1>
                </S.ContainerProjectReasons>

                <S.ContainerEvaluatedFarms>
                <h1 style={{ fontSize: 20, margin: 5 }}>MENU</h1>
                </S.ContainerEvaluatedFarms>

              </S.ContainerFarmsAndReasons>

              <S.ContainerMethodology>
              <h1 style={{ fontSize: 20, margin: 5 }}>MENU</h1>
              </S.ContainerMethodology>

            </S.ContainerFarmsAndReasonsAndMethodology>

            <S.ContainerProductivity>
            <h1 style={{ fontSize: 20, margin: 5 }}>MENU</h1>
            </S.ContainerProductivity>

          </S.ContainerCenter>

        </S.DivMain>

      </S.ContainerMain>
      
    </S.ContainerGeneral>
  )
}

export default Home;