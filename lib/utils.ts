import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const timeDifference = Date.now() - createdAt.getTime();

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  // Determine the appropriate time unit and value
  if (timeDifference < minute) {
    const seconds = Math.floor(timeDifference / 1000);
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (timeDifference < month) {
    const days = Math.floor(timeDifference / day);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (timeDifference < year) {
    const months = Math.floor(timeDifference / month);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years = Math.floor(timeDifference / year);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
};

export const formatBigNumber = (inputNumber: number): string => {
  if (inputNumber >= 1000000) {
    const millionValue = (inputNumber / 1000000).toFixed(2);
    return `${millionValue}M`;
  } else if (inputNumber >= 1000) {
    const thousandValue = (inputNumber / 1000).toFixed(2);
    return `${thousandValue}K`;
  } else {
    return inputNumber.toString();
  }
};
