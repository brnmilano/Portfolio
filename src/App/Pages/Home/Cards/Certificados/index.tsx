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
        </Box>
      </Box>
    </Box>
  );
}
