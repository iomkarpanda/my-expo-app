import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

interface DemoQueryData {
  __typename: string;
}

const DEMO_QUERY: TypedDocumentNode<DemoQueryData> = gql`
  query DemoQuery {
    __typename
  }
`;

export function useDemoQuery() {
  return useQuery(DEMO_QUERY);
}
