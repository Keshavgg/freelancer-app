"use client";

import { useEffect, useState } from "react";
import Select, { MultiValue, ActionMeta } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: OptionType[];
  name: string;
  defaultValue?: string[];
}

function MultiSelect({ options, name, defaultValue }: MultiSelectProps) {
  const [select, setSelect] = useState<OptionType[]>(
    defaultValue?.map((curr: string) => ({ value: curr, label: curr })) || [],
  );
  const handleChange = (
    newValue: MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>,
  ) => {
    setSelect(newValue as OptionType[]);
  };

  useEffect(() => {
    const hiddenInput = document.querySelector(
      `input[name="${name}"]`,
    ) as HTMLInputElement;
    if (hiddenInput) {
      hiddenInput.value = JSON.stringify(select.map((option) => option.value));
    }
  }, [select, name]);

  return (
    <div className="min-w-60">
      <Select
        options={options}
        isMulti
        value={select}
        onChange={handleChange}
      />
      <input type="hidden" name={name} />
    </div>
  );
}

export default MultiSelect;
