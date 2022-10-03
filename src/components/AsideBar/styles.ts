import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerAside = styled.div`
  width: 90%;
  align-items: center;
  justify-content: center;
`

export const ContainerMenu = styled.div`
  font-size: 20px;
  margin: 5px;
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SideTitle = styled.h1`
  font-size: 20px;
  margin: 5px;
`

export const ContainerWaterProductivity = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const SideCaption = styled.h2`
  font-size: 12px;
  margin: 5px;
`

export const ContainerHydrographicBasin = styled(Link)`
  display: flex;
  border: 2px solid #CAD5DE;
  align-items: center;
  font-size: 12px;
  padding: 5px;
  margin-bottom: 12px;
  text-align: center;
  text-decoration: none;
  color: black;
`

export const RaindropImage = styled.img`
  width: 20px;
  margin-right: 4px;
`

export const ContainerMilkProduction = styled.div`
  display: flex;
  border: 2px solid #CAD5DE;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const MilkProductionText = styled.p`
  font-size: 14px;
`

export const ContainerDivsMilkProduction = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const ContainerImageMilkProduction = styled.div`
  display: flex;
  align-items: center;
`

export const CowImage = styled.img`
  width: 26px;
`

export const LinkPasto = styled(Link)`
  text-decoration: none;
  color: black;
`

export const DivsMilkProduction = styled(Link)`
  display: flex;
  border: 2px solid #CAD5DE;
  font-size: 12px;
  padding: 5px;
  margin: 5px;
  margin-left: 0;
  text-decoration: none;
  color: black;
  width: 100%;
`

export const ContainerBroilerBirds = styled(Link)`
  margin: 5px;
  width: 95%;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  border: 2px solid #CAD5DE;
`

export const ContainerSwine = styled(Link)`
  margin: 5px;
  width: 95%;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  border: 2px solid #CAD5DE;
`