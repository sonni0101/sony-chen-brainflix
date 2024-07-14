import { formatDistanceToNow } from 'date-fns';

export const formatTime = (timestamp) => {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};