import React from "react";
import BandMemberCard from "@/components/cards/BandMemberCard";
import styles from '@/components/styles/module/BandMember.module.css';


export default function BandMembersSection({ members }) {

  return (
      <div className={styles.bandMembersContainer}>
        {members.map((member) => (
          <BandMemberCard key={`member-${member.firstName}-${member.lastName}`} member={member} />
        ))}
      </div>
  );
}