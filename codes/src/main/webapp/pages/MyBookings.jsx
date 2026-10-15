import { useState } from "react"
import {
  CalendarDays,
  Clock,
  Users,
  MapPin,
  XCircle,
  CheckCircle2,
  Clock3,
  ClipboardList
} from "lucide-react"

function MyBookings() {

  const [activeTab, setActiveTab] = useState("All")

  const [bookings, setBookings] = useState([
    {
      id: 1,
      resource: "Computer Lab 101",
      type: "Laboratory",
      location: "Block A • 2nd Floor",
      date: "September 15, 2026",
      time: "10:00 AM - 11:00 AM",
      participants: 30,
      purpose: "DBMS Project Presentation",
      status: "Pending"
    },
    {
      id: 2,
      resource: "Seminar Hall",
      type: "Hall",
      location: "Block B • Ground Floor",
      date: "September 18, 2026",
      time: "02:00 PM - 04:00 PM",
      participants: 80,
      purpose: "Technical Workshop",
      status: "Approved"
    },
    {
      id: 3,
      resource: "Conference Room",
      type: "Meeting Room",
      location: "Admin Block • 1st Floor",
      date: "August 28, 2026",
      time: "11:00 AM - 12:00 PM",
      participants: 12,
      purpose: "Project Meeting",
      status: "Completed"
    }
  ])


  const cancelBooking = (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    )

    if (!confirmed) return

    setBookings((currentBookings) =>
      currentBookings.map((booking) =>
        booking.id === id
          ? { ...booking, status: "Cancelled" }
          : booking
      )
    )
  }


  const filteredBookings =
    activeTab === "All"
      ? bookings
      : bookings.filter(
          (booking) => booking.status === activeTab
        )


  const getStatusStyle = (status) => {

    if (status === "Approved") {
      return "text-green-700 bg-green-50 border-green-200"
    }

    if (status === "Pending") {
      return "text-orange-700 bg-orange-50 border-orange-200"
    }

    if (status === "Cancelled") {
      return "text-red-700 bg-red-50 border-red-200"
    }

    return "text-slate-600 bg-slate-100 border-slate-200"
  }


  const getStatusIcon = (status) => {

    if (status === "Approved") {
      return <CheckCircle2 size={16} />
    }

    if (status === "Pending") {
      return <Clock3 size={16} />
    }

    if (status === "Cancelled") {
      return <XCircle size={16} />
    }

    return <CheckCircle2 size={16} />
  }


  return (

    <div>

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-900">
          My Bookings
        </h1>

        <p className="text-slate-500 mt-2">
          Track and manage all your resource bookings.
        </p>

      </div>


      {/* Tabs */}

      <div className="bg-white border border-slate-200 rounded-2xl p-2 flex gap-2 mb-6">

        {[
          "All",
          "Pending",
          "Approved",
          "Completed",
          "Cancelled"
        ].map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === tab
                ? "bg-slate-950 text-white"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            {tab}
          </button>

        ))}

      </div>


      {/* Booking count */}

      <div className="flex items-center justify-between mb-4">

        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700">
            {filteredBookings.length}
          </span>{" "}
          booking
          {filteredBookings.length !== 1 && "s"}
        </p>

      </div>


      {/* Booking List */}

      <div className="space-y-4">

        {filteredBookings.map((booking) => (

          <div
            key={booking.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition"
          >

            <div className="flex items-start justify-between gap-6">

              {/* Left */}

              <div className="flex gap-5">

                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">

                  <ClipboardList
                    size={26}
                    className="text-blue-600"
                  />

                </div>


                <div>

                  <div className="flex items-center gap-3">

                    <h2 className="text-lg font-bold text-slate-900">
                      {booking.resource}
                    </h2>

                    <span
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${getStatusStyle(
                        booking.status
                      )}`}
                    >
                      {getStatusIcon(booking.status)}

                      {booking.status}

                    </span>

                  </div>


                  <p className="text-sm text-slate-500 mt-1">
                    {booking.type}
                  </p>


                  {/* Details */}

                  <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5">

                    <div className="flex items-center gap-2 text-sm text-slate-500">

                      <MapPin size={17} />

                      {booking.location}

                    </div>


                    <div className="flex items-center gap-2 text-sm text-slate-500">

                      <CalendarDays size={17} />

                      {booking.date}

                    </div>


                    <div className="flex items-center gap-2 text-sm text-slate-500">

                      <Clock size={17} />

                      {booking.time}

                    </div>


                    <div className="flex items-center gap-2 text-sm text-slate-500">

                      <Users size={17} />

                      {booking.participants} participants

                    </div>

                  </div>


                  {/* Purpose */}

                  <div className="mt-5">

                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Purpose
                    </p>

                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {booking.purpose}
                    </p>

                  </div>

                </div>

              </div>


              {/* Actions */}

              <div className="flex flex-col gap-2 shrink-0">

                <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
                  View Details
                </button>


                {booking.status === "Pending" ||
                booking.status === "Approved" ? (

                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 transition"
                  >
                    Cancel Booking
                  </button>

                ) : null}

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* Empty State */}

      {filteredBookings.length === 0 && (

        <div className="bg-white border border-slate-200 rounded-2xl py-20 text-center">

          <ClipboardList
            size={48}
            className="mx-auto text-slate-300"
          />

          <h3 className="text-lg font-bold text-slate-700 mt-4">
            No bookings found
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            You don't have any {activeTab.toLowerCase()} bookings.
          </p>

        </div>

      )}

    </div>
  )
}

export default MyBookings