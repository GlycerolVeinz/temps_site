import { defineType, defineField } from 'sanity'
import { MicrophoneIcon } from '@sanity/icons'
import { slugify } from '@/lib/slugify'

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
            name: 'releaseDate',
            title: 'Release Date',
            type: 'date',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', slugify },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'songs',
            title: 'Songs',
            type: 'array',
            of: [{
                type: 'object', name: 'track',
                fields: [{ name: 'title', type: 'string' }, { name: 'lyrics', type: 'text' }],
            }],
        }),
    ],

    preview: {
        select: {
            title: 'title',
            media: 'cover',
        },
    },
})
