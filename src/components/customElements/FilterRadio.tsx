import React from 'react';

interface Props {
  inputId: string;
  labelText: string;
}

function FilterRadio({ inputId, labelText }: Props) {
  return (
    <div className="form-control">
      <label htmlFor={inputId} className="label cursor-pointer">
        <span className="label-text px-2 font-semibold text-xs min-[860px]:text-sm">{labelText}</span>
        <input id={inputId} type="radio" name="radio-10" className="radio radio-xs min-[860px]:radio-sm bg-base-200" />
      </label>
    </div>
  );
}

export default FilterRadio;
