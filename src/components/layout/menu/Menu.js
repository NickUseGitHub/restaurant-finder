import { Link } from '../../../routes';
import './menu.css';

export default function Menu(props) {
  const { title, ...restProps } = props;

  return (
    <Link {...restProps}>
      <a className="menu">{title}</a>
    </Link>
  );
}
