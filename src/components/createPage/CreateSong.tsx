// File input is disabled because it is not supported by the current version of the library
// Some random data (same .mp3 link) will be sent to the server
import { ApolloError, useMutation } from '@apollo/client';
import React, {
  useState, useCallback, useMemo, FormEvent,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNewToast } from '../toastContext';
import { CreateSongMutation } from '../../requests/mutations';
import { Cover, Spinner } from '../customElements';
import { UploadIcon } from '../../svg';
import { SongCreateInput } from '../../types/__generated_schemas__/graphql';

function CreateSong() {
  const { t } = useTranslation('translation');
  const newToast = useNewToast();

  /**  The initial formData is stored in a state
   * @param {string} title - The title of the album
   * @param {string} cover - The cover of the album
   * @param {number} duration - The duration of the song
   * @param {number} release_year - The release year of the album
   * @param {string} lyrics - The lyrics of the song
   */

  const [formData, setFormData] = useState<SongCreateInput>({
    title: '',
    cover: '',
    duration: Math.floor(Math.random() * 1000) + 1,
    release_year: new Date().getFullYear(),
    lyrics: '',
  });

  // The createSong mutation is called when the form is submitted
  const [createSong, {
    error: createSongError,
    loading: createSongLoading,
  }] = useMutation(CreateSongMutation, {
    variables: {
      input: {
        title: formData.title,
        cover: formData.cover,
        duration: formData.duration,
        release_year: formData.release_year,
        lyrics: formData.lyrics,
      },
    },
  });

  // The handleInputChange function is called every time the form input changes
  const handleInputChange = useCallback((field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value });
  }, [formData, setFormData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      newToast('warning', t('CREATE_SONG_MISSING_TITLE'));
      return;
    }
    try {
      const response = await createSong();
      setFormData({
        title: '',
        cover: '',
        duration: Math.floor(Math.random() * 1000) + 1,
        release_year: new Date().getFullYear(),
        lyrics: '',
      });

      if (response) {
        newToast('success', t('CREATE_SONG_SUCCESS'));
      }
    } catch (error: unknown) {
      if (error instanceof ApolloError) {
        newToast('error', error.message);
      }
    }
    if (createSongError) {
      newToast('error', createSongError.message);
    }
  };

  const submitButton = useMemo(() => {
    if (createSongLoading) {
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
  }, [createSongLoading, t]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-14 border border-stone-700 rounded-box bg-neutral mb-24 w-[90%] px-4 py-10 min-[600px]:w-[80%] min-[1000px]:w-[70%]"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-center">{t('CREATE_SONG_HEADER')}</h1>
        <p className="text-xs text-center">{t('CREATE_PAGE_REQUIRED_FIELDS')}</p>
      </div>
      <div className="flex flex-col items-center gap-14 w-full min-[1000px]:flex-row min-[1000px]:w-[80%] min-[1000px]:justify-between">
        <div className="flex flex-col min-[1000px]:self-start gap-14 w-full min-[450px]:w-[80%] min-[1000px]:w-[45%]">

          {/* Title input */}
          <label className="form-control" htmlFor="title">
            <div className="label">
              <span className="label-text text-lg font-semibold">{t('CREATE_SONG_TITLE_INPUT')}</span>
            </div>
            <div className="divider my-0 mb-4" />
            <input
              type="text"
              placeholder={t('CREATE_SONG_TITLE_PLACEHOLDER')}
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="input input-bordered input-sm w-full"
            />
          </label>
          {/* Cover Input */}
          <label className="form-control" htmlFor="cover">
            <div className="label">
              <span className="label-text text-lg font-semibold">{t('CREATE_SONG_COVER_INPUT')}</span>
            </div>
            <div className="divider my-0 mb-4" />
            <Cover cover={formData.cover ?? ''} />
            <input
              type="url"
              placeholder={t('CREATE_SONG_COVER_PLACEHOLDER')}
              value={formData.cover ?? ''}
              onChange={(e) => handleInputChange('cover', e.target.value)}
              className="file-input file-input-bordered input-sm mt-4 w-full"
            />
          </label>
        </div>
        <div className="flex flex-col gap-6 w-full min-[450px]:w-[80%] min-[1000px]:w-[45%] min-[1000px]:self-start">
          <label className="form-control" htmlFor="file">
            <div className="label">
              <span className="label-text text-lg font-semibold">{t('CREATE_SONG_FILE_INPUT')}</span>
            </div>
            <div className="divider my-0 mb-4" />
            <input
              type="file"
              accept=".mp3, .wav"
              className="file-input file-input-bordered input-sm w-full"
              disabled
            />
            <div className="label self-center">
              <span className="label-text-alt">{t('CREATE_SONG_FILE_LABEL')}</span>
            </div>
          </label>
          {/* Lyrics Input */}
          <label htmlFor="lyrics" className="">
            <div className="label">
              <span className="label-text text-lg font-semibold">{t('CREATE_SONG_LYRICS_INPUT')}</span>
            </div>
            <div className="divider my-0 mb-4" />
            <textarea
              className="textarea textarea-bordered w-full min-h-[175px] text-ellipsis"
              placeholder={t('CREATE_SONG_LYRICS_PLACEHOLDER')}
              value={formData.lyrics ?? ''}
              onChange={(e) => handleInputChange('lyrics', e.target.value)}
            />
          </label>
        </div>
      </div>
      {submitButton}
    </form>
  );
}

export default CreateSong;
