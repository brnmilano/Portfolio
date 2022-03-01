import Box from "Components/Box";
import Heading from "Components/Heading";
import Cantinho from "./Cantinho";
import DmRoldanas from "./Dm";
import FrontAcademy from "./FrontAcademy";
import MrGreen from "./MrGreen";
import styles from "./styles.module.scss";

export default function MoreProjects() {
  return (
    <Box className={styles.container}>
      <Box className={styles.title}>
        <Heading color="white">
          Aqui você irá encontrar todos os projetos que já fiz e já participei
          durante minha carreira como dev front-end!
        </Heading>
      </Box>

      <Box display="flex" gap={20}>
        <MrGreen />
        <FrontAcademy />
      </Box>

      <Box display="flex" gap={20}>
        <Cantinho />
        <DmRoldanas />
      </Box>
    </Box>
  );
}
