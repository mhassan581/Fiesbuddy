import style from "@/styles/dashboard/calender.module.scss";
import { Calendar } from '@fullcalendar/core'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'

import { useRef } from "react";

export default function Calender() {

    const events = [
        { title: 'Meeting', start: new Date() }
      ]
      // a custom render function
        function renderEventContent(eventInfo:any) {
            return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
            )
        }
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
                eventContent={renderEventContent}
            />
        </>
    );
}
