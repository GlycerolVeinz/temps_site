import React from 'react';
import styled from 'styled-components';
import styles from '@/components/styles/module/BandMember.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

const MemberCardContainer = styled.div.attrs({ className: styles.memberCardContainer })``;
const MemberImageWrapper = styled.div.attrs({ className: styles.memberImageWrapper })``;
const MemberImage = styled.img.attrs({ className: styles.memberImage })``;
const MemberInfo = styled.div.attrs({ className: styles.memberInfo })``;
const MemberName = styled.h3.attrs({ className: textStyles.headerText })``;
const MemberInstrument = styled.p.attrs({ className: textStyles.normalTextSecondary })``;
const MemberContactLink = styled.a.attrs({ className: textStyles.linkText })``;


export default function BandMemberCard({ member }) {
  const memberId = `member-${member.firstName.toLowerCase()}-${member.lastName.toLowerCase()}`;

  return (
    <MemberCardContainer id={memberId}>
      <MemberImageWrapper>
        <MemberImage src={member.photo} alt={`${member.firstName} ${member.lastName}`} />
      </MemberImageWrapper>
      <MemberInfo>
        <MemberName>{member.firstName} {member.lastName}</MemberName>
        <MemberInstrument>{member.instrument}</MemberInstrument>
        <MemberContactLink
          href={`https://instagram.com/${member.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{member.instagram}
        </MemberContactLink>
        <MemberContactLink
          href={`mailto:${member.contactEmail}`}
          title={member.contactEmail}
        >
          {member.contactEmail}
        </MemberContactLink>
      </MemberInfo>
    </MemberCardContainer>
  );
}
