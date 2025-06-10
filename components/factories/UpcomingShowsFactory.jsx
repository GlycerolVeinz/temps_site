import React from "react";

import { COLOR_THEME } from "../config";
import { UpcomingShows, SectionHeader } from "../sections";

export default function UpcomingShowsFactory({ shows, onCopy, copiedLink }) {
    return <section id="upcoming-shows" className="my-16">
        <div>
            <SectionHeader title="Upcoming Shows" />
        </div>
        <UpcomingShows 
            shows={shows} 
            onCopy={onCopy} 
            copiedLink={copiedLink}
        />
        <p className={`${COLOR_THEME.textMuted} text-sm mt-4`}>
            Note: Date format is YYYY-MM-DD
        </p>
    </section>;
}