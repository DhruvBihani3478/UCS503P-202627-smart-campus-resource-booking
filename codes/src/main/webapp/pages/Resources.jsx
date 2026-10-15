import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Users,
  Monitor,
  Building2,
  FlaskConical,
  Presentation,
  DoorOpen,
  ArrowRight,
  X,
  CheckCircle2,
  CalendarDays,
  Sparkles,
  RotateCcw
} from "lucide-react"

function Resources() {
  const navigate = useNavigate()

  const [search, setSearch] = useState("")
  const [type, setType] = useState("All")
  const [availability, setAvailability] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  // Temporary frontend data.
  // We can replace this array with backend API data later.
  const resources = [
    {
      id: 101,
      name: "Computer Lab 101",
      type: "Laboratory",
      location: "Block A • 2nd Floor",
      capacity: 60,
      equipment: "60 PCs",
      status: "Available",
      description: "A fully equipped computer lab for programming, practicals, and academic projects.",
      icon: FlaskConical,
      iconStyle: "bg-blue-100 text-blue-700",
      gradient: "from-blue-50 via-white to-indigo-50"
    },
    {
      id: 102,
      name: "Computer Lab 203",
      type: "Laboratory",
      location: "Block A • 3rd Floor",
      capacity: 45,
      equipment: "45 PCs",
      status: "Booked",
      description: "A computer laboratory suitable for coding sessions and technical coursework.",
      icon: Monitor,
      iconStyle: "bg-indigo-100 text-indigo-700",
      gradient: "from-indigo-50 via-white to-blue-50"
    },
    {
      id: 103,
      name: "Seminar Hall",
      type: "Hall",
      location: "Block B • Ground Floor",
      capacity: 150,
      equipment: "Projector",
      status: "Available",
      description: "A spacious venue for presentations, seminars, workshops, and student events.",
      icon: Presentation,
      iconStyle: "bg-violet-100 text-violet-700",
      gradient: "from-violet-50 via-white to-purple-50"
    },
    {
      id: 104,
      name: "Conference Room",
      type: "Meeting Room",
      location: "Admin Block • 1st Floor",
      capacity: 30,
      equipment: "Display",
      status: "Available",
      description: "A professional meeting space for project discussions and team collaboration.",
      icon: DoorOpen,
      iconStyle: "bg-emerald-100 text-emerald-700",
      gradient: "from-emerald-50 via-white to-teal-50"
    },
    {
      id: 105,
      name: "AI & ML Lab",
      type: "Laboratory",
      location: "Block C • 2nd Floor",
      capacity: 40,
      equipment: "40 PCs",
      status: "Booked",
      description: "A dedicated lab for artificial intelligence, machine learning, and data science work.",
      icon: FlaskConical,
      iconStyle: "bg-amber-100 text-amber-700",
      gradient: "from-amber-50 via-white to-orange-50"
    },
    {
      id: 106,
      name: "Innovation Hall",
      type: "Hall",
      location: "Block D • Ground Floor",
      capacity: 100,
      equipment: "Projector + Audio",
      status: "Available",
      description: "A versatile venue for innovation activities, demonstrations, and group events.",
      icon: Presentation,
      iconStyle: "bg-pink-100 text-pink-700",
      gradient: "from-pink-50 via-white to-rose-50"
    }
  ]

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase()

    return resources.filter((resource) => {
      const searchableText = [
        resource.name,
        resource.type,
        resource.location,
        resource.equipment,
        resource.description
      ]
        .join(" ")
        .toLowerCase()

      const matchesSearch = searchableText.includes(query)
      const matchesType = type === "All" || resource.type === type
      const matchesAvailability =
        availability === "All" || resource.status === availability

      return matchesSearch && matchesType && matchesAvailability
    })
  }, [search, type, availability])

  const resetFilters = () => {
    setSearch("")
    setType("All")
    setAvailability("All")
  }

  const activeFilterCount = [
    type !== "All",
    availability !== "All"
  ].filter(Boolean).length

  const availableCount = resources.filter(
    (resource) => resource.status === "Available"
  ).length

  const handleViewDetails = (resource) => {
    navigate(`/resources/${resource.id}`)
  }

  const handleBook = (resource) => {
    if (resource.status !== "Available") return

    // The current booking form is configured for Computer Lab 101.
    // Keep its existing route until resource-specific booking is implemented.
    navigate(`/book/${resource.id}`)
  }

  return (
    <div className="mx-auto max-w-[1600px] space-y-7 pb-10">

      {/* Header */}
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            <Sparkles size={14} />
            Campus Facilities
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore Resources
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Find and reserve the right campus space for your classes,
            projects, meetings, and events.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowFilters((previous) => !previous)}
          aria-expanded={showFilters}
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 sm:self-auto"
        >
          <SlidersHorizontal size={18} />
          Filters
          {activeFilterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-slate-900">
              {activeFilterCount}
            </span>
          )}
        </button>
      </section>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
            <Building2 size={23} />
          </div>
          <div>
            <p className="text-sm text-slate-500">Total Resources</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {resources.length}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
            <CheckCircle2 size={23} />
          </div>
          <div>
            <p className="text-sm text-slate-500">Available Now</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {availableCount}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
            <Search size={23} />
          </div>
          <div>
            <p className="text-sm text-slate-500">Matching Results</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {filteredResources.length}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, location, equipment..."
              aria-label="Search resources"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-10 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowFilters((previous) => !previous)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <SlidersHorizontal size={17} />
            {showFilters ? "Hide filters" : "Show filters"}
          </button>
        </div>

        {/* Always-visible quick category filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["All", "Laboratory", "Hall", "Meeting Room"].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setType(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                type === category
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {category === "All"
                ? "All Resources"
                : category === "Laboratory"
                  ? "Laboratories"
                  : category === "Hall"
                    ? "Halls"
                    : "Meeting Rooms"}
            </button>
          ))}
        </div>

        {showFilters && (
          <div className="mt-5 grid grid-cols-1 gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="resource-type"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Resource category
              </label>

              <select
                id="resource-type"
                value={type}
                onChange={(event) => setType(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              >
                <option value="All">All categories</option>
                <option value="Laboratory">Laboratories</option>
                <option value="Hall">Halls</option>
                <option value="Meeting Room">Meeting Rooms</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="resource-availability"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Availability
              </label>

              <select
                id="resource-availability"
                value={availability}
                onChange={(event) => setAvailability(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              >
                <option value="All">All availability</option>
                <option value="Available">Available now</option>
                <option value="Booked">Currently booked</option>
              </select>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 sm:col-span-2">
              <p className="text-xs text-slate-500">
                Filters update the results automatically.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
              >
                <RotateCcw size={15} />
                Reset filters
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Results Heading */}
      <section className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Available Spaces
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {filteredResources.length}{" "}
            {filteredResources.length === 1 ? "resource" : "resources"} found
            {search.trim() ? ` for "${search.trim()}"` : ""}
          </p>
        </div>

        {(search || type !== "All" || availability !== "All") && (
          <button
            type="button"
            onClick={resetFilters}
            className="self-start text-sm font-semibold text-blue-600 hover:text-blue-700 sm:self-auto"
          >
            Clear all filters
          </button>
        )}
      </section>

      {/* Resource Cards */}
      {filteredResources.length > 0 ? (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map((resource) => {
            const Icon = resource.icon
            const isAvailable = resource.status === "Available"

            return (
              <article
                key={resource.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Visual Header */}
                <div
                  className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${resource.gradient}`}
                >
                  <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/60" />
                  <div className="absolute -bottom-14 -left-8 h-36 w-36 rounded-full bg-white/50" />

                  <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl shadow-sm transition duration-300 group-hover:scale-110 ${resource.iconStyle}`}>
                    <Icon size={38} strokeWidth={1.6} />
                  </div>

                  <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-600 backdrop-blur">
                    {resource.type}
                  </span>

                  <span
                    className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                      isAvailable
                        ? "border-emerald-100 bg-white/90 text-emerald-700"
                        : "border-red-100 bg-white/90 text-red-700"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isAvailable ? "bg-emerald-500" : "bg-red-500"
                      }`}
                    />
                    {resource.status}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-700">
                    {resource.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} className="shrink-0" />
                    <span>{resource.location}</span>
                  </div>

                  <p className="mt-4 min-h-[60px] text-sm leading-6 text-slate-500">
                    {resource.description}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
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
                        <span className="text-xs">Equipment</span>
                      </div>
                      <p className="mt-1.5 break-words text-sm font-bold text-slate-800">
                        {resource.equipment}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      onClick={() => handleViewDetails(resource)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Details
                    </button>

                    <button
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => handleBook(resource)}
                      className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                        isAvailable
                          ? "bg-slate-950 text-white hover:bg-blue-600"
                          : "cursor-not-allowed bg-slate-100 text-slate-400"
                      }`}
                    >
                      {isAvailable ? (
                        <>
                          Book Now
                          <ArrowRight size={16} />
                        </>
                      ) : (
                        "Unavailable"
                      )}
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      ) : (
        /* Empty State */
        <section className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <Building2 size={32} />
          </div>

          <h3 className="mt-5 text-lg font-bold text-slate-900">
            No resources found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            We couldn't find any resources matching your search and filters.
            Try a different keyword or reset your filters.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            <RotateCcw size={16} />
            Reset filters
          </button>
        </section>
      )}

      {/* Footer Tip */}
      <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 sm:p-5">
        <div className="rounded-xl bg-white p-2 text-blue-600 shadow-sm">
          <CalendarDays size={20} />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-800">
            Planning an event?
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Check resource availability before submitting a request. Bookings
            may require administrator approval.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Resources