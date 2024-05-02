import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../header/Header';
import { ScrollToTopButton } from '../customElements';
import CreateAlbum from './CreateAlbum';
import CreateSong from './CreateSong';
import { Logo } from '../../svg';

type CreateProps = {
  isLogin: boolean;
};

function Create(props: CreateProps) {
  const { isLogin } = props;
  const { t } = useTranslation('translation');

  const [selectedType, setSelectedType] = useState<'song' | 'album'>('song');

  const addASong = useMemo(() => {
    if (selectedType === 'song') {
      return <CreateSong />;
    }
    return null;
  }, [selectedType]);

  const addAnAlbum = useMemo(() => {
    if (selectedType === 'album') {
      return <CreateAlbum />;
    }
    return null;
  }, [selectedType]);

  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <div className="pt-32">
        <div className="flex flex-col items-center gap-4 pb-8">
          <div className="w-16 h-16 min-[540px]:w-20 min-[540px]:h-20 rounded-full flex items-center justify-center">
            <Logo />
          </div>
          <h1 className="text-lg min-[540px]:text-3xl font-bold">{t('CREATE_PAGE_TITLE')}</h1>
        </div>
      </div>
      <div className="w-full flex gap-2 justify-center sm:gap-8">
        <button
          className={selectedType === 'song' ? 'btn py-4 btn-primary' : 'btn py-4'}
          type="button"
          onClick={() => setSelectedType('song')}
        >
          {t('CREATE_PAGE_BTN_SONG')}
        </button>
        <button
          className={selectedType === 'album' ? 'btn py-4 btn-primary' : 'btn py-4'}
          type="button"
          onClick={() => setSelectedType('album')}
        >
          {t('CREATE_PAGE_BTN_ALBUM')}
        </button>
      </div>
      <div className="divider py-4 px-8 min-[540px]:px-36" />
      {addASong}
      {addAnAlbum}

      <ScrollToTopButton />
    </div>
  );
}

export default Create;
