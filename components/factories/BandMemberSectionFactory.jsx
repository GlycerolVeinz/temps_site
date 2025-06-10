import React from "react"
import { SectionHeader, BandMemberCard } from "../sections"

export default function BandMemberSectionFactory({ members }) {
    return (
        <section id="band-members" className="my-16">
        <SectionHeader title="Band Members" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member) => (
                <BandMemberCard key={`${member.firstName}-${member.lastName}`} member={member} />
            ))
            }
        </div>
        </section>
    )
}