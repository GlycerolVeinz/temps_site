import { defineType, defineField } from 'sanity'
import { MicrophoneIcon } from '@sanity/icons'

export const show = defineType({
    name: 'show',
    title: 'Show',
    type: 'document',
    icon: MicrophoneIcon,
    fields: [
        defineField({
            name: 'dateTime',
            title: 'Date and Time',
            type: 'datetime',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'eventLink',
            title: 'Event Link',
            type: 'url',
            description: 'Link to the event page (e.g. Facebook, Instagram)',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'eventName',
            title: 'Event Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'googleMapsLink',
            title: 'Google Maps Link',
            type: 'url',
            description: 'Link to the venue location on Google Maps',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'Venue name and city (e.g., "The Roxy, Los Angeles, CA")',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'ticketLink',
            title: 'Ticket Link',
            type: 'url',
            description: 'Link to purchase tickets for the show',
        })
    ],

    preview: {
        select: {
            title: 'eventName',
            subtitle: 'location',
        },
    },
})


