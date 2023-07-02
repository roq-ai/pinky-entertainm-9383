const mapping: Record<string, string> = {
  companies: 'company',
  gamings: 'gaming',
  'social-medias': 'social_media',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
