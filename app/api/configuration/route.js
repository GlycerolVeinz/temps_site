import { loadConfiguration } from './loader/loader.js';

export async function GET() {
    return await loadConfiguration();
}
