import { type ClassValue, clsx } from "clsx";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return format(date, 'dd MMMM yyy', { locale: fr })
}