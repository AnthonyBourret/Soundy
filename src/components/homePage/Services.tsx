import React from 'react';
import { useTranslation } from 'react-i18next';
import { ServiceCard } from '../../types';
import SoundIcon from '../../svg/soundIcon';
import PlusIcon from '../../svg/plusIcon';

function Services() {
  const { t } = useTranslation(['common', 'translation']);

  const serviceCards: ServiceCard[] = [
    {
      icon: <SoundIcon />,
      title: t('SERVICES_TITLE_LISTEN', { ns: 'translation' }),
      text: t('SERVICES_TXT_LISTEN', { ns: 'translation' }),
      buttonText: t('Listen', { ns: 'common' }),
      link: '/listen',
    },
    {
      icon: <PlusIcon />,
      title: t('SERVICES_TITLE_CREATE', { ns: 'translation' }),
      text: t('SERVICES_TXT_LISTEN', { ns: 'translation' }),
      buttonText: t('Create', { ns: 'common' }),
      link: '/create',
    },
  ];

  return (
    <div className="flex gap-[5vw] h-full mb-[200px]">

      {serviceCards.map((serviceCard) => (
        <div className="card max-w-[260px] bg-base-200 text-primary-content border border-1 border-stone-700">
          <div className="card-body items-center gap-5">
            {serviceCard.icon}
            <h3 className="card-title">
              {serviceCard.title}
            </h3>
            <p>
              {serviceCard.text}
            </p>
            <a href={serviceCard.link} className="w-full">
              <button type="button" className="btn w-full btn-primary">
                {serviceCard.buttonText}
              </button>
            </a>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Services;
