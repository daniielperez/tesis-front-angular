import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import {
  DateSelectArg,
  EventClickArg,
  EventApi,
  CalendarOptions,
} from "@fullcalendar/angular";
import { INITIAL_EVENTS } from "../utils/event-utils";
import { EventInput } from "@fullcalendar/core";
import { UsuarioService } from "../../../_services";
import { HorarioFullCalendar } from "../../../_models";

const TODAY_STR = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
export const INITIAL_EVENTS2: EventInput[] = [
  // {
  //   title: "Repeticion evento",
  //   backgroundColor: "#00d68f",
  //   startTime: "10:00:00",
  //   endTime: "15:00:00",
  //   daysOfWeek: [1, 4, 2, 3, 5, 6, 7], // Repetir Lunes y Jueves
  // },
  // {
  //   id: "2",
  //   title: "Matematicas",
  //   backgroundColor: "#ff3d71",
  //   start: TODAY_STR + "T10:00:00",
  //   end: TODAY_STR + "T15:00:00",
  // },
];

@Component({
  selector: "ngx-horario",
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: "./horario.component.html",
  styleUrls: ["./horario.component.scss"],
})
export class HorarioComponent implements OnInit {
  constructor(private _usuarioService: UsuarioService) {}
  ready = false;
  @Input() initialEvents: EventInput[] = [];
  calendarOptions: CalendarOptions = {
    locale: "es",
    nowIndicator: true,
    allDaySlot: false,
    slotMinTime: "07:00",
    slotMaxTime: "22:00",
    titleFormat: {
      year: "numeric",
      month: "long",
      // day: "numeric",
    },
    eventTimeFormat: {
      // like '14:30:00'
      hour: "2-digit",
      hour12: true,
    },
    buttonText: {
      today: "Hoy",
      month: "Mes",
      week: "Semana",
      day: "Dia",
      list: "Lista",
    },
    height: "auto",
    dayHeaderFormat: { weekday: "long" },
    slotLabelFormat: { hour: "2-digit", hour12: true },
    headerToolbar: {
      // left: "prev,next today",
      left: "",
      center: "",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    initialView: "timeGridWeek",
    initialEvents: INITIAL_EVENTS2, // alternatively, use the `events` setting to fetch from a feed
    // events: INITIAL_EVENTS2, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: false,
    selectable: false,
    selectMirror: false,
    dayMaxEvents: false,
    // select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    // eventsSet: this.handleEvents.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  ngOnInit(): void {
    this.initialEvents.forEach((horario) => {
      INITIAL_EVENTS2.push(
        HorarioFullCalendar.HorarioFullCalendarDesdeJson(horario)
      );
    });
    this.ready = true;
    // this._usuarioService.getByDocuemnt("123456").subscribe((request) => {
    //   request.horarios.forEach((horario) => {
    //     this.ready = true;
    //     console.log(this.initialEvents);
    //     INITIAL_EVENTS2.push(
    //       HorarioFullCalendar.HorarioFullCalendarDesdeJson(horario)
    //     );
    //   });
    //   console.log(INITIAL_EVENTS2);
    // });
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.id}'`
      )
    ) {
      // clickInfo.event.remove();
    }
  }
}
