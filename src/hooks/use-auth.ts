import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

interface LoginData {
  login: {
    token: string;
    user: { id: string; name: string; email: string };
  };
}

interface SignupData {
  signup: {
    token: string;
    user: { id: string; name: string; email: string };
  };
}

interface AuthVariables {
  email: string;
  password: string;
}

interface SignupVariables extends AuthVariables {
  name: string;
}

const LOGIN_MUTATION: TypedDocumentNode<LoginData, AuthVariables> = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user { id name email }
    }
  }
`;

const SIGNUP_MUTATION: TypedDocumentNode<SignupData, SignupVariables> = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user { id name email }
    }
  }
`;

export function useLogin() {
  return useMutation(LOGIN_MUTATION);
}

export function useSignup() {
  return useMutation(SIGNUP_MUTATION);
}
