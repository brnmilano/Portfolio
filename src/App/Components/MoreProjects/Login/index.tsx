import Box from "Components/Box";
import Link from "next/link";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";

export default function Login() {
  return (
    <Box className={styles.projects}>
      <Box className={styles.teste}>
        <img
          className={styles.projectsImages}
          src="/images/login.png"
          alt="Página de Ligon"
        />

        <Box className={styles.projectsCard}>
          <Text weight="bold" color="white">
            Página de Login - Projeto pessoal para estudos.
          </Text>

          <Text size={14} weight="bold" color="white">
            Projeto proposto como desafio de uma comunidade de devs que faço
            parte. Projeto feito bem no inicio de minha carreira dev, onde
            aprendi conceitos de HTML e CSS.
          </Text>

          <Box display="flex" justifyContent="center">
            <Button classes={{ root: styles.button }}>
              <Link href="https://brnmilano.github.io/login-codelandia/">
                <a target="_blank">Veja o resultado final</a>
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
