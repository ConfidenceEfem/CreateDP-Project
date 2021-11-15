import React,{useState} from 'react'
import styled from 'styled-components'
import logo from "./logo.png"

const DPImage = ({userFirstName, userSecondName, userCountry, userLocation,userImage,}) => {




    return (
        <Container>
        <CardBodyHolder>
                {/* {data.map((props)=>( */}
                     <CardContainer>
                     <Header>
                             <Logo src={logo}/>
                             <NameofChurch>
                                 <TheName>Assemblies of God</TheName>
                                 <TheDepartment>Teens Department</TheDepartment>
                             </NameofChurch>
                             </Header>
                         <PictureandLive>
                         <MyPicture src={userImage} />
                         <LiveCont>{userLocation}</LiveCont>
                        </PictureandLive>
                        <NameandCountry>
                            <Myname>
                                <FirstNames>{userFirstName}</FirstNames>
                                <SecondNames>{userSecondName}</SecondNames>
                            </Myname>
                            <MyCountry>({userCountry})</MyCountry>
                        </NameandCountry>
                        <MyTopic>TECH FORUM</MyTopic>
                        <TopicLine></TopicLine>
                        <Footer>
                             <Time>11:00am prompt</Time>
                            <Date>23rd September, 2021</Date>
                            <Venue>Tinubu Multi-purpose Hall</Venue>
                            <Address>30 Ojo Road, Victoria Island, Lagos</Address> 
                        </Footer>
                     </CardContainer>
                {/* ))} */}
                </CardBodyHolder>
        </Container>
    )
}

export default DPImage 

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CardBodyHolder = styled.div`
    display: flex;
    flex-wrap: wrap;

`

const CardContainer = styled.div`
    width: 400px;
    height: 500px;
    border: solid gray 2px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 20px;
    transition: all 1s ease ;
    :hover{
        border: solid lightgray 2px;
    }

`

const Header = styled.div`
    width: 95%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    margin-bottom: 25px;
`
const Logo = styled.img`
    width: 55px;
    height: 100px;
    object-fit: contain;
`
const NameofChurch = styled.div`
    width: 200px;
    // background-color: red;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
`
const TheName = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: yellow;
`
const TheDepartment = styled.div``
const PictureandLive = styled.div`
    width: 95%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 10px;
    /* margin-left: -10px; */
    border: none;
    // background-color: red;
`
const MyPicture = styled.img`
    width: 150px;
    height: 150px;
    background-color: white;
    justify-content: center;
    align-items: center;
    border-radius: 90px;
    border: solid 2px lightgray;
    object-fit: cover;
`
const LiveCont = styled.div`
    // width: 30px;
    // height: 20px;
    background-color: white;
    color: red;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -20px;
    border-radius: 4px;
    margin-top: -10px;
`
const NameandCountry = styled.div`
    width: 95%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 25px;
    margin-left: -20px;
  
`
const Myname = styled.div`
    font-family: "times new roman";
    font-size: 20px;
    margin-right: 5px;
    width: 150px;
    height: 25px;
    display: flex;
    justify-content: flex-end;
`
const FirstNames = styled.div`
    margin-right: 3px;
    color: white;
`
const SecondNames = styled.div``
const MyCountry = styled.div`
    font-size: 8px;
    color: yellow;
   
`
const MyTopic = styled.div`
    height: 50px;
    font-size: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-family: "hobo std";
    margin-bottom: 3px;
    color: yellow;
    transition: all 2s ease ;
    :hover{
        color: white;
        cursor: pointer;
    }
`
const TopicLine = styled.div`
    width: 260px;
    height: 5px;
    background-color: yellow;
    margin-bottom: 30px;
    transition: all 2s ease ;
    :hover{
        background-color: white;
        cursor: pointer;
    }

`
const Footer = styled.div`
    width: 100%;
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Time = styled.div`
    // color: lightgray;
    font-size: 14px;
`
const Date = styled.div`
font-size: 14px;
`
const Venue = styled.div`
    font-size: 14px;
    font-weight: bold;
`
const Address = styled.div`
font-size: 14px;
    font-weight: bold;
    color: yellow;
`

