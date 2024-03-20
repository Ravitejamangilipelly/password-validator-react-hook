import {useState} from 'react'

import {
  BgContainer,
  PasswordValidatorContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMessage = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <BgContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {showErrorMessage && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordValidatorContainer>
    </BgContainer>
  )
}

export default PasswordValidator
