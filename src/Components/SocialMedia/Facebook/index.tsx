type Types = 'Clear';

interface Props {
  color?: string;
  link?: string;
  type?: Types;
  width?: number;
}

export default function Facebook({
  color = '#fff',
  link,
  type = 'Clear',
  width = 30,
}: Props) {
  function getIcon() {
    switch (type) {
      case 'Clear': {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width * 53.55 / 100}
            height={width}
            viewBox="0 0 24.447 45.645"
          >
            <path
              id="Icon_awesome-facebook-f"
              data-name="Icon awesome-facebook-f"
              d="M24.454,25.676l1.268-8.261H17.8V12.054c0-2.26,1.107-4.463,4.657-4.463h3.6V.558A43.944,43.944,0,0,0,19.66,0C13.132,0,8.865,3.957,8.865,11.119v6.3H1.609v8.261H8.865v19.97H17.8V25.676Z"
              transform="translate(-1.609)"
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
      id="facebook-front-academy"
      rel="noopener noreferrer"
      target="_blank"
    >
      {getIcon()}
    </a>
  ) : (
    <div>{getIcon()}</div>
  );
}
