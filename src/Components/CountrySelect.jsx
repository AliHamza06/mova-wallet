import React from 'react';
import Select from 'react-select';

const countries = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'JP', label: 'Japan' },
  { value: 'CN', label: 'China' },
  { value: 'IN', label: 'India' },
  { value: 'BR', label: 'Brazil' },
  { value: 'RU', label: 'Russia' },
  { value: 'AU', label: 'Australia' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'KR', label: 'South Korea' },
  { value: 'MX', label: 'Mexico' },
  { value: 'CA', label: 'Canada' },
  { value: 'AR', label: 'Argentina' },
  { value: 'EG', label: 'Egypt' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'SA', label: 'Saudi Arabia' },
  // Add more countries as needed
];

const getCountryFlag = (countryCode) => {
  const countryFlagEmojis = {
    'US': '🇺🇸',
    'CA': '🇨🇦',
    'GB': '🇬🇧',
    'FR': '🇫🇷',
    'DE': '🇩🇪',
    'IT': '🇮🇹',
    'ES': '🇪🇸',
    'JP': '🇯🇵',
    'CN': '🇨🇳',
    'IN': '🇮🇳',
    'BR': '🇧🇷',
    'RU': '🇷🇺',
    'AU': '🇦🇺',
    'ZA': '🇿🇦',
    'KR': '🇰🇷',
    'MX': '🇲🇽',
    'CA': '🇨🇦',
    'AR': '🇦🇷',
    'EG': '🇪🇬',
    'NG': '🇳🇬',
    'SA': '🇸🇦',
    // Add more country codes and emojis as needed
  };
  return countryFlagEmojis[countryCode] || '';
};

const CountrySelect = () => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
    }),
    control: (provided) => ({
      ...provided,
      width: 165,
      padding : 10
    }),
  };

  const formatOptionLabel = ({ value, label }) => (
    <div>
      <span className="flag">{getCountryFlag(value)}</span>
      {label}
    </div>
  );
  const defaultValue = { value: 'ES', label: 'Spain' };
  return (
    <Select
      options={countries}
      isSearchable
      styles={customStyles}
      placeholder="Select a country"
      formatOptionLabel={formatOptionLabel}
      defaultValue={defaultValue}
      className='navSelectOption01'
    />
  );
};

export default CountrySelect;
