import { gql } from "@apollo/client";

export const CREATE_JOB = gql`
  mutation postJob(
    $jobTitle: String!
    $commitment: String!
    $companyName: String!
    $location: String!
    $email: String!
    $description: String!
    $applyUrl: String!
  ) {
    createUser(
      jobTitle: $jobTitle
      commitment: $commitment
      companyName: $companyName
      location: $location
      location: $email
      description: $description
      applyUrl: $applyUrl
    ) {
      title
    }
  }
`;
