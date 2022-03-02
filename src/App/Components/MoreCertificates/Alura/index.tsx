import Box from "Components/Box";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Alura() {
  return (
    <Box className={styles.certified}>
      <Box>
        <img
          className={styles.certifiedImages}
          src="/images/alura.png"
          alt="Alura"
        />

        <Button classes={{ root: styles.button }}>
          <Link href="https://imgur.com/i3zTnT1">
            <a className={styles.link} target="_blank">
              <Box className={styles.certifiedCard}>
                <Text weight="bold" color="white">
                  Formação Front-End
                </Text>

                <Text weight="bold" color="white">
                  Alura, 2021
                </Text>

                <Text italic size={12} color="white">
                  (HTML, CSS, JavaScript, React e Layouts Responsivos)
                </Text>
              </Box>
            </a>
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
