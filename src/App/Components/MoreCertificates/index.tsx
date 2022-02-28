import Box from 'Components/Box';
import Cis from './Cis';
import Heading from 'Components/Heading';
import styles from './styles.module.scss';

export default function MoreCertificates() {
  return(
    <Box className={styles.container}>
      <Box>
        <Heading color="white">Aqui você irá encontrar todos os meus certificados!</Heading>
      </Box>
      <Cis />
    </Box>
  );
}