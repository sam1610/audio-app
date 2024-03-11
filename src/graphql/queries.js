/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAudioRec = /* GraphQL */ `
  query GetAudioRec($id: ID!) {
    getAudioRec(id: $id) {
      id
      txt
      imageUrl
      audioUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAudioRecs = /* GraphQL */ `
  query ListAudioRecs(
    $filter: ModelAudioRecFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAudioRecs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        txt
        imageUrl
        audioUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
