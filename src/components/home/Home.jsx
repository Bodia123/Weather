import { Link } from 'react-router-dom';
import css from './Home.module.css';
function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Bogdan Weather</h1>
      <p>Популярні:</p>
      <div className={css.popular}>
        <Link to={`city/Pervomaysk`} className={css.link}>
          Первомайськ
        </Link>
        <Link to={`city/Kiev`} className={css.link}>
          Києв
        </Link>
        <Link to={`city/Hurgada`} className={css.link}>
          Хургада
        </Link>
      </div>
    </div>
  );
}

export default Home;
