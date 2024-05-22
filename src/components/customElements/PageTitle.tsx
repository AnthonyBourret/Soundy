import React, { useMemo } from 'react';
import { Logo } from '../../svg';

type Props = {
  title: string;
  subTitle?: string;
  bottomElement?: JSX.Element;
};

const PageTitle = (props: Props) => {
  const { title, bottomElement, subTitle } = props;

  const subTitleJSX = useMemo(() => {
    if (!subTitle) {
      return null;
    }
    return (
      <p className="text-md font-semibold min-[540px]:text-lg">
        {subTitle}
      </p>
    );
  }, [subTitle]);

  return (
    <>
      <div className="pt-32">
        <div className="flex flex-col items-center gap-4 pb-8">
          <div className="w-16 h-16 min-[540px]:w-20 min-[540px]:h-20 rounded-full flex items-center justify-center">
            <Logo />
          </div>
          <h1 className="text-xl min-[540px]:text-3xl font-bold">{title}</h1>
          {subTitleJSX}
        </div>
      </div>
      {bottomElement}
      <div className="divider py-4 px-8 min-[540px]:px-36" />
    </>
  );
};

export default PageTitle;
