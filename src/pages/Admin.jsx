import { useMemo, useState } from "react";
import {
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  FileText,
  ImagePlus,
  IndianRupee,
  LayoutDashboard,
  MessageSquare,
  MoreHorizontal,
  Settings,
  ShieldCheck,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";

function Admin() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  /*
   * ---------------------------------------------------------
   * DEMO DATA
   * ---------------------------------------------------------
   * This data is only for the client presentation.
   * It will later be replaced by backend/API data.
   */

  const registrations = [
    {
      id: "SKDM-26091",
      name: "अभिषेक कुमार",
      service: "विवाह संस्कार",
      date: "28 सितम्बर 2026",
      status: "नया",
    },
    {
      id: "SKDM-26090",
      name: "सुमन देवी",
      service: "मुंडन संस्कार",
      date: "29 सितम्बर 2026",
      status: "स्वीकृत",
    },
    {
      id: "SKDM-26089",
      name: "राकेश मिश्र",
      service: "रुद्राभिषेक",
      date: "30 सितम्बर 2026",
      status: "नया",
    },
    {
      id: "SKDM-26088",
      name: "पूजा शुक्ला",
      service: "विशेष पूजा",
      date: "01 अक्टूबर 2026",
      status: "प्रक्रिया में",
    },
    {
      id: "SKDM-26087",
      name: "मनोज तिवारी",
      service: "श्री सत्यनारायण कथा",
      date: "03 अक्टूबर 2026",
      status: "स्वीकृत",
    },
  ];

  const activities = [
    {
      title: "विवाह संस्कार",
      person: "अभिषेक कुमार",
      date: "28 सितम्बर 2026",
      status: "नया",
    },
    {
      title: "मुंडन संस्कार",
      person: "सुमन देवी",
      date: "29 सितम्बर 2026",
      status: "स्वीकृत",
    },
    {
      title: "रुद्राभिषेक",
      person: "राकेश मिश्र",
      date: "30 सितम्बर 2026",
      status: "नया",
    },
  ];

  const galleryImages = [
    "/images/gallery/temple-deities.jpg",
    "/images/gallery/temple-1.jpg",
    "/images/gallery/temple-2.jpg",
    "/images/gallery/shiva-darshan.jpg",
  ];

  const filteredRegistrations = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return registrations;
    }

    return registrations.filter((item) =>
      `${item.id} ${item.name} ${item.service} ${item.status}`
        .toLowerCase()
        .includes(query)
    );
  }, [searchTerm]);

  /*
   * ---------------------------------------------------------
   * NAVIGATION
   * ---------------------------------------------------------
   */

  const navigationItems = [
    {
      id: "dashboard",
      label: "डैशबोर्ड",
      icon: LayoutDashboard,
    },
    {
      id: "registrations",
      label: "पंजीकरण",
      icon: ClipboardList,
      count: 12,
    },
    {
      id: "activities",
      label: "कार्यक्रम",
      icon: CalendarDays,
    },
    {
      id: "gallery",
      label: "गैलरी",
      icon: Camera,
    },
    {
      id: "donations",
      label: "दान एवं सेवा",
      icon: IndianRupee,
    },
    {
      id: "messages",
      label: "संदेश",
      icon: MessageSquare,
      count: 4,
    },
  ];

  /*
   * ---------------------------------------------------------
   * HELPERS
   * ---------------------------------------------------------
   */

  const getStatusClasses = (status) => {
    if (status === "स्वीकृत") {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }

    if (status === "नया") {
      return "bg-amber-50 text-amber-700 border-amber-200";
    }

    if (status === "प्रक्रिया में") {
      return "bg-blue-50 text-blue-700 border-blue-200";
    }

    if (status === "अस्वीकृत") {
      return "bg-red-50 text-red-700 border-red-200";
    }

    return "bg-gray-50 text-gray-600 border-gray-200";
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#3b2925]">
      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      {sidebarOpen && (
        <button
          type="button"
          aria-label="मेनू बंद करें"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-[#241114]/50 backdrop-blur-sm md:hidden"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex flex-col
          bg-[#35151c] text-white
          transition-all duration-300 ease-in-out

          w-[270px]
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
          md:w-[76px]

          lg:w-[270px]

          ${sidebarOpen ? "md:w-[270px]" : ""}
        `}
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <div
          className={`
            flex h-20 shrink-0 items-center
            border-b border-white/10
            px-4
            transition-all duration-300

            md:justify-center
            md:px-3

            ${sidebarOpen ? "md:justify-start md:px-5" : ""}

            lg:justify-start
            lg:px-5
          `}
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#e4bb5b]/50 bg-[#4a1720]">
              <img
                src="/images/logo/logo.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div
              className={`
                min-w-0 overflow-hidden whitespace-nowrap
                transition-all duration-200

                md:hidden
                ${sidebarOpen ? "md:block" : ""}
                lg:block
              `}
            >
              <p className="font-serif text-lg text-[#fffaf2]">
                कैलाश धाम
              </p>

              <p className="text-[10px] tracking-[0.18em] text-[#e4bb5b]">
                ADMIN PANEL
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            ADMIN IDENTITY
        =================================================== */}

        <div
          className={`
            mx-3 mt-5 overflow-hidden rounded-xl
            border border-[#e4bb5b]/15 bg-white/5
            p-3
            transition-all duration-300

            md:mx-2
            md:p-2

            ${sidebarOpen ? "md:mx-4 md:p-4" : ""}

            lg:mx-4
            lg:p-4
          `}
        >
          <div
            className={`
              flex items-center gap-3
              md:justify-center
              ${sidebarOpen ? "md:justify-start" : ""}
              lg:justify-start
            `}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e4bb5b] text-[#35151c]">
              <UserRound size={19} />
            </div>

            <div
              className={`
                min-w-0 overflow-hidden whitespace-nowrap
                transition-all duration-200

                md:hidden
                ${sidebarOpen ? "md:block" : ""}
                lg:block
              `}
            >
              <p className="truncate text-sm font-semibold">
                मंदिर प्रबंधन
              </p>

              <p className="truncate text-xs text-white/50">
                व्यवस्थापक
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <nav
          className={`
            mt-6 flex-1 overflow-y-auto
            px-3
            md:px-2
            ${sidebarOpen ? "md:px-3" : ""}
            lg:px-4
          `}
        >
          <p
            className={`
              mb-3 px-3 text-[10px] font-semibold
              tracking-[0.18em] text-white/35
              whitespace-nowrap

              md:hidden
              ${sidebarOpen ? "md:block" : ""}
              lg:block
            `}
          >
            मुख्य मेनू
          </p>

          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigation(item.id)}
                  title={!sidebarOpen ? item.label : undefined}
                  className={`
                    group flex w-full items-center
                    rounded-xl py-3
                    text-sm transition-all

                    md:justify-center
                    md:px-0

                    ${sidebarOpen ? "md:justify-start md:px-3" : ""}

                    lg:justify-start
                    lg:px-3

                    ${
                      isActive
                        ? "bg-[#e4bb5b] font-semibold text-[#35151c]"
                        : "text-white/65 hover:bg-white/7 hover:text-white"
                    }
                  `}
                >
                  <Icon size={18} className="shrink-0" />

                  <span
                    className={`
                      ml-3 flex-1 overflow-hidden
                      whitespace-nowrap text-left

                      md:hidden
                      ${sidebarOpen ? "md:block" : ""}
                      lg:block
                    `}
                  >
                    {item.label}
                  </span>

                  {item.count && (
                    <span
                      className={`
                        shrink-0 rounded-full px-2 py-0.5 text-[10px]

                        md:hidden
                        ${sidebarOpen ? "md:inline-flex" : ""}
                        lg:inline-flex

                        ${
                          isActive
                            ? "bg-[#35151c]/10"
                            : "bg-white/10 text-white/60"
                        }
                      `}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* =================================================
              SYSTEM
          ================================================= */}

          <p
            className={`
              mb-3 mt-8 px-3 text-[10px] font-semibold
              tracking-[0.18em] text-white/35
              whitespace-nowrap

              md:hidden
              ${sidebarOpen ? "md:block" : ""}
              lg:block
            `}
          >
            सिस्टम
          </p>

          <button
            type="button"
            onClick={() => handleNavigation("settings")}
            title={!sidebarOpen ? "सेटिंग्स" : undefined}
            className={`
              flex w-full items-center
              rounded-xl py-3
              text-left text-sm transition-all

              md:justify-center
              md:px-0

              ${sidebarOpen ? "md:justify-start md:px-3" : ""}

              lg:justify-start
              lg:px-3

              ${
                activeSection === "settings"
                  ? "bg-[#e4bb5b] font-semibold text-[#35151c]"
                  : "text-white/65 hover:bg-white/7 hover:text-white"
              }
            `}
          >
            <Settings size={18} className="shrink-0" />

            <span
              className={`
                ml-3 overflow-hidden whitespace-nowrap

                md:hidden
                ${sidebarOpen ? "md:block" : ""}
                lg:block
              `}
            >
              सेटिंग्स
            </span>
          </button>
        </nav>

        {/* ===================================================
            SIDEBAR FOOTER
        =================================================== */}

        <div
          className={`
            border-t border-white/10
            p-3
            md:p-2
            ${sidebarOpen ? "md:p-3" : ""}
            lg:p-4
          `}
        >
          <div
            className={`
              flex items-center gap-2 text-xs text-white/35
              md:justify-center
              ${sidebarOpen ? "md:justify-start" : ""}
              lg:justify-start
            `}
            title="सुरक्षित व्यवस्थापन"
          >
            <ShieldCheck size={14} className="shrink-0" />

            <span
              className={`
                whitespace-nowrap

                md:hidden
                ${sidebarOpen ? "md:inline" : ""}
                lg:inline
              `}
            >
              सुरक्षित व्यवस्थापन
            </span>
          </div>
        </div>
      </aside>

      {/* =====================================================
          SIDEBAR TOGGLE
      ===================================================== */}

      <button
        type="button"
        onClick={() => setSidebarOpen((current) => !current)}
        aria-label={sidebarOpen ? "मेनू बंद करें" : "मेनू खोलें"}
        className="
          fixed left-4 top-4 z-[60]
          flex h-10 w-10 items-center justify-center
          rounded-xl border border-[#e3d8c8]
          bg-[#fffaf2] text-[#4a1720]
          shadow-sm transition-all duration-300
          hover:bg-[#f8eee2]

          lg:hidden
        "
      >
        {sidebarOpen ? (
          <span className="text-xl leading-none">×</span>
        ) : (
          <span className="text-lg leading-none">☰</span>
        )}
      </button>

      {/* =====================================================
          MAIN AREA
      ===================================================== */}

      <div
        className={`
          min-h-screen
          transition-[padding] duration-300 ease-in-out

          pl-0
          md:pl-[76px]
          lg:pl-[270px]

          ${sidebarOpen ? "md:pl-[270px]" : ""}
        `}
      >
        <main className="p-4 pt-20 sm:p-6 sm:pt-20 lg:p-8 lg:pt-8">

          {/* =================================================
              DASHBOARD
          ================================================= */}

          {activeSection === "dashboard" && (
            <div className="space-y-7">

              {/* Welcome */}

              <section className="relative overflow-hidden rounded-2xl bg-[#4a1720] p-6 text-white sm:p-8">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#e4bb5b]/15" />

                <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full border border-[#e4bb5b]/10" />

                <div className="relative max-w-2xl">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#e4bb5b]">
                    मंदिर प्रबंधन
                  </p>

                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                    नमस्कार, व्यवस्थापक
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
                    श्री कैलाश धाम मंदिर की वेबसाइट और
                    पंजीकरण गतिविधियों का संक्षिप्त अवलोकन।
                  </p>
                </div>
              </section>

              {/* Statistics */}

              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-2xl border border-[#e3d8c8] bg-white p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-[#8d7971]">
                        कुल पंजीकरण
                      </p>

                      <p className="mt-2 text-3xl font-bold text-[#4a1720]">
                        128
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8eee2] text-[#8b2635]">
                      <ClipboardList size={20} />
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-emerald-600">
                    +12 इस माह
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e3d8c8] bg-white p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-[#8d7971]">
                        नए अनुरोध
                      </p>

                      <p className="mt-2 text-3xl font-bold text-[#4a1720]">
                        12
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff6df] text-[#b17b1e]">
                      <Clock3 size={20} />
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-[#8d7971]">
                    समीक्षा आवश्यक
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e3d8c8] bg-white p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-[#8d7971]">
                        इस माह के आयोजन
                      </p>

                      <p className="mt-2 text-3xl font-bold text-[#4a1720]">
                        18
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3eee8] text-[#6b4a3e]">
                      <CalendarDays size={20} />
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-[#8d7971]">
                    आगामी कार्यक्रम
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e3d8c8] bg-white p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-[#8d7971]">
                        गैलरी तस्वीरें
                      </p>

                      <p className="mt-2 text-3xl font-bold text-[#4a1720]">
                        42
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1eee9] text-[#765646]">
                      <Camera size={20} />
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-[#8d7971]">
                    वेबसाइट पर प्रकाशित
                  </p>
                </div>

              </section>

              {/* Main dashboard grid */}

              <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">

                {/* Recent registrations */}

                <div className="overflow-hidden rounded-2xl border border-[#e3d8c8] bg-white">

                  <div className="flex items-center justify-between border-b border-[#eee5d9] px-5 py-4">
                    <div>
                      <h3 className="font-serif text-xl text-[#4a1720]">
                        हाल के पंजीकरण
                      </h3>

                      <p className="mt-1 text-xs text-[#9b8880]">
                        हाल ही में प्राप्त पंजीकरण अनुरोध
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleNavigation("registrations")
                      }
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#8b2635]"
                    >
                      सभी देखें
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] text-left">
                      <thead>
                        <tr className="border-b border-[#eee5d9] bg-[#fcfaf6] text-[11px] text-[#9b8880]">
                          <th className="px-5 py-3 font-semibold">
                            पंजीकरण
                          </th>

                          <th className="px-5 py-3 font-semibold">
                            आवेदक
                          </th>

                          <th className="px-5 py-3 font-semibold">
                            सेवा
                          </th>

                          <th className="px-5 py-3 font-semibold">
                            तिथि
                          </th>

                          <th className="px-5 py-3 font-semibold">
                            स्थिति
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {registrations.map((item) => (
                          <tr
                            key={item.id}
                            className="border-b border-[#f0e9df] last:border-0 hover:bg-[#fcfaf6]"
                          >
                            <td className="px-5 py-4">
                              <span className="text-xs font-semibold text-[#8b2635]">
                                {item.id}
                              </span>
                            </td>

                            <td className="px-5 py-4 text-sm font-medium text-[#4a1720]">
                              {item.name}
                            </td>

                            <td className="px-5 py-4 text-xs text-[#6f5b55]">
                              {item.service}
                            </td>

                            <td className="px-5 py-4 text-xs text-[#6f5b55]">
                              {item.date}
                            </td>

                            <td className="px-5 py-4">
                              <span
                                className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold ${getStatusClasses(
                                  item.status
                                )}`}
                              >
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Upcoming activities */}

                <div className="rounded-2xl border border-[#e3d8c8] bg-white">

                  <div className="border-b border-[#eee5d9] px-5 py-4">
                    <h3 className="font-serif text-xl text-[#4a1720]">
                      आगामी गतिविधियाँ
                    </h3>

                    <p className="mt-1 text-xs text-[#9b8880]">
                      अगले कुछ दिनों के अनुरोध
                    </p>
                  </div>

                  <div className="divide-y divide-[#eee5d9]">
                    {activities.map((activity, index) => (
                      <div
                        key={`${activity.title}-${index}`}
                        className="flex gap-3 px-5 py-4"
                      >
                        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f8eee2] text-[#8b2635]">
                          <CalendarDays size={17} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-semibold text-[#4a1720]">
                              {activity.title}
                            </p>

                            <span
                              className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] ${getStatusClasses(
                                activity.status
                              )}`}
                            >
                              {activity.status}
                            </span>
                          </div>

                          <p className="mt-1 text-xs text-[#8d7971]">
                            {activity.person}
                          </p>

                          <p className="mt-1 text-[11px] text-[#aa9992]">
                            {activity.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </section>

              {/* Quick actions */}

              <section>
                <div className="mb-4">
                  <h3 className="font-serif text-xl text-[#4a1720]">
                    त्वरित कार्य
                  </h3>

                  <p className="mt-1 text-xs text-[#9b8880]">
                    सामान्य प्रशासनिक कार्यों के लिए शॉर्टकट
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigation("registrations")
                    }
                    className="group rounded-2xl border border-[#e3d8c8] bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:border-[#c99a3d]/50 hover:shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8eee2] text-[#8b2635]">
                      <ClipboardList size={20} />
                    </div>

                    <p className="mt-4 font-semibold text-[#4a1720]">
                      पंजीकरण देखें
                    </p>

                    <p className="mt-1 text-xs text-[#8d7971]">
                      नए अनुरोधों की समीक्षा करें
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigation("activities")
                    }
                    className="group rounded-2xl border border-[#e3d8c8] bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:border-[#c99a3d]/50 hover:shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff6df] text-[#a6761f]">
                      <CalendarDays size={20} />
                    </div>

                    <p className="mt-4 font-semibold text-[#4a1720]">
                      कार्यक्रम
                    </p>

                    <p className="mt-1 text-xs text-[#8d7971]">
                      आगामी गतिविधियाँ देखें
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigation("gallery")
                    }
                    className="group rounded-2xl border border-[#e3d8c8] bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:border-[#c99a3d]/50 hover:shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3eee8] text-[#765646]">
                      <ImagePlus size={20} />
                    </div>

                    <p className="mt-4 font-semibold text-[#4a1720]">
                      गैलरी प्रबंधन
                    </p>

                    <p className="mt-1 text-xs text-[#8d7971]">
                      तस्वीरें प्रबंधित करें
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigation("messages")
                    }
                    className="group rounded-2xl border border-[#e3d8c8] bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:border-[#c99a3d]/50 hover:shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1eee9] text-[#765646]">
                      <MessageSquare size={20} />
                    </div>

                    <p className="mt-4 font-semibold text-[#4a1720]">
                      संदेश
                    </p>

                    <p className="mt-1 text-xs text-[#8d7971]">
                      संपर्क अनुरोध देखें
                    </p>
                  </button>

                </div>
              </section>

              {/* Gallery preview */}

              <section className="rounded-2xl border border-[#e3d8c8] bg-white p-5 sm:p-6">

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#4a1720]">
                      गैलरी
                    </h3>

                    <p className="mt-1 text-xs text-[#9b8880]">
                      वेबसाइट पर प्रदर्शित तस्वीरें
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigation("gallery")
                    }
                    className="text-xs font-semibold text-[#8b2635]"
                  >
                    प्रबंधन
                  </button>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {galleryImages.map((image) => (
                    <div
                      key={image}
                      className="aspect-[4/3] overflow-hidden rounded-xl bg-[#f0e9df]"
                    >
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

              </section>

            </div>
          )}

          {/* =================================================
              REGISTRATIONS
          ================================================= */}

          {activeSection === "registrations" && (
            <section className="rounded-2xl border border-[#e3d8c8] bg-white">

              <div className="border-b border-[#eee5d9] p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <h2 className="font-serif text-2xl text-[#4a1720]">
                      पंजीकरण अनुरोध
                    </h2>

                    <p className="mt-1 text-xs text-[#9b8880]">
                      भक्तों द्वारा भेजे गए सेवा एवं संस्कार पंजीकरण
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-[#f8eee2] px-3 py-2 text-xs text-[#8b2635]">
                    <ClipboardList size={16} />
                    कुल 128
                  </div>

                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[750px] text-left">

                  <thead>
                    <tr className="border-b border-[#eee5d9] bg-[#fcfaf6] text-[11px] text-[#9b8880]">
                      <th className="px-5 py-3">
                        पंजीकरण संख्या
                      </th>

                      <th className="px-5 py-3">
                        आवेदक
                      </th>

                      <th className="px-5 py-3">
                        सेवा
                      </th>

                      <th className="px-5 py-3">
                        तिथि
                      </th>

                      <th className="px-5 py-3">
                        स्थिति
                      </th>

                      <th className="px-5 py-3"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredRegistrations.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-[#f0e9df] last:border-0 hover:bg-[#fcfaf6]"
                      >
                        <td className="px-5 py-4 text-xs font-semibold text-[#8b2635]">
                          {item.id}
                        </td>

                        <td className="px-5 py-4 text-sm font-medium text-[#4a1720]">
                          {item.name}
                        </td>

                        <td className="px-5 py-4 text-xs text-[#6f5b55]">
                          {item.service}
                        </td>

                        <td className="px-5 py-4 text-xs text-[#6f5b55]">
                          {item.date}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold ${getStatusClasses(
                              item.status
                            )}`}
                          >
                            {item.status}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8d7971] hover:bg-[#f5eee5] hover:text-[#4a1720]"
                          >
                            <MoreHorizontal size={17} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

            </section>
          )}

          {/* =================================================
              ACTIVITIES
          ================================================= */}

          {activeSection === "activities" && (
            <section className="grid gap-6 lg:grid-cols-3">

              {[
                {
                  title: "सोमवार",
                  event:
                    "सामूहिक ॐ नमः शिवाय जप संकीर्तन एवं भव्य आरती",
                },
                {
                  title: "मंगलवार",
                  event:
                    "सामूहिक श्री हनुमान चालीसा पाठ एवं आरती",
                },
                {
                  title: "शनिवार",
                  event:
                    "सामूहिक सुन्दरकाण्ड पाठ एवं आरती",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#e3d8c8] bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8eee2] text-[#8b2635]">
                    <CalendarDays size={20} />
                  </div>

                  <p className="mt-5 text-xs font-semibold text-[#c99a3d]">
                    {item.title}
                  </p>

                  <h3 className="mt-2 font-serif text-xl text-[#4a1720]">
                    {item.event}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-[#8d7971]">
                    कार्यक्रम प्रबंधन मॉड्यूल — डेमो
                  </p>
                </div>
              ))}

            </section>
          )}

          {/* =================================================
              GALLERY
          ================================================= */}

          {activeSection === "gallery" && (
            <section className="space-y-6">

              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl text-[#4a1720]">
                    गैलरी प्रबंधन
                  </h2>

                  <p className="mt-1 text-xs text-[#9b8880]">
                    वेबसाइट की तस्वीरों का डेमो प्रबंधन
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#4a1720] px-4 py-2.5 text-xs font-semibold text-white"
                >
                  <ImagePlus size={16} />
                  तस्वीर जोड़ें
                </button>
              </div>

              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                {galleryImages.map((image) => (
                  <div
                    key={image}
                    className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-[#e3d8c8] bg-white"
                  >
                    <img
                      src={image}
                      alt=""
                      className="block h-auto w-full"
                    />
                  </div>
                ))}
              </div>

            </section>
          )}

          {/* =================================================
              DONATIONS
          ================================================= */}

          {activeSection === "donations" && (
            <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

              {[
                {
                  title: "अन्नदान",
                  icon: IndianRupee,
                  value: "—",
                },
                {
                  title: "द्रव्यदान",
                  icon: IndianRupee,
                  value: "—",
                },
                {
                  title: "वस्त्रदान",
                  icon: Users,
                  value: "—",
                },
                {
                  title: "शिक्षा दान",
                  icon: FileText,
                  value: "—",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#e3d8c8] bg-white p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8eee2] text-[#8b2635]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-serif text-xl text-[#4a1720]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-2xl font-bold text-[#4a1720]">
                      {item.value}
                    </p>

                    <p className="mt-2 text-xs text-[#9b8880]">
                      दान मॉड्यूल बाद में backend से जोड़ा जाएगा।
                    </p>
                  </div>
                );
              })}

            </section>
          )}

          {/* =================================================
              MESSAGES
          ================================================= */}

          {activeSection === "messages" && (
            <section className="rounded-2xl border border-[#e3d8c8] bg-white">

              <div className="border-b border-[#eee5d9] p-5">
                <h2 className="font-serif text-2xl text-[#4a1720]">
                  संदेश एवं संपर्क
                </h2>

                <p className="mt-1 text-xs text-[#9b8880]">
                  वेबसाइट से प्राप्त संपर्क अनुरोध
                </p>
              </div>

              {[
                "पंजीकरण संबंधी जानकारी चाहिए",
                "रुद्राभिषेक के समय के बारे में जानकारी",
                "मंदिर में धार्मिक आयोजन की जानकारी",
                "सेवा एवं सदस्यता संबंधी प्रश्न",
              ].map((message, index) => (
                <div
                  key={message}
                  className="flex items-center gap-4 border-b border-[#eee5d9] p-5 last:border-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f8eee2] text-[#8b2635]">
                    <MessageSquare size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#4a1720]">
                      {message}
                    </p>

                    <p className="mt-1 text-xs text-[#9b8880]">
                      संपर्क अनुरोध #{index + 1} • डेमो डेटा
                    </p>
                  </div>

                  <ChevronRight
                    size={17}
                    className="text-[#aa9992]"
                  />
                </div>
              ))}

            </section>
          )}

          {/* =================================================
              SETTINGS
          ================================================= */}

          {activeSection === "settings" && (
            <section className="grid gap-6 lg:grid-cols-2">

              <div className="rounded-2xl border border-[#e3d8c8] bg-white p-6">
                <h2 className="font-serif text-2xl text-[#4a1720]">
                  मंदिर जानकारी
                </h2>

                <div className="mt-6 space-y-4 text-sm">

                  <div>
                    <p className="text-xs text-[#9b8880]">
                      मंदिर
                    </p>

                    <p className="mt-1 font-medium">
                      श्री कैलाश धाम मंदिर
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#9b8880]">
                      स्थान
                    </p>

                    <p className="mt-1 font-medium">
                      दौना, जसरा
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#9b8880]">
                      मुख्य पुजारी
                    </p>

                    <p className="mt-1 font-medium">
                      पं. श्री सुशील कुमार द्विवेदी
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#9b8880]">
                      प्रबंधक / सचिव
                    </p>

                    <p className="mt-1 font-medium">
                      श्री मातादीन मिश्र (बबऊ)
                    </p>
                  </div>

                </div>
              </div>

              <div className="rounded-2xl border border-[#e3d8c8] bg-white p-6">
                <h2 className="font-serif text-2xl text-[#4a1720]">
                  सिस्टम स्थिति
                </h2>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center justify-between rounded-xl bg-[#f7f3ed] p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-emerald-600"
                      />

                      <span className="text-sm">
                        वेबसाइट
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-emerald-600">
                      सक्रिय
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-[#f7f3ed] p-4">
                    <div className="flex items-center gap-3">
                      <Clock3
                        size={18}
                        className="text-[#c99a3d]"
                      />

                      <span className="text-sm">
                        Backend
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-[#9b8880]">
                      बाद में जोड़ा जाएगा
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-[#f7f3ed] p-4">
                    <div className="flex items-center gap-3">
                      <XCircle
                        size={18}
                        className="text-[#8b2635]"
                      />

                      <span className="text-sm">
                        Payment Gateway
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-[#9b8880]">
                      बाद में
                    </span>
                  </div>

                </div>
              </div>

            </section>
          )}

        </main> 
      </div>
    </div>
  );
}

export default Admin;