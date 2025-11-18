import React from "react";
import BandMemberCard from "@/components/cards/BandMemberCard";
import styles from '@/components/styles/module/BandMember.module.css';
import styled from "styled-components";

const BandMembersContainer = styled.div.attrs({ className: styles.bandMembersContainer })``;


export default function BandMembersSection({ members }) {

  return (
      <BandMembersContainer>
        {members.map((member) => (
          <BandMemberCard key={`member-${member.firstName}-${member.lastName}`} member={member} />
        ))}
      </BandMembersContainer>
  );
}