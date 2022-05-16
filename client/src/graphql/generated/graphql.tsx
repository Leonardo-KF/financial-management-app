import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Bill = {
  __typename?: 'Bill';
  description: Scalars['String'];
  expiration: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  value: Scalars['Float'];
};

export type CreateBillInput = {
  description: Scalars['String'];
  expiration: Scalars['DateTime'];
  title: Scalars['String'];
  value: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBill: Bill;
  deleteBill: Bill;
  updateBill: Bill;
};


export type MutationCreateBillArgs = {
  data: CreateBillInput;
};


export type MutationDeleteBillArgs = {
  id: Scalars['String'];
};


export type MutationUpdateBillArgs = {
  data: UpdateBillInput;
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me: User;
};

export type UpdateBillInput = {
  description?: InputMaybe<Scalars['String']>;
  expiration: Scalars['DateTime'];
  title?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  bills: Array<Bill>;
  id: Scalars['ID'];
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', bills: Array<{ __typename?: 'Bill', title: string, value: number, description: string, expiration: any }> } };


export const MeDocument = gql`
    query Me {
  me {
    bills {
      title
      value
      description
      expiration
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;