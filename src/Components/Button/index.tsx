import ButtonBase from '@material-ui/core/ButtonBase';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './styles.module.scss';

export type ButtonType = 'primary' | 'secondary' | 'clear';

interface Props {
  buttonType?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean,
  id?: string;
  external?: boolean;
  onClick?: ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  type?: ButtonType;
}

export default function Button({
  buttonType,
  className,
  children,
  disabled,
  id,
  external,
  onClick,
  size,
  to,
  type,
}: React.PropsWithChildren<Props>) {
  const classes = clsx(
    styles.button,
    size === 'sm' && styles.sm,
    size === 'md' && styles.md,
    type === 'clear' && styles.clear,
    type === 'primary' && styles.primary,
    type === 'secondary' && styles.secondary,
  );

  const button = <div className={classes}>{children}</div>;

  return external ? (
    <a
      className={className}
      href={to}
      id={id}
      onClick={() => onClick && onClick()}
      rel='noopener noreferrer'
      style={{ textAlign: 'center', textDecoration: 'none' }}
      target='_blank'
    >
      <ButtonBase className={styles.buttonBase} id={id}>
        {button}
      </ButtonBase>
    </a>
  ) : to ? (
    <Link href={to}>
      <a
        className={className}
        id={id}
        onClick={() => onClick && onClick()}
        style={{ textAlign: 'center', textDecoration: 'none' }}
      >
        <ButtonBase className={`${styles.buttonBase} ${styles.noOutlineOnFocus}`} tabIndex={-1}>
          {button}
        </ButtonBase>
      </a>
    </Link>
  ) : (
    <ButtonBase
      className={`${styles.buttonContainer} ${styles.buttonBase} ${className}`}
      disabled={disabled}
      id={id}
      onClick={(event) => onClick && onClick(event)}
      type={buttonType}
    >
      {button}
    </ButtonBase>
  );
}
