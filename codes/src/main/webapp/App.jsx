import {
  LayoutDashboard,
  CalendarDays,
  Building2,
  ClipboardList,
  Bell,
  UserCircle,
  Settings
} from "lucide-react"

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Resources from "./pages/Resources"
import MyBookings from "./pages/MyBookings"
import Calendar from "./pages/Calendar"
import Notifications from "./pages/Notifications"
import SettingsPage from "./pages/Settings"
import Profile from "./pages/Profile"
import ResourceDetails from "./pages/ResourceDetails"
import BookResource from "./pages/BookResource"

function Layout() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard
    },
    {
      name: "Resources",
      path: "/resources",
      icon: Building2
    },
    {
      name: "My Bookings",
      path: "/bookings",
      icon: ClipboardList
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: CalendarDays
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: Bell
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Sidebar */}

      <aside className="w-64 bg-slate-950 text-white flex flex-col">

        {/* Logo */}

        <div className="h-20 flex items-center px-6 border-b border-slate-800">

          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold">
            RH
          </div>

          <div className="ml-3">
            <h1 className="font-bold text-lg">
              Resource Hub
            </h1>

            <p className="text-xs text-slate-400">
              Campus Booking
            </p>
          </div>

        </div>


        {/* Navigation */}

        <nav className="flex-1 px-4 py-6 space-y-2">

          {navItems.map((item) => {

            const Icon = item.icon

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`
                }
              >

                <Icon size={20} />

                {item.name}

              </NavLink>
            )

          })}

        </nav>


        {/* Bottom Navigation */}

        <div className="px-4 pb-6 space-y-2">

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <Settings size={20} />
            Settings
          </NavLink>


          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <UserCircle size={20} />
            Profile
          </NavLink>

        </div>

      </aside>


      {/* Main Content */}

      <main className="flex-1">

        {/* Top Bar */}

        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">

          <div>

            <h2 className="text-xl font-semibold text-slate-900">
              Resource Hub
            </h2>

            <p className="text-sm text-slate-500">
              Campus Resource Booking System
            </p>

          </div>


          {/* User */}

          <div className="flex items-center gap-4">

            <button className="relative w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center">

              <Bell
                size={20}
                className="text-slate-600"
              />

              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

            </button>


            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">

              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">
                AS
              </div>

              <div>

                <p className="text-sm font-semibold text-slate-900">
                  Aditya
                </p>

                <p className="text-xs text-slate-500">
                  Student
                </p>

              </div>

            </div>

          </div>

        </header>


        {/* Page */}

        <section className="p-8">

          <Routes>
            <Route
              path="/resources/101"
              element={<ResourceDetails />}
            />
            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
  path="/book/:id"
  element={<BookResource />}
/>

            <Route
              path="/resources"
              element={<Resources />}
            />

            <Route
              path="/bookings"
              element={<MyBookings />}
            />

            <Route
              path="/calendar"
              element={<Calendar />}
            />

            <Route
              path="/notifications"
              element={<Notifications />}
            />

            <Route
              path="/settings"
              element={<SettingsPage />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Routes>

        </section>

      </main>

    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App