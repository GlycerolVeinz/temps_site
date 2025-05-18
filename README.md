# Temporary Friends Band Website

> This is the official website for the band **Temporary Friends**, built using Next.js and Tailwind CSS. The site showcases the band's music, upcoming shows, streaming platforms, social media links, and band member profiles.

## Features

- **Landing Page**: A visually appealing landing page with a background image and the band's name.
- **Streaming Platforms**: Links to various platforms (Spotify, Apple Music, Deezer, etc.) where the band's music is available.
- **Upcoming Shows**: A section displaying upcoming shows with venue details, dates, times, and ticket links.
- **Social Media**: Links to the band's Instagram and contact email.
- **Music Section**: Displays the band's EPs with album covers and song lists.
- **Band Members**: Profiles of band members with photos, instruments, and contact information.
- **Responsive Design**: Fully responsive and optimized for all devices.

## Tech Stack

- **Framework**: Next.js (v15.3.1)
- **Styling**: Tailwind CSS (v4)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Geist and Geist Mono)

## Installation

1. Clone the repository:

### HTTP
```bash
   git clone https://github.com/GlycerolVeinz/temps_site.git
   cd temps_site
```

or 

### SSH
```bash
   git clone https://github.com/GlycerolVeinz/temps_site.git
   cd temps_site
```

2. Install dependencies:
```bash
   npm install
```

3. Run the development server:
```bash
   npm run dev
```

4. Open your browser and navigate to [localhost](http://localhost:3000).

## Configuration

The site uses a JSON configuration file located at `/public/config/configuration.json`. You can customize:

- **Color Theme**: Modify the `COLOR_THEME` object for custom colors.
- **Band Information**: Update the `ENV` object with the band's name, background image, and member details.
- **Platforms**: Add or update streaming, social, and show information in the `PLATFORMS` object.
- **EPs**: Add EP details in the `EPS` array.
- **Sections**: Modify the `SECTIONS` array to control which sections are displayed.

## Folder Structure

The project follows a standard Next.js structure:

- `app/`: Next.js app directory (layout, page, globals.css)
- `components/`: React components
  - `sections/`: Section components (BandMemberCard, EPCard, ShowCard, etc.)
  - `BandWebsite.jsx`: Main website component
  - `config.jsx`: Configuration loader
- `public/`: Public assets and configuration files
- `package.json`: Project metadata and dependencies
- `tailwind.config.js`: Tailwind CSS configuration

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint to check for code issues

## License

This project is licensed under the MIT License.

## Acknowledgments

- Next.js and React for the framework
- Tailwind CSS for styling
- Lucide React for icons
- Google Fonts for typography

---

© 2025 Temporary Friends. All rights reserved.