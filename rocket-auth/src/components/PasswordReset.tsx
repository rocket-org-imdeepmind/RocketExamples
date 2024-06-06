// src/components/PasswordReset.tsx
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface PasswordResetForm {
  email: string;
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

const PasswordReset: React.FC = () => {
  const { register, handleSubmit } = useForm<PasswordResetForm>();

  const onSubmit = (data: PasswordResetForm) => {
    console.log(data);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Reset Password</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email:</Label>
          <Input type="email" {...register("email", { required: true })} />
          <Button type="submit">Send OTP</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default PasswordReset;
