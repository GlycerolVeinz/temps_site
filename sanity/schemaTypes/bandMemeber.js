import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const bandMember = defineType({
    name: 'bandMember',
    title: 'Band Member',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'instrument',
            title: 'Instrument',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram Tag',
            type: 'string',
            description : 'Instagram username without @ (e.g., "john_doe")',
            validation: (rule) => rule.required().regex(/^[a-zA-Z0-9._]+$/, 'Instagram username can only contain letters, numbers, dots, and underscores'),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (rule) => rule.required().email().warning('Please enter a valid email address'),
        }),
    ],

    preview: {
        select: {
            title: 'firstName',
            subtitle: 'lastName',
            media: 'photo',
        },
    },
})

