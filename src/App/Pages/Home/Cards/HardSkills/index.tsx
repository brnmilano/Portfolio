import Box from 'Components/Box';
import Heading from 'Components/Heading';
import styles from './styles.module.scss';
import Text from 'Components/Text';

export default function HardSkills() {
  return (
    <Box className={styles.container}>
      <Box className={styles.card}>
        <Heading color="white">Tecnologias e frameworks</Heading>

        <Box className={styles.lineShadow}></Box>
      </Box>
    </Box>
  );
}
