import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "./logo.png"
import profileimg from "./profileimg.jpg"
import img from "./img.jpg"
import img1 from "./img1.jpg"
import {Link} from "react-router-dom"


const DPInput = ({userFirstName,
    setUserFirstName,
    userSecondName,
    setUserSecondName,
    userCountry,
    setUserCountry,
    userLocation,
    setUserLocation,
    userImage,
    setUserImage,
}) => {
  
    // const [userSecondName, setUserSecondName] = useState("")
    // const [userCountry, setUserCountry] = useState("")
    // const [userLocation, setUserLocation] = useState("")
    // const [userImage, setUserImage] = useState("")
    const [data, setData] = useState([
        {
            id: 1,
            firstname: "Confidence",
            secondname: "Efem",
            country: "Nigeria",
            site: "VIRTUAL",
            images: profileimg,

        },
        {
            id: 2,
            firstname: "Divine",
            secondname: "Innocent",
            country: "Nigeria",
            site: "LIVE",
            images: img,

        },
        {
            id: 3,
            firstname: "Joy",
            secondname: "Eddidong",
            country: "Canada",
            site: "VIRTUAL",
            images: img1,

        },
    ])

    // const NewCard = ()=>{
    //     const CardItems = {
    //         id: data.length +1,
    //         firstname: userFirstName,
    //         secondname: userSecondName,
    //         country: userCountry,
    //         site: userLocation,
    //         images: userImage,
    //     }
    //     setData([...data, CardItems])
    //     setUserFirstName("")
    //     setUserSecondName("")
    //     setUserCountry("")
    //     setUserLocation("")
    //     setUserImage("")
    // }
    const [displayImage, setDisplayImage] = useState("")

    const uploadImage = (e) =>{
        const file = e.target.files[0]
        const show = URL.createObjectURL(file)
        setDisplayImage(show)
        setUserImage(show)
    } 
    

     

    
    return (
        <Container userFirstName={userFirstName} >
            {/* {showInputs} */}
            <InputsBody>
        <MyImagesInput>
            <ImageBox src = {displayImage}/>
            <ChooseImageBox>
                <input type="file" onChange={uploadImage}/>
            </ChooseImageBox>
        </MyImagesInput>
        <TextInputs>
            <FirstName>
                <FirstNameText>First Name:</FirstNameText>
                <FirstNameInputs>
                    <input placeholder="Please put your first name"
                    value={userFirstName}
                    onChange={(e)=>{
                        setUserFirstName(e.target.value)
                    }}/>
                </FirstNameInputs>
            </FirstName>
            <SecondName>
                <SecondNameText>Second Name:</SecondNameText>
                <SecondNameInputs>
                    <input placeholder="Please put your second name"
                      value={userSecondName}
                      onChange={(e)=>{
                          setUserSecondName(e.target.value)
                      }}/>
                </SecondNameInputs>
            </SecondName>
            <SecondName>
                <SecondNameText>Your Country:</SecondNameText>
                <SecondNameInputs>
                    <input placeholder="Please put your Country"
                      value={userCountry}
                      onChange={(e)=>{
                          setUserCountry(e.target.value)
                      }}/>
                </SecondNameInputs>
            </SecondName>
            <SecondName>
                <SecondNameText>Your Location:</SecondNameText>
                <SecondNameInputs>
                    <input placeholder="Please put your location"
                    value={userLocation}
                    onChange={(e)=>{
                        setUserLocation(e.target.value)
                    }}/>
                </SecondNameInputs>
            </SecondName>
        </TextInputs>
           

    </InputsBody>
                
               
            <CreateButton 
              to="/detail"
                    onClick={()=>{
                    // setShowInputs(null)
                    // NewCard()
                
                  
                       
                    }} >Create DP</CreateButton>
            
        </Container>
    )
}

export default DPInput 

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
   height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    background-color: black;
    // height: 100vh;
`

const InputsBody = styled.div`
    width: 500px;
    height: 720px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5px;
    // background-color: white;
    margin-bottom: 10px;
`

const MyImagesInput = styled.div`
    width: 200px;
    height: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
    
`
const ImageBox = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 15px;
    background-color: white;
    margin-bottom: 20px;
    border: solid 1px darkgray;
`
const ChooseImageBox = styled.div`
    width: 200px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
   

    input{
        width: 90px;
        height: 30px;

    }
`
const TextInputs = styled.div`
    width: 350px;
    background-color: red;
    /* padding-left: 30px; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
   
`
const FirstName = styled.div`
    margin-bottom: 30px;
`
const FirstNameText = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    
`
const FirstNameInputs = styled.div`
    input{
        width: 270px;
        height: 35px;
        color: black;
    }
`
const SecondName = styled.div`
    margin-bottom: 30px;
`
const SecondNameText = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    
`
const SecondNameInputs = styled.div`
    input{
        width: 270px;
        height: 35px;
        color: black;
    }
`

const CreateButton = styled(Link)`
    width: 150px;
    height: 50px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    transform: scale(1);
    transition: all 350ms;
    margin-bottom: 20px;
    text-decoration: none;
    :hover{
        cursor: pointer;
        transform: scale(0.9);
    }
  
   

`

