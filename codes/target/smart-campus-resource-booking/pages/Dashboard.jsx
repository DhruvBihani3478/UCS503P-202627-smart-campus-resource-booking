import { useNavigate } from "react-router-dom"
import {
  Building2,
  Users,
  CalendarDays,
  Clock,
  ArrowRight,
  Plus,
  CheckCircle2,
  XCircle,
  MapPin,
  Monitor,
  Presentation,
  Search,
  LayoutDashboard,
  TrendingUp,
  ChevronRight,
  Sparkles,
  ClipboardList
} from "lucide-react"

function Dashboard() {
  const navigate = useNavigate()

  // Temporary display data.
  // Replace these values with API responses when the backend is ready.
  const stats = [
    {
      title: "Total Resources",
      value: "24",
      description: "Across campus",
      icon: Building2,
      iconStyle: "bg-blue-50 text-blue-600",
      accent: "border-l-blue-500"
    },
    {
      title: "Available Now",
      value: "8",
      description: "Ready to book",
      icon: CheckCircle2,
      iconStyle: "bg-emerald-50 text-emerald-600",
      accent: "border-l-emerald-500"
    },
    {
      title: "My Bookings",
      value: "3",
      description: "This month",
      icon: CalendarDays,
      iconStyle: "bg-violet-50 text-violet-600",
      accent: "border-l-violet-500"
    },
    {
      title: "Pending Requests",
      value: "1",
      description: "Awaiting approval",
      icon: Clock,
      iconStyle: "bg-amber-50 text-amber-600",
      accent: "border-l-amber-500"
    }
  ]

  const resources = [
    {
      id: 101,
      name: "Computer Lab 101",
      category: "Laboratory",
      location: "Block A • 2nd Floor",
      capacity: 60,
      equipment: "60 Computers",
      icon: Monitor,
      iconStyle: "bg-blue-100 text-blue-700",
      gradient: "from-blue-50 via-white to-indigo-50",
      status: "Available"
    },
    {
      id: 102,
      name: "Seminar Hall",
      category: "Event Space",
      location: "Block B • Ground Floor",
      capacity: 150,
      equipment: "Projector & Audio",
      icon: Presentation,
      iconStyle: "bg-violet-100 text-violet-700",
      gradient: "from-violet-50 via-white to-purple-50",
      status: "Available"
    },
    {
      id: 103,
      name: "Conference Room",
      category: "Meeting Room",
      location: "Admin Block • 1st Floor",
      capacity: 30,
      equipment: "Display & Wi-Fi",
      icon: Users,
      iconStyle: "bg-emerald-100 text-emerald-700",
      gradient: "from-emerald-50 via-white to-teal-50",
      status: "Available"
    }
  ]

  const recentBookings = [
    {
      id: 1,
      resource: "Computer Lab 101",
      date: "Oct 10, 2026",
      time: "09:00 AM – 10:00 AM",
      status: "Pending"
    },
    {
      id: 2,
      resource: "Seminar Hall",
      date: "Oct 12, 2026",
      time: "02:00 PM – 04:00 PM",
      status: "Approved"
    },
    {
      id: 3,
      resource: "Conference Room",
      date: "Oct 14, 2026",
      time: "11:00 AM – 12:00 PM",
      status: "Rejected"
    }
  ]

  const statusStyles = {
    Approved: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
    Rejected: "bg-red-50 text-red-700 ring-red-600/20"
  }

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  })

  return (
    <div className="mx-auto max-w-[1600px] space-y-8 pb-10">

      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-xl shadow-slate-200 sm:p-10">
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-1/4 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-100">
              <Sparkles size={14} />
              Campus Resource Management
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome back, Aditya
              <span className="ml-2">👋</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              Find the right space, manage your reservations, and make
              your campus experience more productive.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <CalendarDays size={16} />
              <span>{today}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <button
              onClick={() => navigate("/resources")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Plus size={18} />
              New Booking
            </button>

            <button
              onClick={() => navigate("/bookings")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ClipboardList size={18} />
              My Bookings
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section>
        <div className="mb-5">
          <h2 className="text-lg font-bold text-slate-900">
            Overview
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            A quick look at your campus resources and bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.title}
                className={`group rounded-2xl border border-l-4 border-slate-200 ${stat.accent} bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {stat.title}
                    </p>

                    <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                      {stat.value}
                    </p>
                  </div>

                  <div className={`rounded-xl p-3 ${stat.iconStyle}`}>
                    <Icon size={22} />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <TrendingUp size={14} />
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Resources Section */}
      <section>
        <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Explore Resources
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Discover spaces and facilities available across campus.
            </p>
          </div>

          <button
            onClick={() => navigate("/resources")}
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-600 transition hover:text-blue-700 sm:self-auto"
          >
            View all resources
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon

            return (
              <article
                key={resource.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Resource Visual */}
                <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${resource.gradient}`}>
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/60" />
                  <div className="absolute -bottom-12 -left-6 h-36 w-36 rounded-full bg-white/60" />

                  <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl shadow-sm transition duration-300 group-hover:scale-110 ${resource.iconStyle}`}>
                    <Icon size={38} strokeWidth={1.6} />
                  </div>

                  <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
                    {resource.category}
                  </span>

                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white/90 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {resource.status}
                  </span>
                </div>

                {/* Resource Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-700">
                    {resource.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={15} className="shrink-0" />
                    <span>{resource.location}</span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Users size={16} />
                        <span className="text-xs">Capacity</span>
                      </div>

                      <p className="mt-1.5 text-sm font-bold text-slate-800">
                        {resource.capacity} people
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Monitor size={16} />
                        <span className="text-xs">Facilities</span>
                      </div>

                      <p className="mt-1.5 text-sm font-bold text-slate-800">
                        {resource.equipment}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/book/101")}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Book Now
                    <ChevronRight size={17} />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Recent Bookings */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex flex-col justify-between gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Recent Bookings
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep track of your recent reservation requests.
            </p>
          </div>

          <button
            onClick={() => navigate("/bookings")}
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-600 transition hover:text-blue-700 sm:self-auto"
          >
            View all
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/80 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-6 py-4">Resource</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {recentBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="transition hover:bg-slate-50/70"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                        <Building2 size={19} />
                      </div>

                      <span className="text-sm font-semibold text-slate-800">
                        {booking.resource}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-800">
                      {booking.date}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {booking.time}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[booking.status] || "bg-slate-100 text-slate-700 ring-slate-200"}`}>
                      {booking.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => navigate("/bookings")}
                      aria-label={`View ${booking.resource} booking`}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <ArrowRight size={17} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Booking Cards */}
        <div className="divide-y divide-slate-100 md:hidden">
          {recentBookings.map((booking) => (
            <div key={booking.id} className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {booking.resource}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {booking.date}
                  </p>
                </div>

                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[booking.status] || "bg-slate-100 text-slate-700 ring-slate-200"}`}>
                  {booking.status}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock size={14} />
                {booking.time}
              </div>

              <button
                onClick={() => navigate("/bookings")}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View booking →
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-5 py-3 sm:px-6">
          <p className="text-xs text-slate-500">
            Sample booking data
          </p>

          <button
            onClick={() => navigate("/bookings")}
            className="text-xs font-semibold text-slate-600 transition hover:text-blue-600"
          >
            Manage bookings
          </button>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Get where you need to go faster.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <button
            onClick={() => navigate("/resources")}
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-blue-200 hover:shadow-md"
          >
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              <Search size={22} />
            </div>

            <div className="flex-1">
              <p className="font-semibold text-slate-900">
                Find a Resource
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Explore campus facilities
              </p>
            </div>

            <ArrowRight size={18} className="text-slate-400" />
          </button>

          <button
            onClick={() => navigate("/bookings")}
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-violet-200 hover:shadow-md"
          >
            <div className="rounded-xl bg-violet-50 p-3 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
              <CalendarDays size={22} />
            </div>

            <div className="flex-1">
              <p className="font-semibold text-slate-900">
                My Reservations
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Track booking requests
              </p>
            </div>

            <ArrowRight size={18} className="text-slate-400" />
          </button>

          <button
            onClick={() => navigate("/calendar")}
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-emerald-200 hover:shadow-md"
          >
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
              <LayoutDashboard size={22} />
            </div>

            <div className="flex-1">
              <p className="font-semibold text-slate-900">
                Booking Calendar
              </p>
              <p className="mt-1 text-xs text-slate-500">
                See your schedule
              </p>
            </div>

            <ArrowRight size={18} className="text-slate-400" />
          </button>
        </div>
      </section>

    </div>
  )
}

export default Dashboard