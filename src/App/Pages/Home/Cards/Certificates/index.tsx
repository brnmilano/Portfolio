import Box from "Components/Box";
import Heading from "Components/Heading";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import Button from "@mui/material/Button";

export default function Certificados() {
  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <Box className={styles.card}>
          <Box display="flex" justifyContent="between" alignItems="center">
            <Heading color="white">Certificados</Heading>
            <Button classes={{ root: styles.button }} href="#text-buttons">
              Ver todos
            </Button>
          </Box>

          <Box className={styles.lineShadow}></Box>

          <Box className={styles.projects}>
            <Box className={styles.projectCard}>
              <img
                className={styles.projectsImages}
                src="/images/cis.png"
                alt=""
              />
              <Box>
                <Text color="white">Método - CIS</Text>
                <Text color="white">FEBRACIS, 2019</Text>
                <Text size={12} color="white">Autenticidade: 0061l00000K5iN3QAJ$_$0011l0000164OiNQAQ</Text>
              </Box>
            </Box>

            <Box className={styles.projectCard}>
              <img
                className={styles.projectsImages}
                src="/images/alura.png"
                alt=""
              />
              <Box>
                <Text color="white">Formação Front-End</Text>
                <Text color="white">Alura, 2021</Text>
                <Text size={12} color="white">Autenticidade: 0061l00000K5iN3QAJ$_$0011l0000164OiNQAQ</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
