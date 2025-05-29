import React from "react";

import { COLOR_THEME } from "../config";
import { SectionHeader, PlatformLink } from "../sections";

export default function StreamingSectionFactory({ streamingList, copyAction, copiedLink }) {
    return (
        <section id="streaming" className="my-16">
          <SectionHeader title="Streaming Platforms" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {streamingList.map(platform => (
              <PlatformLink
                key={platform.id}
                id={platform.id}
                title={platform.title}
                url={platform.url}
                linkText={platform.linkText}
                onCopy={copyAction}
                copiedLink={copiedLink}
                hasWrongAssociation={platform.hasWrongAssociation}
              />
            ))}
          </div>
          <p className={`${COLOR_THEME.textMuted} text-sm mt-4`}>
            Note: Our music may be found on other platforms as well, but we didn't find them all.
            If you find us on a platform not listed here, please let us know!
          </p>
        </section>
    );
}