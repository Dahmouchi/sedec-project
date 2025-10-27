import React from 'react';

interface WhatsappShareProps {
  programName?: string; // Name of the program/tour
  phoneNumber?: string; // in international format, e.g. "1234567890"
  className?: string;
  title?: string;
  message?: string; // Custom message override
}

const WhatsappShare: React.FC<WhatsappShareProps> = ({
  programName,
  phoneNumber,
  className,
  title = 'Share on WhatsApp',
  message,
}) => {
  const handleShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    
    // Default message if none provided
    const defaultMessage = programName 
      ? `Check out this amazing tour: ${programName} - ${url}`
      : `Check out this amazing tour: ${url}`;
    
    const text = message 
      ? encodeURIComponent(message)
      : encodeURIComponent(defaultMessage);

    const baseUrl = phoneNumber
      ? `https://wa.me/${phoneNumber}?text=${text}`
      : `https://wa.me/?text=${text}`;

    window.open(baseUrl, '_blank');
  };

  return (
    <button
      onClick={handleShare}
      aria-label={title}
      title={title}
      className={
        className ||
        'whatsapp-share-fixed-btn'
      }
     
    >
      <svg
        width="45"
        height="45"
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          width: '45px',
          height: '45px',
        }}
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.33C13.13 27.23 14.54 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.29 0-2.55-.23-3.74-.68l-.27-.1-4.28 1.39 1.4-4.17-.18-.28C7.23 18.04 7 16.54 7 15c0-5.01 4.06-9.07 9.07-9.07S25.13 9.99 25.13 15 21.07 25 16 25zm5.07-7.18c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.32 0 1.37.99 2.7 1.13 2.89.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
      </svg>
      
    </button>
  );
};

export default WhatsappShare;