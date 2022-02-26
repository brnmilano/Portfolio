import { motion } from 'framer-motion';

interface Props {
  delay?: number;
  width?: number | string;
}

export default function BounceAnimation({
  children,
  delay = 0,
  width = 150,
}: React.PropsWithChildren<Props>) {
  return (
    <motion.span
      animate={{
        y: ["-5px", "-20px"],
      }}
      initial="hidden"
      style={{
        display: "block",
        position: 'relative',
        width,
        height: 0,
        backgroundColor: "transparent",
      }}
      transition={{
        y: {
          delay,
          duration: 2.4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {children}
      </span>
    </motion.span>
  );
}
