import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const PreviousIcon: React.FC = () => {
  const goBack = (): void => {
    window.history.back();
  };

  return (
    <ArrowBackIcon
      onClick={goBack}
      aria-label="Previous Page"
      role="button"
      tabIndex={0}
    />
  );
};

export default PreviousIcon;