import Box from 'Components/Box';
import Cantinho from './Cantinho';
import Depoimentos from './Depoimentos';
import DmRoldanas from './Dm';
import FrontAcademy from './FrontAcademy';
import Heading from 'Components/Heading';
import Login from './Login';
import Loki from './Loki';
import MrGreen from './MrGreen';
import styles from './styles.module.scss';
import TimeControl from './TimeControl';

export default function MoreProjects() {
  return (
    <Box className={styles.container}>
      <Box className={styles.title}>
        <Heading color="white">
          Aqui você irá encontrar todos os projetos que já fiz e já participei
          durante minha carreira como dev front-end!
        </Heading>
      </Box>

      <Box display="flex" alignItems="center" gap={20}>
        <MrGreen />
        <FrontAcademy />
      </Box>

      <Box display="flex" gap={20}>
        <Cantinho />
        <DmRoldanas />
      </Box>

      <Box display="flex" gap={20}>
        <TimeControl />
        <Depoimentos />
      </Box>

      <Box display="flex" gap={20}>
        <Login />
        <Loki />
      </Box>
    </Box>
  );
}
