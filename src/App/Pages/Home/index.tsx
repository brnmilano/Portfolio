import Box from "Components/Box";
import styles from "./styles.module.scss";
import Apresentação from "./Apresentação";
import Cards from "./Cards";

export default function Home() {
  return (
    <Box className={styles.content}>
      <Apresentação />
      <Cards />
    </Box>
  );
}
