import { gql } from '@apollo/client'

export const USER_BY_NAME = gql`
  query ($username: String!) {
    user(name: $username) {
      id
      name
      password
    }
  }
`
