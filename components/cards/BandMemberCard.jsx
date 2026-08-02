import React from 'react';
import Image from 'next/image';
import { getMemberId } from '@/lib/ids';
import { urlFor } from '@/sanity/lib/image';
import styles from '@/components/styles/module/BandMember.module.css';
import textStyles from '@/components/styles/globals/text.module.css';


export default function BandMemberCard({ member }) {
  const memberId = getMemberId(member);

  return (
    <div className={styles.memberCardContainer} id={memberId}>
  
      <div className={styles.memberImageWrapper}>
        <Image 
          className={styles.memberImage} 
          src={member.photo ? urlFor(member.photo).width(300).height(300).auto('format').url() : (member.photoUrl || '')} 
          alt={`${member.firstName} ${member.lastName}`}
          width={300}
          height={300}
          sizes="(max-width: 768px) 100vw, 300px"
        />
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
          href={`mailto:${member.email}`}
          title={member.email}
        >
          {member.email}
        </a>
      </div>

    </div>
  );
}
