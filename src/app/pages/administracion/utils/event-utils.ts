import { EventInput } from "@fullcalendar/core";

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: "Administracion",
    start: TODAY_STR + "T08:00:00",
  },
  {
    id: createEventId(),
    title: "Matematicas",
    start: TODAY_STR + "T10:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
