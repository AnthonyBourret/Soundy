import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import fakeSongs from './fakeSongs';
import PlayIcon from '../../svg/playIcon';
import SongOverviewQuery from '../../queries/SongOverviewQuery';

function SongOverview(): JSX.Element {
  const { t } = useTranslation(['common', 'translation']);
  // use the query from appolo client to get the songs
  const { data, loading, error } = useQuery(SongOverviewQuery);
  const [songs, setSongs] = React.useState([]);

  useEffect(() => {
    if (data) {
      setSongs(data.songs);
      console.log(songs);
    }
  }, [data, songs]);

  useEffect(() => {
    if (loading) {
      console.log('Loading...');
    }
    if (error) {
      console.error('Error:', error);
    }
  }, [loading, error]);

  return (
    <div className="flex flex-col w-[60%] !items-start mb-[200px]">
      <h2 className="pl-2">{t('OVERVIEW_TITLE', { ns: 'translation' })}</h2>
      <div className="divider" />

      <div className="flex flex-wrap gap-5 justify-center xl:justify-between w-full my-7">
        {data && songs.map((song) => (
          <div className="card w-[17%] min-w-[115px] bg-base-200 shadow-xl border border-1 border-stone-700">
            <div className="card-body px-2 pt-2 pb-3 gap-1 group relative">
              <div className="relative mb-2 group">
                <figure className="aspect-[3/4] overflow-hidden rounded-md">
                  <img
                    // src={song.cover}
                    src="aza"
                    alt="aza"
                    // alt={song.title}
                    className="object-cover w-full h-full group-hover:blur-[1px] group-hover:scale-105 transition-all duration-200 ease-out"
                  />
                </figure>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-50 hover:cursor-pointer">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center pl-2 bg-base-200 bg-opacity-30 border border-1 border-primary">
                    <PlayIcon />
                  </div>
                </div>
              </div>
              <h3 className="self-center">
                {/* {song.title} */}
              </h3>
              <p className="self-center">
                {/* {song.artist} */}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex self-center mt-10 flex-col gap-5 items-center">
        <p className="text-center w-[60%]">{t('SERVICES_TXT_1', { ns: 'translation' })}</p>
        {/* <Link to="/listen" className="w-[40%] flex"> */}
        <button
          type="button"
          className="w-full btn btn-primary"
          onClick={() => console.log(data)}
        >
          {t('listen', { ns: 'common' })}
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default SongOverview;
