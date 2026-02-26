import { defineType, defineField } from 'sanity'
import { MicrophoneIcon } from '@sanity/icons'

export const disc = defineType({
    name: 'disc',
    title: 'Disc',
    type: 'document',
    icon: MicrophoneIcon,
    fields: [
        defineField({
            name: 'cover',
            title: 'Cover Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'songs',
            title: 'Songs',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required().min(1),
        }),
    ],

    preview: {
        select: {
            title: 'title',
            media: 'cover',
        },
    },
})
