import { ApolloError, useMutation } from '@apollo/client';
import React, {
  useState, useMemo, useCallback, FormEvent,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNewToast } from '../toastContext';
import { CreateAlbumMutation } from '../../requests/mutations';
import CreateAlbumSongsSelection from './CreateAlbumSongsSelection';
import CreateAlbumSongsOrder from './CreateAlbumSongsOrder';
import { DefaultCover, CoverPicture, Spinner } from '../customElements';
import { secondsToFormatedDuration } from '../../utils';
import { AllSongs, AlbumFormData } from '../../types';
import { UploadIcon, ArrowDown } from '../../svg';

interface Props {
  setSelectedType: React.Dispatch<React.SetStateAction<'song' | 'album'>>;
}

function CreateAlbums({ setSelectedType }: Props) {
  const { t } = useTranslation('translation');
  const newToast = useNewToast();
  // Array of songs, standby API
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const songs = [
    {
      id: 1, title: 'Song title 1', duration: 135, cover: '',
    },
    {
      id: 2, title: 'Song title 2', duration: 445, cover: '',
    },
    {
      id: 3, title: 'Song title 3', duration: 45, cover: '',
    },
    {
      id: 4, title: 'Song title 4', duration: 89, cover: '',
    },
    {
      id: 5, title: 'Song title 5', duration: 78, cover: '',
    },
    {
      id: 6, title: 'Song title 6', duration: 94, cover: '',
    },
    {
      id: 7, title: 'Song title 7', duration: 256, cover: '',
    },
    {
      id: 8, title: 'Song title 8', duration: 485, cover: '',
    },
    {
      id: 9, title: 'Song title 9', duration: 457, cover: '',
    },
    {
      id: 10, title: 'Song title 10', duration: 94, cover: '',
    },
  ];
  const [selectedSongs, setSelectedSongs] = useState<AllSongs['songs']>([]);
  const [formData, setFormData] = useState<AlbumFormData>({
    title: '',
    cover: '',
    release_year: new Date().getFullYear(),
    songIds: [],
    songOnAlbum: [],
  });

  const [CreateAlbum, {
    error: createAlbumError,
    loading: createAlbumLoading,
  }] = useMutation(CreateAlbumMutation, {
    variables: {
      input: {
        title: formData.title,
        cover: formData.cover,
        release_year: formData.release_year,
        songIds: selectedSongs.map((song) => song.id),
        songOnAlbum: selectedSongs.map((song, index) => ({
          song_id: song.id,
          position: index + 1,
        })),
      },
    },
  });

  const handleInputChange = useCallback((
    field: string,
    value: string | number | number[] | Object,
  ) => {
    setFormData({ ...formData, [field]: value });
  }, [formData, setFormData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      songOnAlbum: selectedSongs.map((song, index) => ({
        song_id: song.id,
        position: index + 1,
      })),
    };
    setFormData(updatedFormData);

    if (selectedSongs.length === 0) {
      newToast(
        'warning',
        t('CREATE_ALBUM_NO_TRACKS_ERROR'),
      );
      return;
    }
    if (!formData.title) {
      newToast(
        'warning',
        t('CREATE_ALBUM_MISSING_TITLE_ERROR'),
      );
      return;
    }
    if (selectedSongs.length > 0 && formData.title) {
      try {
        const response = await CreateAlbum();
        setSelectedSongs([]);
        setFormData({
          title: '',
          cover: '',
          release_year: new Date().getFullYear(),
          songIds: [],
          songOnAlbum: [],
        });
        if (response) {
          newToast('success', t('CREATE_ALBUM_SUCCESS'));
        }
      } catch (error: unknown) {
        if (error instanceof ApolloError) {
          newToast('error', error.message);
        }
      }
      if (createAlbumError) {
        newToast('error', createAlbumError.message);
      }
    }
  };

  const trackOrder = useMemo(() => {
    if (selectedSongs.length > 0) {
      return (
        <label htmlFor="selected_songs" className="w-[85%] min-[1000px]:w-[75%]">
          <div className="label">
            <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_ORDER_INPUT')}</span>
          </div>
          <div className="divider my-0 mb-4" />
          <CreateAlbumSongsOrder
            selectedSongs={selectedSongs}
            setSelectedSongs={setSelectedSongs}
          />
          <p className="label-text font-semibold mt-4 text-center">
            {selectedSongs.length}
            {' '}
            {t('CREATE_ALBUM_TRACKS_NUMBER')}
            {' - '}
            {secondsToFormatedDuration(selectedSongs.reduce((acc, song) => acc + song.duration, 0))}
          </p>
        </label>
      );
    }
    return (
      <div className="w-[85%] min-[1000px]:w-[75%]">
        <div className="label">
          <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_ORDER_INPUT')}</span>
        </div>
        <div className="divider my-0 mb-4" />
        <p className="mt-4 font-semibold text-center">{t('CREATE_ALBUM_NO_TRACKS')}</p>
      </div>
    );
  }, [selectedSongs, t]);

  const coverPicture = useMemo(() => {
    if (formData.cover) {
      return (
        <CoverPicture cover={formData.cover} />
      );
    }
    return (
      <DefaultCover />
    );
  }, [formData.cover]);

  const submitButton = useMemo(() => {
    if (createAlbumLoading) {
      return (
        <Spinner />
      );
    }
    return (
      <button
        type="submit"
        className="btn btn-primary self-center py-3 mt-4 text-lg"
      >
        {t('CREATE_SONG_BTN')}
        <UploadIcon />
      </button>
    );
  }, [createAlbumLoading, t]);

  return (
    songs.length > 0 ? (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-14 w-[90%] min-[600px]:w-[80%] border border-stone-700 rounded-box bg-neutral mb-24 py-10 min-[1000px]:w-[70%]"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-center">{t('CREATE_ALBUM_HEADER')}</h1>
          <p className="text-xs text-center">{t('CREATE_PAGE_REQUIRED_FIELDS')}</p>
        </div>
        <div className="flex flex-col gap-14 items-center w-[95%] min-[1000px]:flex-row min-[1000px]:w-[75%] min-[1000px]:justify-between">
          <div className="flex flex-col gap-14 w-[85%] min-[1000px]:w-[45%]">
            {/* Title input */}
            <label className="form-control" htmlFor="title">
              <div className="label">
                <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_TITLE_INPUT')}</span>
              </div>
              <div className="divider my-0 mb-4" />
              <input
                type="text"
                placeholder={t('CREATE_ALBUM_TITLE_PLACEHOLDER')}
                className="input input-bordered input-sm w-full"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
              />
            </label>
            {/* Cover input */}
            <label className="form-control" htmlFor="cover">
              <div className="label">
                <span className="label-text text-lg font-semibold">{t('CREATE_SONG_COVER_INPUT')}</span>
              </div>
              <div className="divider my-0 mb-4" />
              {coverPicture}
              <input
                type="url"
                placeholder={t('CREATE_SONG_COVER_PLACEHOLDER')}
                className="file-input file-input-bordered input-sm mt-4 w-full"
                value={formData.cover}
                onChange={(e) => handleInputChange('cover', e.target.value)}
              />
            </label>
          </div>
          <label htmlFor="songs" className="w-[85%] min-[1000px]:w-[45%]">
            <div className="label">
              <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_SONGS_INPUT')}</span>
            </div>
            <div className="divider my-0 mb-4" />
            <CreateAlbumSongsSelection
              songs={songs}
              selectedSongs={selectedSongs}
              setSelectedSongs={setSelectedSongs}
              handleInputChange={handleInputChange}
            />
          </label>
        </div>
        {trackOrder}
        {submitButton}
      </form>
    ) : (
      <div className="flex flex-col items-center gap-14 w-[90%] min-[600px]:w-[80%] border border-stone-700 rounded-box bg-neutral mb-24 py-10 min-[1000px]:w-[70%]">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-center">{t('CREATE_ALBUM_HEADER')}</h1>
        </div>
        <p className="w-[85%] min-[1000px]:w-[45%] font-semibold text-center">{t('CREATE_ALBUM_NO_TRACKS_ADDED')}</p>
        <div className="flex flex-col items-center gap-2">
          <ArrowDown />
          <button type="button" className="btn btn-primary py-4" onClick={() => setSelectedType('song')}>
            {t('CREATE_PAGE_BTN_SONG')}
          </button>
        </div>
      </div>
    ));
}

export default CreateAlbums;
