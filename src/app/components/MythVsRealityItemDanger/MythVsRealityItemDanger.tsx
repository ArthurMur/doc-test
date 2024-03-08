import Image from 'next/image';
import styles from './MythVsRealityItemDanger.module.scss';
import { mythVsRealityItemDanger } from '@/app/utils/constants';

const MythVsRealityItemDanger = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.text}>
          {mythVsRealityItemDanger.map((text, index) => (
            <p key={index} className={styles.desc}>
              {text.mainText}
            </p>
          ))}
        </div>
      </div>
      <p className={styles.subtitle}>Пятилетняя выживаемость пациентов</p>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <Image
            src={'/heart.svg'}
            width={81}
            height={132}
            alt="Иконка сердца"
            className={styles.icon}
          />
          <div className={styles.researchInfo}>
            <h1 className={styles.interest}>45,5&#37;</h1>
            <p className={styles.infoDesc}>
              пациентов с <b>сердечной недостаточностью</b>
              <sup>1</sup>
            </p>
            <p className={styles.research}>
              Популяционное когортное исследование (N=385)
            </p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <Image
            src={'/man.svg'}
            width={98}
            height={129}
            alt="Иконка человка"
            className={styles.icon}
          />
          <div className={styles.researchInfo}>
            <h1 className={styles.interest}>55,3&#37;</h1>
            <p className={styles.infoDesc}>
              пациентов с <b>инфарктом миокарда</b>
              <sup>1</sup>
            </p>
            <p className={styles.research}>
              Апостериорный анализ когортного исследования (N=2887)
            </p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <Image
            src={'/bladder.svg'}
            width={118}
            height={134}
            alt="Иконка мочевого пузыря"
            className={styles.icon}
          />
          <div className={styles.researchInfo}>
            <h1 className={styles.interest}>50,5&#37;</h1>
            <p className={styles.infoDesc}>
              пациентов с <b>раком мочевого пузыря</b>
            </p>
            <p className={styles.research}>
              Исследование Национальной статистической службы (N=42642)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MythVsRealityItemDanger;
