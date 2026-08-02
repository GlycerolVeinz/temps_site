'use client';

import React, { useState, useRef } from "react";
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import BandMemberCard from "@/components/cards/BandMemberCard";
import Overlay from "@/components/shared/Overlay";
import styles from '@/components/styles/module/BandMember.module.css';
import layoutStyles from '@/components/styles/globals/layout.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function BandMembersSection({ members }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const triggerRef = useRef(null);

  const handleOpen = (member, e) => {
    triggerRef.current = e.currentTarget;
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  return (
      <div 
        className={`${styles.bandMembersContainer} ${layoutStyles.cardGrid}`}
        style={{ '--card-min': '16rem' }}
      >
        {members.map((member) => (
          <div key={`member-${member.firstName}-${member.lastName}`}>
            {member.bio ? (
              <button 
                className={styles.memberButtonWrapper} 
                onClick={(e) => handleOpen(member, e)}
                aria-label={`View bio for ${member.firstName} ${member.lastName}`}
              >
                <BandMemberCard member={member} />
              </button>
            ) : (
              <BandMemberCard member={member} />
            )}
          </div>
        ))}

        <Overlay isOpen={!!selectedMember} onClose={handleClose}>
          {selectedMember && (
            <div className={styles.overlayInner}>
              <div className={styles.overlayImageWrapper}>
                <Image 
                  className={styles.overlayImage} 
                  src={urlFor(selectedMember.photo).width(800).auto('format').url()} 
                  alt={`${selectedMember.firstName} ${selectedMember.lastName}`}
                  width={800}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <div className={styles.overlayInfo}>
                <h2 className={textStyles.titleText}>{selectedMember.firstName} {selectedMember.lastName}</h2>
                <p className={textStyles.normalTextSecondary}>{selectedMember.instrument}</p>
                <div className={styles.bioText} dangerouslySetContent={{__html: selectedMember.bio}} />
                {/* Fallback if it's plain text */}
                {selectedMember.bio && typeof selectedMember.bio === 'string' && (
                  <p className={textStyles.normalText}>{selectedMember.bio}</p>
                )}
              </div>
            </div>
          )}
        </Overlay>
      </div>
  );
}