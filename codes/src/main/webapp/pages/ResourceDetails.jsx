import {
  ArrowLeft,
  MapPin,
  Users,
  Monitor,
  Snowflake,
  CheckCircle2,
  CalendarDays,
  Clock
} from "lucide-react"

import { useNavigate } from "react-router-dom"

function ResourceDetails() {

  const navigate = useNavigate()

  return (
    <div>

      {/* Back button */}

      <button
        onClick={() => navigate("/resources")}
        className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition mb-6"
      >
        <ArrowLeft size={18} />
        Back to Resources
      </button>


      {/* Main Card */}

      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">

        {/* Hero */}

        <div className="h-72 bg-slate-100 flex items-center justify-center">

          <Monitor
            size={90}
            className="text-slate-400"
          />

        </div>


        {/* Content */}

        <div className="p-8">

          <div className="flex items-start justify-between gap-6">

            <div>

              <div className="flex items-center gap-3">

                <h1 className="text-3xl font-bold text-slate-900">
                  Computer Lab 101
                </h1>

                <span className="flex items-center gap-1 text-sm font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={16} />
                  Available
                </span>

              </div>

              <p className="text-slate-500 mt-2">
                A fully equipped computer laboratory suitable for
                classes, workshops and technical events.
              </p>

            </div>


            <button
              onClick={() => navigate("/book/101")}
              className="shrink-0 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Book This Resource
            </button>

          </div>


          {/* Information */}

          <div className="grid grid-cols-4 gap-4 mt-8">

            <div className="bg-slate-50 rounded-2xl p-5">

              <Users
                size={22}
                className="text-blue-600"
              />

              <p className="text-sm text-slate-500 mt-3">
                Capacity
              </p>

              <p className="font-bold text-slate-900 mt-1">
                60 Students
              </p>

            </div>


            <div className="bg-slate-50 rounded-2xl p-5">

              <Monitor
                size={22}
                className="text-blue-600"
              />

              <p className="text-sm text-slate-500 mt-3">
                Computers
              </p>

              <p className="font-bold text-slate-900 mt-1">
                60 PCs
              </p>

            </div>


            <div className="bg-slate-50 rounded-2xl p-5">

              <Snowflake
                size={22}
                className="text-blue-600"
              />

              <p className="text-sm text-slate-500 mt-3">
                Air Conditioning
              </p>

              <p className="font-bold text-slate-900 mt-1">
                Available
              </p>

            </div>


            <div className="bg-slate-50 rounded-2xl p-5">

              <MapPin
                size={22}
                className="text-blue-600"
              />

              <p className="text-sm text-slate-500 mt-3">
                Location
              </p>

              <p className="font-bold text-slate-900 mt-1">
                Block A, 2nd Floor
              </p>

            </div>

          </div>


          {/* Availability */}

          <div className="mt-10">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  Availability
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Check when this resource is available.
                </p>

              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <CalendarDays size={18} />

                September 2026

              </div>

            </div>


            {/* Time slots */}

            <div className="grid grid-cols-4 gap-4 mt-5">

              <div className="border border-green-200 bg-green-50 rounded-xl p-4">

                <div className="flex items-center gap-2 text-green-700 font-semibold">

                  <Clock size={17} />

                  09:00 - 10:00

                </div>

                <p className="text-xs text-green-600 mt-2">
                  Available
                </p>

              </div>


              <div className="border border-red-200 bg-red-50 rounded-xl p-4">

                <div className="flex items-center gap-2 text-red-700 font-semibold">

                  <Clock size={17} />

                  10:00 - 11:00

                </div>

                <p className="text-xs text-red-600 mt-2">
                  Booked
                </p>

              </div>


              <div className="border border-green-200 bg-green-50 rounded-xl p-4">

                <div className="flex items-center gap-2 text-green-700 font-semibold">

                  <Clock size={17} />

                  11:00 - 12:00

                </div>

                <p className="text-xs text-green-600 mt-2">
                  Available
                </p>

              </div>


              <div className="border border-green-200 bg-green-50 rounded-xl p-4">

                <div className="flex items-center gap-2 text-green-700 font-semibold">

                  <Clock size={17} />

                  12:00 - 13:00

                </div>

                <p className="text-xs text-green-600 mt-2">
                  Available
                </p>

              </div>

            </div>

          </div>


          {/* Features */}

          <div className="mt-10">

            <h2 className="text-xl font-bold text-slate-900">
              Facilities
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">

              {[
                "High-speed Internet",
                "Air Conditioning",
                "Projector",
                "60 Desktop PCs",
                "Whiteboard",
                "Power Backup"
              ].map((facility) => (

                <span
                  key={facility}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium"
                >
                  {facility}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ResourceDetails