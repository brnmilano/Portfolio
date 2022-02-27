type Types = 'Filled';

interface Props {
  color?: string;
  link?: string;
  type?: Types;
  width?: number;
}

const LinkedIn: React.FC<Props> = ({
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
            width={width}
            height={width}
            viewBox="0 0 37.41 37.41"
          >
            <path
              id="Icon_awesome-linkedin"
              data-name="Icon awesome-linkedin"
              d="M34.738,2.25H2.664A2.684,2.684,0,0,0,0,4.947V36.963a2.684,2.684,0,0,0,2.664,2.7H34.738a2.691,2.691,0,0,0,2.672-2.7V4.947A2.691,2.691,0,0,0,34.738,2.25ZM11.306,34.316H5.762V16.462h5.553V34.316ZM8.534,14.024a3.215,3.215,0,1,1,3.215-3.215A3.216,3.216,0,0,1,8.534,14.024ZM32.091,34.316H26.546V25.631c0-2.071-.042-4.735-2.881-4.735-2.889,0-3.332,2.255-3.332,4.584v8.835H14.789V16.462h5.319V18.9h.075a5.84,5.84,0,0,1,5.252-2.881c5.611,0,6.655,3.7,6.655,8.509Z"
              transform="translate(0 -2.25)"
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
      id="linkedin-front-academy"
      rel="noopener noreferrer"
      target="_blank"
    >
      {getIcon()}
    </a>
  ) : (
    <div>{getIcon()}</div>
  );
};

export default LinkedIn;