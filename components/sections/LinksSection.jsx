import React from "react";
import PlatformCard from "@/components/cards/PlatformCard";
import styled from "styled-components";
import styles from '@/components/styles/module/Platform.module.css';

const PlatformContainer = styled.section.attrs({ className: styles.platformContainer })``;

export default function PlatformsSection({ links, onCopy, copiedLink }) {
  return (
    <PlatformContainer>
        {links.map(link => (
          <PlatformCard
            key={link.id}
            platform={link}
            onCopy={onCopy}
            copiedLink={copiedLink}
          />
        ))}
    </PlatformContainer>
  );
}