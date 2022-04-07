import Box from "Components/Box";
import styles from "./styles.module.scss";
import Apresentação from "./Apresentacao";
import Cards from "./Cards";

export default function Home() {
  return (
    <Box className={styles.container}>
      <Apresentação />
      <Cards />
    </Box>
  );
}
