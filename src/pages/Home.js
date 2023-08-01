import { Text } from "@chakra-ui/react";
import image from './home_image.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};
  
export default function Home() {
  return (
    <div style={styles.container}>
      <img src={image} alt='phonebook' width='450px' />
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Phonebook welcome page
      </Text>
    </div>
  );
}
  