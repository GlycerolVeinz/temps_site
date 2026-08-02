import { client } from './client';

/**
 * Utility for fetching data from Sanity CMS
 * Automatically applies { cache: 'no-store' } to ensure fresh data.
 * 
 * @param {string} query - The GROQ query
 * @param {object} params - Optional parameters for the query
 * @returns {Promise<any>}
 */
export async function fetchSanityData(query, params = {}) {
    return await client.fetch(query, params, { cache: 'no-store' });
}
