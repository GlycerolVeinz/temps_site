import React from 'react';
import styled from 'styled-components';
import styles from '@/components/styles/module/SectionTitle.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

const SectionTitleText = styled.h2.attrs({ className: textStyles.titleText })``;
const SectionTitleContainer = styled.div.attrs({ className: styles.sectionTitleContainer })``;

export default function SectionTitle({ title, id }) {
  return (
    <SectionTitleContainer id={id}>
      <SectionTitleText>
        {title}
      </SectionTitleText>
    </SectionTitleContainer>
  );
}