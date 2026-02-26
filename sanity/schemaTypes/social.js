import { defineType, defineField } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const social = defineType({
    name: 'social',
    title: 'Social Media',
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
            name: 'url',
            title: 'URL',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'linkText',
            title: 'Link Text',
            type: 'string',
            description: 'Text to display for the link (e.g., "Follow us on Instagram")',
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