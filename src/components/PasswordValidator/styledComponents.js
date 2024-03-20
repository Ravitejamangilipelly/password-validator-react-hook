import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #24263c;
`

export const PasswordValidatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  border-radius: 13px;
  width: 65%;
  height: 34vh;
  min-width: 324px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 51%;
    height: 43vh;
    min-width: 521px;
    max-width: 605px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 500;
  margin: 0;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 49px;
  }
`

export const Text = styled.p`
  color: #f8fafc;
  text-align: center;
  font-family: 'Roboto';
  font-size: 17px;
  width: 81%;
  margin-top: 13px;
  margin-bottom: 15px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    width: 100%;
    margin-top: 23px;
    margin-bottom: 29px;
  }
`

export const PasswordInput = styled.input`
  color: #475569;
  background-color: #edeeff;
  font-size: 15px;
  height: 44px;
  border: 1px solid #24263c;
  border-radius: 3px;
  margin-top: 15px;
  padding: 7px 15px;
  min-width: 281px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    height: 46px;
    margin-top: 27px;
    min-width: 382px;
  }
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 7px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
