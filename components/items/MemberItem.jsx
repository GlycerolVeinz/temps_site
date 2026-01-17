import React from 'react';
import styles from '@/components/styles/module/BandMember.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function MemberItem({ member }) {
  const memberId = `member-${member.firstName.toLowerCase()}-${member.lastName.toLowerCase()}`;

  return (
    <div id={memberId} className={styles.memberCardContainer}>
      <div className={styles.memberImageWrapper}>
        <img 
          src={member.photo} 
          alt={`${member.firstName} ${member.lastName}`}
          className={styles.memberImage}
        />
      </div>
      <div className={styles.memberInfo}>
        <h3 className={textStyles.headerText}>
          {member.firstName} {member.lastName}
        </h3>
        <p className={textStyles.normalTextSecondary}>
          {member.instrument}
        </p>
        <a
          href={`https://instagram.com/${member.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className={textStyles.linkText}
        >
          @{member.instagram}
        </a>
        <a
          href={`mailto:${member.contactEmail}`}
          title={member.contactEmail}
          className={textStyles.linkText}
        >
          {member.contactEmail}
        </a>
      </div>
    </div>
  );
}
