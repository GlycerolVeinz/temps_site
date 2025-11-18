import React from 'react';
import { Copy } from 'lucide-react';
import styled from 'styled-components';
import styles from '@/components/styles/module/Platform.module.css';
import textStyles from '@/components/styles/globals/text.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';

const PlatformCardContainer = styled.div.attrs({ className: styles.platformCardContainer })``;
const PlatformHeader = styled.div.attrs({ className: styles.platformHeader })``;
const PlatformTitle = styled.h3.attrs({ className: textStyles.headerText })``;
const WarningBadge = styled.span.attrs({ className: styles.warningBadge })``;
const PlatformContent = styled.div.attrs({ className: styles.platformContent })``;
const PlatformActions = styled.div.attrs({ className: styles.platformActions })``;
const PlatformLink = styled.a.attrs({ className: textStyles.linkText })``;
const CopyButton = styled.button.attrs({ className: `${buttonStyles.copyButton} ${textStyles.normalText}` })``;
const CopiedBadge = styled.div.attrs({ className: `${styles.copiedBadge} ${textStyles.copiedMessage}` })``;

const WarningText = styled.span.attrs({ className: textStyles.warningText })``;

export default function PlatformCard({
  platform,
  onCopy,
  copiedLink
}) {
  return (
    <PlatformCardContainer id={platform.id}>
      <PlatformHeader>
        <PlatformTitle>
          {platform.title}
        </PlatformTitle>
        {platform.hasWrongAssociation && (
          <WarningBadge>
            <WarningText>⚠️ Name Clash</WarningText>
          </WarningBadge>
        )}
      </PlatformHeader>
      <PlatformContent>
        <PlatformLink
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {platform.linkText}
        </PlatformLink>
        <PlatformActions>
          <CopyButton onClick={() => onCopy(platform.url)}>
            <Copy size={16} />
          </CopyButton>
        </PlatformActions>
      </PlatformContent>
      {copiedLink === platform.url && (
        <CopiedBadge> Link copied! </CopiedBadge>
      )}
    </PlatformCardContainer>
  );
}