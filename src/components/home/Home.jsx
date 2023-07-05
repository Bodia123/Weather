import { Link } from 'react-router-dom';
import css from './Home.module.css';
import Moment from 'react-moment';
function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Bogdan Weather</h1>
      <div className={css.time}>
        <p className={css.currentTime}>
          Поточний час: {<Moment format="HH:mm" interval={30000} />}
        </p>
      </div>
      <p className={css.popularTitle}>Популярні:</p>
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
