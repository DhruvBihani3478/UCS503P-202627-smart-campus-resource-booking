import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Clock,
  MapPin
} from "lucide-react"

function Calendar() {

  const days = [
    { date: 31, current: false },
    { date: 1, current: true },
    { date: 2, current: true },
    { date: 3, current: true },
    { date: 4, current: true },
    { date: 5, current: true },
    { date: 6, current: true },

    { date: 7, current: true },
    { date: 8, current: true },
    { date: 9, current: true },
    { date: 10, current: true },
    { date: 11, current: true },
    { date: 12, current: true },
    { date: 13, current: true },

    { date: 14, current: true },
    { date: 15, current: true },
    { date: 16, current: true },
    { date: 17, current: true },
    { date: 18, current: true },
    { date: 19, current: true },
    { date: 20, current: true },

    { date: 21, current: true },
    { date: 22, current: true },
    { date: 23, current: true },
    { date: 24, current: true },
    { date: 25, current: true },
    { date: 26, current: true },
    { date: 27, current: true },

    { date: 28, current: true },
    { date: 29, current: true },
    { date: 30, current: true },
    { date: 1, current: false },
    { date: 2, current: false },
    { date: 3, current: false },
    { date: 4, current: false }
  ]


  const events = {
    11: [
      {
        resource: "Computer Lab 101",
        time: "10:00 AM - 11:00 AM",
        status: "booked"
      }
    ],

    15: [
      {
        resource: "Computer Lab 101",
        time: "10:00 AM - 11:00 AM",
        status: "mine"
      }
    ],

    18: [
      {
        resource: "Seminar Hall",
        time: "02:00 PM - 04:00 PM",
        status: "mine"
      }
    ],

    22: [
      {
        resource: "AI & ML Lab",
        time: "11:00 AM - 01:00 PM",
        status: "booked"
      }
    ],

    25: [
      {
        resource: "Conference Room",
        time: "09:00 AM - 10:00 AM",
        status: "booked"
      }
    ]
  }


  return (

    <div>

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            Calendar
          </h1>

          <p className="text-slate-500 mt-2">
            View resource bookings and availability.
          </p>

        </div>


        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">

          <CalendarDays size={18} />

          Today

        </button>

      </div>


      {/* Calendar */}

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

        {/* Calendar Header */}

        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

          <div className="flex items-center gap-4">

            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100">

              <ChevronLeft size={20} />

            </button>

            <h2 className="text-xl font-bold text-slate-900">
              September 2026
            </h2>

            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100">

              <ChevronRight size={20} />

            </button>

          </div>


          {/* Legend */}

          <div className="flex items-center gap-5 text-sm">

            <div className="flex items-center gap-2">

              <span className="w-3 h-3 rounded-full bg-blue-600"></span>

              My Booking

            </div>

            <div className="flex items-center gap-2">

              <span className="w-3 h-3 rounded-full bg-red-500"></span>

              Booked

            </div>

          </div>

        </div>


        {/* Week Days */}

        <div className="grid grid-cols-7 border-b border-slate-200">

          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ].map((day) => (

            <div
              key={day}
              className="py-3 text-center text-xs font-semibold text-slate-500 uppercase"
            >
              {day}
            </div>

          ))}

        </div>


        {/* Days */}

        <div className="grid grid-cols-7">

          {days.map((day, index) => {

            const dayEvents = events[day.date] || []

            return (

              <div
                key={index}
                className={`min-h-32 border-r border-b border-slate-200 p-3 ${
                  !day.current
                    ? "bg-slate-50"
                    : "bg-white"
                }`}
              >

                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${
                    day.date === 11 && day.current
                      ? "bg-blue-600 text-white"
                      : day.current
                        ? "text-slate-700"
                        : "text-slate-300"
                  }`}
                >
                  {day.date}
                </div>


                {/* Events */}

                <div className="mt-2 space-y-1">

                  {dayEvents.map((event, eventIndex) => (

                    <div
                      key={eventIndex}
                      className={`p-2 rounded-lg text-xs ${
                        event.status === "mine"
                          ? "bg-blue-50 text-blue-700 border border-blue-100"
                          : "bg-red-50 text-red-700 border border-red-100"
                      }`}
                    >

                      <p className="font-semibold truncate">
                        {event.resource}
                      </p>

                      <p className="mt-1 opacity-80">
                        {event.time}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            )
          })}

        </div>

      </div>


      {/* Upcoming */}

      <div className="mt-8">

        <h2 className="text-xl font-bold text-slate-900">
          Upcoming Bookings
        </h2>

        <p className="text-sm text-slate-500 mt-1 mb-5">
          Your upcoming resource reservations.
        </p>


        <div className="grid grid-cols-2 gap-5">


          {/* Booking 1 */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5">

            <div className="flex items-start justify-between">

              <div>

                <h3 className="font-bold text-slate-900">
                  Computer Lab 101
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  DBMS Project Presentation
                </p>

              </div>

              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                Your Booking
              </span>

            </div>


            <div className="flex flex-wrap gap-5 mt-5">

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <CalendarDays size={17} />

                September 15

              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <Clock size={17} />

                10:00 - 11:00

              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <MapPin size={17} />

                Block A

              </div>

            </div>

          </div>


          {/* Booking 2 */}

          <div className="bg-white border border-slate-200 rounded-2xl p-5">

            <div className="flex items-start justify-between">

              <div>

                <h3 className="font-bold text-slate-900">
                  Seminar Hall
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Technical Workshop
                </p>

              </div>

              <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                Approved
              </span>

            </div>


            <div className="flex flex-wrap gap-5 mt-5">

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <CalendarDays size={17} />

                September 18

              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <Clock size={17} />

                02:00 - 04:00

              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <MapPin size={17} />

                Block B

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Calendar