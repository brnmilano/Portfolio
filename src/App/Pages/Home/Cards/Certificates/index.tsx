import Box from 'Components/Box';
import Button from '@mui/material/Button';
import FadeInFromLeftWhenVisible from 'Components/Animations/FadeInFromLeftWhenVisible';
import FadeInWhenVisible from 'Components/Animations/FadeInWhenVisible';
import Heading from 'Components/Heading';
import styles from './styles.module.scss';
import Text from 'Components/Text';
import useIsMobile from 'helpers/useIsMobile';

export default function Certificados() {
  const isMobile = useIsMobile({ mobileSize: 1440 });
  const isTablet = useIsMobile({ mobileSize: 850 });

  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <FadeInWhenVisible>
          <Box className={styles.card}>
            <Box display="flex" justifyContent="between" alignItems="center">
              <Heading color="white" size={isMobile ? 28 : 36}>Certificados</Heading>
              <Button classes={{ root: styles.button }} href="certificados">
                Ver todos
              </Button>
            </Box>

            <Box className={styles.lineShadow}></Box>

            <FadeInFromLeftWhenVisible>
              <Box className={styles.certificates}>
                <Box className={styles.certificatesCard}>
                  <img
                    className={styles.certificatesImages}
                    src="/images/alura.png"
                    alt="Alura"
                  />
                  <Box>
                    <Text color="white">Formação Front-End</Text>
                    <Text color="white">Alura, 2021</Text>
                  </Box>
                </Box>
              </Box>
            </FadeInFromLeftWhenVisible>
          </Box>
        </FadeInWhenVisible>
      </Box>
    </Box>
  );
}
