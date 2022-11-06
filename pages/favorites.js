import Link from 'next/link';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import CurrentFavs from '../components/browse/CurrentFavs';
import Header from '../components/Header';
import store from 'store/dist/store.modern.min';
import Loading from '../components/Loading';
import { useRouter } from 'next/router';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import FluffPic from '../components/browse/FluffPic';
import Footer from '../components/Footer';

const favorites = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState([]);
  const [currentId, setCurrentId] = useState(router.query.id);
  const [currentFluff, setCurrentFluff] = useState([]);

  // router.query.id ? setCurrentId(router.query.id) : setCurrentId(favorites[0].id);

  //Get anything from local storage and set it to favs state when the component mounts
  useEffect(() => {
    setFavorites(store.get('favs'));
    const x = currentItem(currentId);
    console.log(x, 'Current Item');
    setCurrentFluff(x);
    console.log(currentFluff, 'Current fluff');
  }, []);
  //When the favs state changes, save it to local storage
  useEffect(() => {
    store.set('favs', favorites);
  }, [favorites]);
  // When the currentId state changes, reload the component
  useEffect(() => {
    const item = currentItem(currentId);
    console.log(item, 'Current Item');
  }, [currentId]);

  const currentItem = (currId) => {
    const theItem = favorites.find((x) => x.id === currId);
    return theItem;
  };

  //TODO: Need to move these to a component as they are being repeated
  // Remove fav when user clicks small circle
  const deleteFromFavorites = (e) => {
    const selectedId = parseInt(e.target.id, 10);
    const itemRemoved = favorites.filter(
      (favorite) => favorite.id !== selectedId
    );
    setFavorites(itemRemoved);
  };
  // Delete all the favorites
  const deleteAllFavs = () => {
    setFavorites([]);
  };

  return (
    <div className="container">
      <Head as="h1" size="2xl" mb="2">
        <title>Find a Floof | Your Favorites</title>
        <link rel="icon" href="/logoDog.svg" />
      </Head>
      <Header />
      <div className="browse">
        <div className="picture-wrapper">
          <div className="picture">
            {/* <FluffPic src={currentFluff.primary_photo_cropped.full} /> */}
          </div>
          <div className="info">
            <p>This will be the information</p>
          </div>
        </div>
        <div className="faves-wrapper">
          <CurrentFavs
            key={favorites.id}
            deleteAllFavs={deleteAllFavs}
            setFavorites={setFavorites}
            deleteFromFavorites={deleteFromFavorites}
            favorites={favorites}
          />
        </div>
        <div className="center">
          <Link href="/">
            <span as="span">
              <ArrowLeftCircle size={22} />
            </span>
            &nbsp; Back to Browse
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default favorites;
