import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DeleteModal from './DeleteModal';
const CurrentFavs = ({
  setFavorites,
  favorites,
  deleteFromFavorites,
  deleteAllFavs,
}) => {
  // useEffect(() => {

  // }, [favorites]);
  return (
    <div className="inner-wrap">
      {favorites ? (
        favorites.map((favorite) => (
          <div key={favorite.id}>
            <Link
              href={{
                pathname: '/favorites',
                query: { id: favorite.id },
              }}
            >
              <div className="image-wrapper">
                <Image
                  src={favorite.primary_photo_cropped.full}
                  width={200}
                  height={200}
                />
              </div>
            </Link>

            <div
              id={favorite.id}
              onClick={deleteFromFavorites}
              className="delete"
            />
          </div>
        ))
      ) : (
        <div className="center">
          <div className="add-favs">Add some favorites</div>
        </div>
      )}
      {favorites ? (
        <div className="wrapper">
          <DeleteModal deleteAllFavs={deleteAllFavs} />
        </div>
      ) : null}
    </div>
  );
};

export default CurrentFavs;
