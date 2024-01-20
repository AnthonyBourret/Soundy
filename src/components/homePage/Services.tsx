import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../../types';
import SoundIcon from '../../svg/soundIcon';
import PlusIcon from '../../svg/plusIcon';

function Services(): JSX.Element {
  const { t } = useTranslation(['common', 'translation']);

  const serviceCards: ServiceCard[] = [
    {
      icon: <SoundIcon />,
      title: t('SERVICES_TITLE_LISTEN', { ns: 'translation' }),
      text: t('SERVICES_TXT_LISTEN', { ns: 'translation' }),
      buttonText: t('LISTEN', { ns: 'common' }),
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
    <div className="flex flex-wrap gap-[5vw] h-full mb-[200px] justify-center">
      {serviceCards.map((serviceCard) => (
        <div className="card max-w-[260px] bg-base-200 text-primary-content border border-1 border-stone-700" key={serviceCard.title}>
          <div className="card-body items-center gap-5">
            {serviceCard.icon}
            <h3 className="card-title">
              {serviceCard.title}
            </h3>
            <p>
              {serviceCard.text}
            </p>
            <Link to={serviceCard.link} className="w-full">
              <button type="button" className="btn w-full btn-primary">
                {serviceCard.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
