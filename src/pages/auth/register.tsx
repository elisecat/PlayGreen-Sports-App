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
import { registerUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await registerUser(email, password);
    router.push('/auth/login');
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Sign up</Title>
        <Text>Please fill in all fields to complete the registration.</Text>
        <InputContainer>
          <Label htmlFor="user">User</Label>
          <StyledInput
            id="user"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <StyledInput
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <Button type="submit">Register</Button>
      </Form>
    </MainContainer>
  );
};
export default RegisterPage;