import AsideBar from "../../components/AsideBar";
import EvaluetedFarms from "../../components/EvaluetedFarms";
import Header from "../../components/Header";
import ProjectReasons from "../../components/ProjectReasons";
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

                <ProjectReasons />

                <EvaluetedFarms />

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