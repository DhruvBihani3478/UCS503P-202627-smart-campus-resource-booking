import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom"
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Users,
  MapPin,
  CheckCircle2
} from "lucide-react"

function BookResource() {
  const navigate = useNavigate()

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [purpose, setPurpose] = useState("")
  const [participants, setParticipants] = useState("")
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [apiError, setApiError] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  // Read the actual resource ID from the URL, e.g. ?resourceId=1
const resourceId = new URLSearchParams(window.location.search)
  .get("resourceId");

useEffect(() => {
  if (!resourceId) {
    setApiError("Resource ID is missing. Please select a resource first.");
    return;
  }

  setLoadingSlots(true);
  setApiError("");

  api.get("/slots", {
    params: {
      resourceId,
      available: true,
    },
  })
    .then((response) => {
      setSlots(response.data.slots || []);
    })
    .catch((error) => {
      console.error("Unable to load slots:", error);
      setApiError("Unable to load available slots. Please try again.");
    })
    .finally(() => {
      setLoadingSlots(false);
    });
}, [resourceId]);

  // Submit and save the booking
  const handleSubmit = async (e) => {
  e.preventDefault();
  setApiError("");

  if (!date || !time || !purpose.trim() || !participants) {
    setApiError("Please fill in all the fields.");
    return;
  }

  const participantCount = Number(participants);

  if (
    !Number.isInteger(participantCount) ||
    participantCount < 1 ||
    participantCount > 60
  ) {
    setApiError("Participants must be between 1 and 60.");
    return;
  }

  const selectedDate = new Date(`${date}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    setApiError("Please select today or a future date.");
    return;
  }

  if (!resourceId) {
    setApiError("Resource ID is missing.");
    return;
  }

  try {
    const formData = new URLSearchParams();
    formData.append("slotId", String(time));
    formData.append("bookingDate", date);

    await api.post("/bookings", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    alert("Booking request submitted successfully!");
    navigate("/bookings");
  } catch (error) {
    console.error("Unable to create booking:", error);

    setApiError(
      error.response?.data?.error ||
      "Could not submit the booking. Please try again."
    );
  }
};

  return (
    <div className="max-w-5xl mx-auto">

      {/* Back Button */}
      <button
        type="button"
        onClick={() => {
  setTime(String(slot.slotId));
  setSelectedSlot(slot);

  if (slot.date) {
    setDate(String(slot.date).slice(0, 10));
  }
}}
        className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition mb-6"
      >
        <ArrowLeft size={18} />
        Back to Resource
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Book Computer Lab 101
        </h1>

        <p className="text-slate-500 mt-2">
          Select your preferred date and time and provide the booking details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Booking Form */}
        <div className="md:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-2xl p-7"
          >
            {apiError && (
  <div
    role="alert"
    className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700"
  >
    {apiError}
  </div>
)}
            {/* Date */}
            <div className="mb-6">
              <label
                htmlFor="booking-date"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Booking Date
              </label>

              <div className="relative">
                <CalendarDays
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="booking-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toLocaleDateString("en-CA")}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Available Time Slots */}
<div className="mb-6">
  <label className="block text-sm font-semibold text-slate-700 mb-3">
    Select Time Slot
  </label>

  {loadingSlots && (
    <p className="text-sm text-slate-500">Loading available slots...</p>
  )}

  {!loadingSlots && slots.length === 0 && !apiError && (
    <p className="text-sm text-slate-500">
      No available slots found for this resource.
    </p>
  )}

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {slots.map((slot) => (
      <button
        type="button"
        key={slot.slotId}
        aria-pressed={String(time) === String(slot.slotId)}
        onClick={() => {
          setTime(String(slot.slotId));
          if (slot.date) setDate(String(slot.date).slice(0, 10));
        }}
        className={`flex items-center gap-3 p-4 rounded-xl border text-sm font-medium transition ${
          String(time) === String(slot.slotId)
            ? "border-blue-600 bg-blue-50 text-blue-700"
            : "border-slate-200 text-slate-600 hover:border-blue-300"
        }`}
      >
        <Clock size={18} />

        <span>
          {slot.startTime} - {slot.endTime}
          {slot.date ? ` (${String(slot.date).slice(0, 10)})` : ""}
        </span>

        {String(time) === String(slot.slotId) && (
          <CheckCircle2 size={18} className="ml-auto shrink-0" />
        )}
      </button>
    ))}
  </div>
</div>
            {/* Participants */}
            <div className="mb-6">
              <label
                htmlFor="participants"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Number of Participants
              </label>

              <div className="relative">
                <Users
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="participants"
                  type="number"
                  min="1"
                  max="60"
                  step="1"
                  value={participants}
                  onChange={(e) => setParticipants(e.target.value)}
                  placeholder="e.g. 30"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <p className="text-xs text-slate-400 mt-2">
                Maximum capacity: 60 students
              </p>
            </div>

            {/* Purpose */}
            <div className="mb-7">
              <label
                htmlFor="purpose"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Purpose of Booking
              </label>

              <textarea
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                rows={4}
                maxLength={500}
                placeholder="Explain why you need this resource..."
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

              <p className="text-xs text-slate-400 mt-1">
                {purpose.length}/500 characters
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Submit Booking Request
            </button>

          </form>
        </div>

        {/* Booking Summary */}
        <div>
          <div className="bg-slate-950 text-white rounded-2xl p-6 md:sticky md:top-6">

            <p className="text-sm text-slate-400">
              Booking Summary
            </p>

            <h2 className="text-xl font-bold mt-2">
              Computer Lab 101
            </h2>

            <div className="space-y-5 mt-7">

              {/* Location */}
              <div className="flex gap-3">
                <MapPin
                  size={19}
                  className="text-blue-400 shrink-0"
                />

                <div>
                  <p className="text-xs text-slate-400">
                    Location
                  </p>

                  <p className="text-sm mt-1">
                    Block A, 2nd Floor
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex gap-3">
                <CalendarDays
                  size={19}
                  className="text-blue-400 shrink-0"
                />

                <div>
                  <p className="text-xs text-slate-400">
                    Date
                  </p>

                  <p className="text-sm mt-1">
                    {date
                      ? new Date(`${date}T00:00:00`).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          }
                        )
                      : "Not selected"}
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex gap-3">
                <Clock
                  size={19}
                  className="text-blue-400 shrink-0"
                />

                <div>
                  <p className="text-xs text-slate-400">
                    Time
                  </p>

                  <p className="text-sm mt-1">
                    {selectedSlot
  ? `${selectedSlot.startTime} - ${selectedSlot.endTime}`
  : "Not selected"}
                  </p>
                </div>
              </div>

              {/* Participants */}
              <div className="flex gap-3">
                <Users
                  size={19}
                  className="text-blue-400 shrink-0"
                />

                <div>
                  <p className="text-xs text-slate-400">
                    Participants
                  </p>

                  <p className="text-sm mt-1">
                    {participants || "Not specified"}
                  </p>
                </div>
              </div>

              {/* Purpose */}
              {purpose.trim() && (
                <div>
                  <p className="text-xs text-slate-400">
                    Purpose
                  </p>

                  <p className="text-sm mt-1 break-words">
                    {purpose}
                  </p>
                </div>
              )}

            </div>

            {/* Approval Notice */}
            <div className="border-t border-slate-800 mt-7 pt-5">
              <div className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle2 size={18} />

                Booking requires approval
              </div>

              <p className="text-xs text-slate-400 mt-2">
                Your request will be submitted as Pending and will require approval from the resource administrator.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default BookResource