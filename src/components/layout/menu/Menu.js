import { Link } from '../../../routes';

export default function Menu(props) {
  return (
    <Link {...props}>
      <a>{props.title}</a>
    </Link>
  );
}
