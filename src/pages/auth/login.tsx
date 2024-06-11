import {
  Button,
  Form,
  Title,
  Text,
  MainContainer,
  Link,
  InputContainer,
  Label,
  StyledInput,
} from "@/components/styledComponents/authStyles";
import { LoginUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let isValid = await LoginUser(email, password);
    if(isValid) {
      router.push("/home")
    }
    
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Sign in</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <InputContainer>
          <Label htmlFor="user">User</Label>
          <StyledInput
            id="user"
            type="email"
            placeholder="usuario@greenrun.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <StyledInput
            id="password"
            type="password"
            placeholder="*******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <Link>Forgot your password?</Link>
        <Button type="submit">Login</Button>
      </Form>
    </MainContainer>
  );
};

export default LoginPage;
