import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  maxWidth?: string;
  style?: React.CSSProperties;
  overflowHidden?: boolean;
}

/**
 * Define um max-width padrão, alinhando o componente no centro.
 */
const Container: React.FC<Props> = ({
  children,
  className,
  maxWidth = '1200px',
  style = {},
  overflowHidden = true,
}) => {
  const classes = clsx(styles.containerContainer, className, overflowHidden && styles.overflowHidden);

  return (
    <div
      className={classes}
      style={{
        maxWidth,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
