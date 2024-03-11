/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAudioRec = /* GraphQL */ `
  mutation CreateAudioRec(
    $input: CreateAudioRecInput!
    $condition: ModelAudioRecConditionInput
  ) {
    createAudioRec(input: $input, condition: $condition) {
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
export const updateAudioRec = /* GraphQL */ `
  mutation UpdateAudioRec(
    $input: UpdateAudioRecInput!
    $condition: ModelAudioRecConditionInput
  ) {
    updateAudioRec(input: $input, condition: $condition) {
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
export const deleteAudioRec = /* GraphQL */ `
  mutation DeleteAudioRec(
    $input: DeleteAudioRecInput!
    $condition: ModelAudioRecConditionInput
  ) {
    deleteAudioRec(input: $input, condition: $condition) {
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
