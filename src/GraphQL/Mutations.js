import { gql } from "@apollo/client";
export const POST_JOB = gql`
  mutation postJob(
    $title: String!
    $commitmentId: String!
    $companyName: String!
    $locationNames: String!
    $userEmail: String!
    $description: String!
    $applyUrl: String!
  ) {
    # console.log("posting job");
    postJob(
      title: $title
      commitmentId: $commitmentId
      companyName: $companyName
      locationNames: $locationNames
      userEmail: $userEmail
      description: $description
      applyUrl: $applyUrl
    ) {
      title,
    }

    # console.log("JOB POSTED");
  }
`;
// export const POST_JOB = gql`
//   mutation postJob(
//     $jobTitle: String!
//     $commitment: String!
//     $companyName: String!
//     $location: String!
//     $email: String!
//     $description: String!
//     $applyUrl: String!
//   ) {
//     postJob(input: {
//     title:"HI",
//     commitmentId:"cjtu8esth000z0824x00wtp1i",
//     companyName:"TRIMU",
//     locationNames:"XYZ",
//     userEmail:"snaiya@gmail.com",
//     description:"dcjedhckd",
//     applyUrl:"jddcjbdecj"
//   } {
//       title
//     }
//   }
// `;
