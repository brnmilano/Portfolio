import Box from 'Components/Box';
import Heading from 'Components/Heading';
import styles from './styles.module.scss';
import Text from 'Components/Text';

export default function Certificados() {
  return (
    <Box className={styles.container}>
      <Box className={styles.card}>
        <Heading color="white">Certificados</Heading>
      </Box>
    </Box>
  );
}
