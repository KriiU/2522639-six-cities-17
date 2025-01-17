import cn from 'classnames';
import Header from '../../components/blocks/header/header';
import Footer from '../../components/blocks/footer';
import HeaderNav from '../../components/blocks/header/header-nav';
import Logo from '../../components/blocks/logo';
import { TypesPage } from '../../constants';
import { Title } from '../../components/blocks/title';
import {
  CurrentCityChangeType,
  FavoritesListType,
  TypesPageEnum,
} from '../../types/alltypes';
import { groupByList } from './utils';
import { FavoriteEmpty } from './components/favorites-empty';
import { FavoritesList } from './components/favorites-list';

type FavoritePageProps = {
  favorites: FavoritesListType;
  isLoggedIn: boolean;
  onCurrentCityChange: CurrentCityChangeType;
};

function FavoritesPage(props: FavoritePageProps): JSX.Element {
  const { favorites, isLoggedIn, onCurrentCityChange } = props;
  const typesPage: TypesPageEnum = TypesPage.Favorites;
  const groupedOffers = groupByList(favorites);
  const isEmpty = !Object.keys(groupedOffers).length;

  const pageClasses = cn('page', { ['page--favorites-empty']: isEmpty });
  const mainClasses = cn('page__main page__main--favorites', {
    ['page__main--favorites-empty']: isEmpty,
  });
  const sectionClasses = cn('favorites', {
    ['favorites--empty']: isEmpty,
  });
  const titleClasses = cn({
    ['favorites__title']: !isEmpty,
    ['visually-hidden']: isEmpty,
  });

  return (
    <div className={pageClasses}>
      <Header typesPage={typesPage}>
        <HeaderNav
          isLoggedIn={isLoggedIn}
          userName={'Oliver.conner@gmail.com'}
          favoriteCount={favorites.length}
        />
      </Header>
      <Title typesPage={typesPage} isEmpty={isEmpty} />
      <main className={mainClasses}>
        <div className="page__favorites-container container">
          <section className={sectionClasses}>
            <h1 className={titleClasses}>
              {isEmpty ? 'Favorites (empty)' : 'Saved listing'}
            </h1>
            {isEmpty ? (
              <FavoriteEmpty />
            ) : (
              <FavoritesList
                onCurrentCityChange={onCurrentCityChange}
                groupedOffers={groupedOffers}
                typesPage={typesPage}
              />
            )}
          </section>
        </div>
      </main>
      <Footer>
        <Logo typesPage={'main'} />
      </Footer>
    </div>
  );
}

export default FavoritesPage;
