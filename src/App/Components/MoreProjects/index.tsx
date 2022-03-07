import Box from "Components/Box";
import Cantinho from "./Cantinho";
import Depoimentos from "./Depoimentos";
import DmRoldanas from "./Dm";
import FrontAcademy from "./FrontAcademy";
import Heading from "Components/Heading";
import Login from "./Login";
import Loki from "./Loki";
import MrGreen from "./MrGreen";
import styles from "./styles.module.scss";
import TimeControl from "./TimeControl";
import useIsMobile from "helpers/useIsMobile";

export default function MoreProjects() {
  const isMobile = useIsMobile({ mobileSize: 1350 });

  return (
    <Box className={styles.container}>
      <Box className={styles.title}>
        <Heading size={isMobile ? 28 : 36} color="white">
          Aqui você irá encontrar todos os projetos que já fiz e já participei
          durante minha carreira como dev front-end!
        </Heading>
      </Box>

      <Box>
        <Box className={styles.projects}>
          <MrGreen />
          <FrontAcademy />
        </Box>

        <Box className={styles.projects}>
          <Cantinho />
          <DmRoldanas />
        </Box>

        <Box className={styles.projects}>
          <TimeControl />
          <Depoimentos />
        </Box>

        <Box className={styles.projects}>
          <Login />
          <Loki />
        </Box>
      </Box>
    </Box>
  );
}
