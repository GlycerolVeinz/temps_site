import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function loadConfiguration() {
    let client;
    try {
        // Connect to MongoDB
        client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db("TemporaryFriends");

        // Fetch all collections with error handling
        const [members, music, shows, socialPlatforms, streamingPlatforms] = await Promise.all([
            db.collection("Members").find({}).toArray().catch(() => []),
            db.collection("Music").find({}).toArray().catch(() => []),
            db.collection("Shows").find({}).toArray().catch(() => []),
            db.collection("SocialPlatforms").find({}).toArray().catch(() => []),
            db.collection("StreamingPlatforms").find({}).toArray().catch(() => [])
        ]);

        // Transform the data to match the expected format
        const configuration = {
            COLOR_THEME: {
                bgPrimary: "bg-stone-950",
                bgSecondary: "bg-stone-900",
                bgHighlight: "bg-orange-600",
                textPrimary: "text-stone-50",
                textSecondary: "text-stone-300",
                textMuted: "text-stone-400",
                textAccent: "text-orange-400",
                textSuccess: "text-green-400",
                borderAccent: "border-orange-500",
                hoverBg: "hover:bg-stone-800",
                hoverBgAccent: "hover:bg-orange-700",
                hoverUnderline: "hover:underline",
                overlayDark: "bg-stone-950 bg-opacity-80",
                cardBg: "bg-stone-900 bg-opacity-90"
            },
            ENV: {
                BAND_NAME: "Temporary Friends",
                BACKGROUND_IMAGE: "/group_images/_DSC0670.jpg",
                MENU_LOGO: "group_images/logo.svg",
                BAND_MEMBERS: members.map(member => ({
                    firstName: member.firstName,
                    lastName: member.lastName,
                    instrument: member.instrument,
                    instagram: member.instagram,
                    contactEmail: member.contactEmail,
                    photo: member.photo
                })),
                PLATFORMS: {
                    streaming: streamingPlatforms.map(platform => ({
                        id: platform.title ? platform.title.toLowerCase().replace(/\s+/g, '') : platform.id || Math.random().toString(36).substr(2, 9),
                        title: platform.title || 'Unknown Platform',
                        url: platform.url || '#',
                        linkText: platform.linkText || `Listen on ${platform.title || 'Platform'}`,
                        hasWrongAssociation: platform.hasWrongAssociation || false
                    })),
                    social: socialPlatforms
                        .filter(platform => platform.title || platform.venue) // Filter out invalid entries
                        .map(platform => ({
                            id: platform.title ? platform.title.toLowerCase().replace(/\s+/g, '') : platform.id || Math.random().toString(36).substr(2, 9),
                            title: platform.title || platform.venue || 'Unknown Platform',
                            url: platform.url || platform.eventLink || '#',
                            linkText: platform.linkText || `Visit ${platform.title || platform.venue || 'Platform'}`
                        })),
                    shows: shows.map((show, index) => ({
                        id: index,
                        venue: show.venue,
                        location: show.location,
                        date: formatDate(show.time),
                        time: formatTime(show.time),
                        ticketLink: show.ticketLink,
                        eventLink: show.eventLink,
                        googleMapsUrl: show.googleMapsUrl
                    }))
                }
            },
            EPS: music.map(album => ({
                title: album.title,
                cover: album.cover,
                songs: album.songs
            })),
            SECTIONS: [
                { id: "streaming", title: "Streaming Platforms" },
                { id: "shows", title: "Upcoming Shows" },
                { id: "social", title: "Social Media" },
                { id: "music", title: "Our Music" },
                { id: "bandmates", title: "Band Members" }
            ]
        };

        return NextResponse.json(configuration);
    } catch (error) {
        console.error("Error loading configuration:", error);
        
        // Return fallback configuration with sample data
        const fallbackConfiguration = {
            COLOR_THEME: {
                bgPrimary: "bg-stone-950",
                bgSecondary: "bg-stone-900",
                bgHighlight: "bg-orange-600",
                textPrimary: "text-stone-50",
                textSecondary: "text-stone-300",
                textMuted: "text-stone-400",
                textAccent: "text-orange-400",
                textSuccess: "text-green-400",
                borderAccent: "border-orange-500",
                hoverBg: "hover:bg-stone-800",
                hoverBgAccent: "hover:bg-orange-700",
                hoverUnderline: "hover:underline",
                overlayDark: "bg-stone-950 bg-opacity-80",
                cardBg: "bg-stone-900 bg-opacity-90"
            },
            ENV: {
                BAND_NAME: "Temporary Friends",
                BACKGROUND_IMAGE: "/group_images/_DSC0670.jpg",
                MENU_LOGO: "group_images/logo.svg",
                BAND_MEMBERS: [],
                PLATFORMS: {
                    streaming: [],
                    social: [],
                    shows: []
                }
            },
            EPS: [],
            SECTIONS: [
                { id: "streaming", title: "Streaming Platforms" },
                { id: "shows", title: "Upcoming Shows" },
                { id: "social", title: "Social Media" },
                { id: "music", title: "Our Music" },
                { id: "bandmates", title: "Band Members" }
            ],
            _fallback: true,
            _error: error.message
        };
        
        return NextResponse.json(fallbackConfiguration);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

// Helper function to format date
function formatDate(dateObj) {
    const date = new Date(dateObj.$date || dateObj);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month} ${year}`;
}

// Helper function to format time
function formatTime(dateObj) {
    const date = new Date(dateObj.$date || dateObj);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}