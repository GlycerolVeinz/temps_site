/**
 * Configuration loader for band website
 * Imports configuration from JSON file and exports components
 */
import configData from '../public/config/configuration.json';

// Extract configurations from the JSON file
export const ENV = configData.ENV;
export const EPS = configData.EPS;
export const SECTIONS = configData.SECTIONS;

// Export the entire config as default if needed
export default configData;