import { parseISO, format } from 'date-fns';

export default function BzbDate({text}: {text: string}) {
  const date = parseISO(text);
  return (
    <time dateTime={text}>{format(date, 'dd-MM-yyyy')}</time>
  )
}
