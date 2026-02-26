import React from 'react';
import { getMemberId } from '@/lib/ids';
import styles from '@/components/styles/module/BandMember.module.css';
import textStyles from '@/components/styles/globals/text.module.css';


export default function BandMemberCard({ member }) {
  const memberId = getMemberId(member);

  return (
    <div className={styles.memberCardContainer} id={memberId}>
      <div className={styles.memberImageWrapper}>
        <img className={styles.memberImage} src={member.photo} alt={`${member.firstName} ${member.lastName}`} />
      </div>
      <div className={styles.memberInfo}>
        <h3 className={textStyles.headerText}>{member.firstName} {member.lastName}</h3>
        <p className={textStyles.normalTextSecondary}>{member.instrument}</p>
        <a className={textStyles.linkText}
          href={`https://instagram.com/${member.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{member.instagram}
        </a>
        <a className={textStyles.linkText}
          href={`mailto:${member.contactEmail}`}
          title={member.contactEmail}
        >
          {member.contactEmail}
        </a>
      </div>
    </div>
  );
}
