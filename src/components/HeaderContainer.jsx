import { Link } from 'react-router-dom';

export default function HeaderContainer() {
  return (
    <header>
      <h1>해보자고!</h1>

      <nav>
        <Link to="/">나의 목표</Link>
      </nav>
    </header>
  );
}
