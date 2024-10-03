import ClassRoom from './0-classroom.js';

/**
 * Initializes an array of ClassRooms with predefined sizes.
 * @returns Array of ClassRooms.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
