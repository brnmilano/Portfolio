import Box from "Components/Box";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Cis() {
  return (
    <Box className={styles.certified}>
      <Box>
        <img className={styles.certifiedImages} src="/images/cis.png" alt="" />

        <Button classes={{ root: styles.button }}>
          <Link href="https://imgur.com/7pvU7oq">
            <a className={styles.link} target="_blank">
              <Box className={styles.certifiedCard}>
                <Text weight="bold" color="white">
                  Método - CIS
                </Text>

                <Text weight="bold" color="white">
                  FEBRACIS, 2019
                </Text>

                <Text italic size={12} color="white">
                  Autenticidade: 0061l00000K5iN3QAJ$_$0011l0000164OiNQAQ
                </Text>
              </Box>
            </a>
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
