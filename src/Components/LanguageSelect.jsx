import React from 'react';
import Select from 'react-select';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'it', label: 'Italian' },
  { value: 'ja', label: 'Japanese' },
  { value: 'zh', label: 'Chinese' },
  { value: 'hi', label: 'Hindi' },
  { value: 'ar', label: 'Arabic' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'ru', label: 'Russian' },
  // Add more languages as needed
];

const getLanguageFlag = (languageCode) => {
  const languageFlagEmojis = {
    'en': '🇺🇸',
    'es': '🇪🇸',
    'fr': '🇫🇷',
    'de': '🇩🇪',
    'it': '🇮🇹',
    'ja': '🇯🇵',
    'zh': '🇨🇳',
    'hi': '🇮🇳',
    'ar': '🇸🇦',
    'pt': '🇵🇹',
    'ru': '🇷🇺',
    // Add more language codes and emojis as needed
  };
  return languageFlagEmojis[languageCode] || '';
};

const LanguageSelect = () => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 5,
    }),
    control: (provided) => ({
      ...provided,
      width: 200,
    }),
  };

  const formatOptionLabel = ({ value, label }) => (
    <div>
      <span className="flag">{getLanguageFlag(value)}</span>
      {label}
    </div>
  );

  // Set 'en' as the default language
  const defaultValue = { value: 'en', label: 'English' };

  return (
    <Select
      options={languages}
      isSearchable
      styles={customStyles}
      placeholder="Select a language"
      formatOptionLabel={formatOptionLabel}
      defaultValue={defaultValue}
      className='navSelectOption'
    />
  );
};

export default LanguageSelect;
