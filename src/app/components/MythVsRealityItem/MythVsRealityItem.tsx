'use client';
import Image from 'next/image';
import styles from './MythVsRealityItem.module.scss';
import { useState } from 'react';
import Popup from '../Popup/Popup';

type Props = {
  image: string;
  mainText: string;
  subText: React.ReactNode;
  index: number;
};

const MythVsRealityItem: React.FC<Props> = ({
  image,
  mainText,
  subText,
  index,
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className={styles.container} onClick={togglePopup}>
      <Image
        className={styles.imageIcon}
        src={image}
        alt="man-icon"
        width={80}
        height={80}
      />
      <div className={styles.subTextContainer}>
        <p className={styles.subText}>{subText}</p>
      </div>
      <p className={styles.mainText}>{mainText}</p>
      {isPopupOpen && <Popup onClose={togglePopup} index={index} />}
    </div>
  );
};

export default MythVsRealityItem;
