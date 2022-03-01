import Box from "Components/Box";
import Cis from "./Cis";
import Heading from "Components/Heading";
import styles from "./styles.module.scss";
import Alura from "./Alura";

export default function MoreCertificates() {
  return (
    <Box className={styles.container}>
      <Box>
        <Heading color="white">
          Aqui você irá encontrar todos os meus certificados!
        </Heading>
      </Box>

      <Box display="flex" alignItems="center" gap={20}>
        <Cis />
        <Alura />
      </Box>
    </Box>
  );
}
