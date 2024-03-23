import { jwtDecode } from 'jwt-decode';
import type { ProfileJWT } from '../types';

/**
 * Get user id from token
 * @param token
 * @returns
 */
function getUserIdFromToken(token: string): number {
  const decodedUser = jwtDecode<ProfileJWT>(token);
  const { id: userId } = decodedUser;
  return userId;
}

export default getUserIdFromToken;
