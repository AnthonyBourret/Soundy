/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PencilIcon from '../../svg/PencilIcon';
import ProfileDeleteSong from './ProfileDeleteSong';
import { ListenPageSongsQueryQuery } from '../../types/__generated_schemas__/graphql';

type Props = {
  songId: number;
  song: ArrayElement<ListenPageSongsQueryQuery['songs']>;
};

const ProfileUpdateSong = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['common', 'translation']);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const modalId = 'update_song_modal';
  const { songId } = props;

  return (
    <>
      {/* Delete Account Button */}
      <div className="indicator-item indicator-top">
        <button
          type="button"
          onClick={openModal}
          className="absolute right-[-7px] top-[-7px] btn btn-outline
                aspect-square px-0 rounded-full bg-base-200 border border-1
                border-stone-700"
        >
          <PencilIcon />
        </button>
      </div>

      {isOpen && (
      <dialog id={modalId} className="modal" open>
        <form method="dialog" className="modal-box border-2 border-stone-700 pb-16">
          <p>En cours de modif song</p>
          <p>Champ 1</p>
          <p>Champ 2</p>
          <p>Champ 3</p>
          <p>Champ 4</p>

          <div className="absolute top-0 right-0 mt-4 mr-4 flex gap-2">
            <button
              className="btn btn-outline border-stone-700 border"
              onClick={closeModal}
              type="button"
            >
              Cancel
            </button>
            <button
              className="btn btn-success"
              type="button"
            >
              Save
            </button>
          </div>

          <ProfileDeleteSong closeParentModal={closeModal} songId={songId} />
        </form>

        {/* Modal backdrop */}
        <form method="dialog" className="modal-backdrop backdrop-brightness-50 backdrop-blur-[1px]">
          <button
            onClick={closeModal}
            type="submit"
          >
            {t('CLOSE')}
          </button>
        </form>
      </dialog>
      )}
    </>
  );
};
export default ProfileUpdateSong;
