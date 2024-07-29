import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center bg="$gray700" flex={1}>
      <Spinner color="$green500" />
    </Center>
  );
}
