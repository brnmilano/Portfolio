type Types = 'Filled';

interface Props {
  color?: string;
  link?: string;
  type?: Types;
  width?: number;
}

const Youtube: React.FC<Props> = ({
  color = '#fff',
  link,
  type = 'Filled',
  width = 30,
}) => {
  function getIcon() {
    switch (type) {
      case 'Filled': {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width * 142.22 / 100}
            height={width}
            viewBox="0 0 49.654 34.913"
          >
            <path
              id="Icon_awesome-youtube"
              data-name="Icon awesome-youtube"
              d="M49.666,9.963a6.239,6.239,0,0,0-4.39-4.418C41.4,4.5,25.877,4.5,25.877,4.5s-15.527,0-19.4,1.044a6.239,6.239,0,0,0-4.39,4.418C1.05,13.86,1.05,21.992,1.05,21.992s0,8.132,1.038,12.029a6.146,6.146,0,0,0,4.39,4.348c3.872,1.044,19.4,1.044,19.4,1.044s15.527,0,19.4-1.044a6.146,6.146,0,0,0,4.39-4.348C50.7,30.123,50.7,21.992,50.7,21.992s0-8.132-1.038-12.029ZM20.8,29.374V14.609l12.978,7.383L20.8,29.374Z"
              transform="translate(-1.05 -4.5)"
              fill={color}
            />
          </svg>
        );
      }

      default:
        break;
    }
  }

  return link ? (
    <a
      href={link}
      id="youtube-front-academy"
      rel='noopener noreferrer'
      target='_blank'
    >
      {getIcon()}
    </a>
  ) : (
    <div>{getIcon()}</div>
  );
};

export default Youtube;