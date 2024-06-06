// src/components/SignIn.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface SignInForm {
  email: string;
  password: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverBackground};
  }
`;

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm<SignInForm>();

  const onSubmit = (data: SignInForm) => {
    console.log(data);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email:</Label>
          <Input type="email" {...register("email", { required: true })} />
          <Label>Password:</Label>
          <Input
            type="password"
            {...register("password", { required: true })}
          />
          <Button type="submit">Sign In</Button>
        </Form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p>
          Forgot your password? <Link to="/reset-password">Reset Password</Link>
        </p>
      </FormWrapper>
    </Container>
  );
};

export default SignIn;
