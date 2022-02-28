import Box from "Components/Box";
import Heading from "Components/Heading";
import FrontAcademy from "./FrontAcademy";
import MrGreen from "./MrGreen";
import styles from "./styles.module.scss";

export default function MoreProjects() {
  return (
    <Box className={styles.container}>
      <Box>
        <Heading color="white">
          Aqui você irá encontrar todos os meus projetos!
        </Heading>
      </Box>

      <Box display="flex" gap={20}>
        <MrGreen />
        <FrontAcademy />
      </Box>
    </Box>
  );
}
