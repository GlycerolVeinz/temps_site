import React from 'react';
import MemberItem from '@/components/items/MemberItem';
import styles from '@/components/styles/module/BandMember.module.css';

export default function BandMembersSection({ members }) {
  return (
    <div className={styles.bandMembersContainer}>
      {members.map((member) => (
        <MemberItem 
          key={`member-${member.firstName}-${member.lastName}`} 
          member={member} 
        />
      ))}
    </div>
  );
}
