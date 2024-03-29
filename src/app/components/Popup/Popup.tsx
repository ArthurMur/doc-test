import React from 'react';
import styles from './Popup.module.scss';
import { ButtonClose } from '@/app/ui/ButtonClose/ButtonCLose';
import MythVsRealityItemMan from '../MythVsRealityItemMan/MythVsRealityItemMan';
import MythVsRealityItemDanger from '../MythVsRealityItemDanger/MythVsRealityItemDanger';

type Props = {
  onClose: () => void;
  index: number;
};

const Popup: React.FC<Props> = ({ onClose, index }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <ButtonClose onClick={onClose} className={styles.btnClose} />
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        {index === 1 ? <MythVsRealityItemMan /> : <MythVsRealityItemDanger />}
      </div>
    </div>
  );
};

export default Popup;
