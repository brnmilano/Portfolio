import Box from "Components/Box";
import Professor from "./Professor";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <Box>
      <Box className={styles.content}>
        <Professor />
      </Box>
    </Box>
  );
}
