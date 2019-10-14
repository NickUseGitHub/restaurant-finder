import { Link } from '../../../routes';
import './menu.css';

export default function Menu(props) {
  return (
    <Link {...props}>
      <a className="menu">{props.title}</a>
    </Link>
  );
}
