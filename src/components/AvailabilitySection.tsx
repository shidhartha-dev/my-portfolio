"use client";

import { useState, useMemo } from "react";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function AvailabilitySection() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const { daysInMonth, startDay } = useMemo(() => {
    const d = new Date(currentYear, currentMonth + 1, 0).getDate();
    const s = new Date(currentYear, currentMonth, 1).getDay();
    return { daysInMonth: d, startDay: s };
  }, [currentMonth, currentYear]);

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const isPast = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <section id="availability" className="section">
      <div className="container">
        <div className="availability-wrapper">
          <div style={{ marginBottom: "2rem" }}>
            <p className="section-label" style={{ textAlign: "left" }}>SCHEDULE</p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 900,
                marginTop: "1rem",
                textAlign: "left",
              }}
            >
              Availability
            </h2>
          </div>

          <div className="availability-header">
            <div>
              <h3>Any questions about a project?</h3>
              <p>Feel free to reach out — book a 30 min call.</p>
            </div>
            <div className="availability-status">
              <span className="dot" />
              <span>Open for meetings</span>
            </div>
          </div>

          <div className="calendar">
            <div className="calendar-header">
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                <h4 className="calendar-title">
                  {MONTH_NAMES[currentMonth]} {currentYear}
                </h4>
                <span className="calendar-subtitle">30 min call</span>
              </div>
              <div className="calendar-nav">
                <button onClick={prevMonth} aria-label="Previous month">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button onClick={nextMonth} aria-label="Next month">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="calendar-weekdays">
              {WEEKDAYS.map((day) => (
                <div key={day} className="calendar-weekday">
                  {day}
                </div>
              ))}
            </div>

            <div className="calendar-days">
              {/* Empty cells for days before start of month */}
              {Array.from({ length: startDay }).map((_, i) => (
                <div key={`empty-${i}`} className="calendar-day" />
              ))}
              {/* Day cells */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const past = isPast(day);
                const todayFlag = isToday(day);
                let className = "disabled";
                if (todayFlag) className = "today";
                else if (!past) className = "available";
                return (
                  <div key={day} className="calendar-day">
                    <button
                      type="button"
                      className={className}
                      disabled={past && !todayFlag}
                      title={todayFlag ? "Today" : !past ? "Available" : undefined}
                    >
                      {day}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
