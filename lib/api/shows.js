import getApiClient from './client';

const formatDate = (iso) => {
  if (!iso) return 'TBA';
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(iso));
};

const formatTime = (iso) => {
  if (!iso) return '';
  return new Intl.DateTimeFormat('en-US', { timeStyle: 'short' }).format(new Date(iso));
};

export async function fetchShows() {
  const client = getApiClient();
  const { data } = await client.get('/shows');
  return data;
}

export async function getUpcomingShows() {
  try {
    const data = await fetchShows();

    if (!data.success) return [];

    const now = new Date();
    return data.result
      .filter((show) => show.dateTime && new Date(show.dateTime) >= now)
      .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
      .map((show) => ({
        ...show,
        formattedDate: formatDate(show.dateTime),
        formattedTime: formatTime(show.dateTime),
      }));
  } catch (err) {
    console.error('Shows fetch failed:', err);
    return [];
  }
}
