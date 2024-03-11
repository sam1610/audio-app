import { Image } from '@aws-amplify/ui-react';

export const FormDoc = ({img}) => {
  return (
    <Image
      width="100%"
      height="100%"
      objectFit="cover"
      objectPosition="50% 50%"
      src={img}
      alt="insert an image here "
    />
  );
};
