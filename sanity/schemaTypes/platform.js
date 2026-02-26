import { defineType, defineField } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const platform = defineType({
    name: 'platform',
    title: 'Streaming Platform',
    type: 'document',
    icon: LinkIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'hasWrongAssociation',
            title: 'Has Wrong Association',
            type: 'boolean',
            description: 'If platform has associated us with wrong band',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'linkText',
            title: 'Link Text',
            type: 'string',
            description: 'Text to display for the link (e.g., "Listen on Spotify")',
            validation: (rule) => rule.required(),
        }),
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'linkText',
        },
    },
})