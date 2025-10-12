/**
 * Test script to verify the configuration API endpoint
 * Run this with: node test-api.js
 */

async function testConfigurationAPI() {
    try {
        const response = await fetch('http://localhost:3000/api/configuration');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const config = await response.json();
        
        console.log('✅ Configuration API test successful!');
        console.log('📊 Configuration data structure:');
        console.log({
            colorTheme: Object.keys(config.COLOR_THEME || {}).length + ' theme properties',
            bandName: config.ENV?.BAND_NAME || 'Not found',
            membersCount: config.ENV?.BAND_MEMBERS?.length || 0,
            streamingPlatforms: config.ENV?.PLATFORMS?.streaming?.length || 0,
            socialPlatforms: config.ENV?.PLATFORMS?.social?.length || 0,
            shows: config.ENV?.PLATFORMS?.shows?.length || 0,
            musicReleases: config.EPS?.length || 0,
            sections: config.SECTIONS?.length || 0
        });
        
        if (config.error) {
            console.log('⚠️  API returned an error:', config.error);
        }
        
    } catch (error) {
        console.error('❌ Configuration API test failed:', error.message);
        console.log('💡 Make sure:');
        console.log('   - The Next.js dev server is running (npm run dev)');
        console.log('   - MongoDB is running and accessible');
        console.log('   - The MONGODB_URI environment variable is set correctly');
        console.log('   - The collections exist in the TemporaryFriends database');
    }
}

// Run the test
testConfigurationAPI();
