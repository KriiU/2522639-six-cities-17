import { ReactNode } from 'react';
import { CityType } from '../../../types/alltypes';

type MainContentProps = {
  currentCity: CityType;
  offersCount: number;
  children: ReactNode[];
};

function MainContent(props: MainContentProps): JSX.Element {
  const { currentCity, offersCount, children } = props;
  const lastCharacter = offersCount !== 1 ? 's' : '';
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offersCount} {`place${lastCharacter}`} to stay in {currentCity}
      </b>
      {children}
    </>
  );
}

export { MainContent };
