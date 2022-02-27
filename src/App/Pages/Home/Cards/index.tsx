import Box from 'Components/Box';
import Certificados from './Certificados';
import HardSkills from './HardSkills';
import LastProjects from './LastProjects';
import styles from './styles.module.scss';

export default function Cards() {
  return (
    <Box className={styles.container}>
      <HardSkills />
      <LastProjects />
      <Certificados />
    </Box>
  );
}
