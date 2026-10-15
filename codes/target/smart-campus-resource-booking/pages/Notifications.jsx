import {
  CheckCircle2,
  Clock3,
  XCircle,
  Bell,
  CalendarDays,
  ArrowRight
} from "lucide-react"

function Notifications() {

  const notifications = [
    {
      id: 1,
      type: "approved",
      title: "Booking approved",
      message:
        "Your booking for Seminar Hall has been approved.",
      time: "10 minutes ago",
      date: "September 18, 2026",
      read: false
    },
    {
      id: 2,
      type: "pending",
      title: "Booking request submitted",
      message:
        "Your request for Computer Lab 101 is waiting for approval.",
      time: "2 hours ago",
      date: "September 15, 2026",
      read: false
    },
    {
      id: 3,
      type: "cancelled",
      title: "Booking cancelled",
      message:
        "Your Conference Room booking has been cancelled.",
      time: "Yesterday",
      date: "August 28, 2026",
      read: true
    },
    {
      id: 4,
      type: "approved",
      title: "Booking approved",
      message:
        "Your booking request for AI & ML Lab has been approved.",
      time: "2 days ago",
      date: "September 22, 2026",
      read: true
    }
  ]


  const getIcon = (type) => {

    if (type === "approved") {
      return (
        <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
          <CheckCircle2
            size={22}
            className="text-green-600"
          />
        </div>
      )
    }

    if (type === "pending") {
      return (
        <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
          <Clock3
            size={22}
            className="text-orange-600"
          />
        </div>
      )
    }

    return (
      <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center">
        <XCircle
          size={22}
          className="text-red-600"
        />
      </div>
    )
  }


  return (

    <div className="max-w-4xl">

      {/* Header */}

      <div className="flex items-start justify-between mb-8">

        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            Notifications
          </h1>

          <p className="text-slate-500 mt-2">
            Stay updated with your bookings and resource requests.
          </p>

        </div>

        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          Mark all as read
        </button>

      </div>


      {/* Summary */}

      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">

              <Bell
                size={20}
                className="text-blue-600"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Total
              </p>

              <p className="text-xl font-bold text-slate-900">
                4
              </p>

            </div>

          </div>

        </div>


        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">

              <Clock3
                size={20}
                className="text-orange-600"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Unread
              </p>

              <p className="text-xl font-bold text-slate-900">
                2
              </p>

            </div>

          </div>

        </div>


        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">

              <CheckCircle2
                size={20}
                className="text-green-600"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Approved
              </p>

              <p className="text-xl font-bold text-slate-900">
                2
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* Notifications */}

      <div className="space-y-3">

        {notifications.map((notification) => (

          <div
            key={notification.id}
            className={`bg-white border rounded-2xl p-5 transition hover:shadow-md ${
              notification.read
                ? "border-slate-200"
                : "border-blue-200 bg-blue-50/30"
            }`}
          >

            <div className="flex gap-4">

              {getIcon(notification.type)}

              <div className="flex-1">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <div className="flex items-center gap-2">

                      <h3 className="font-bold text-slate-900">
                        {notification.title}
                      </h3>

                      {!notification.read && (
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      )}

                    </div>

                    <p className="text-sm text-slate-500 mt-1">
                      {notification.message}
                    </p>

                  </div>

                  <span className="text-xs text-slate-400 whitespace-nowrap">
                    {notification.time}
                  </span>

                </div>


                <div className="flex items-center justify-between mt-4">

                  <div className="flex items-center gap-2 text-xs text-slate-500">

                    <CalendarDays size={15} />

                    {notification.date}

                  </div>


                  <button className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">

                    View booking

                    <ArrowRight size={14} />

                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Notifications