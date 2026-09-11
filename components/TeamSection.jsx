"use client";

import { useRef, useState } from "react";

const team = [
  {
    name: "Артем",
    role: "Сооснователь",
    description: "Краткий текст описывающий Артема и его философию",
    image: "/svet-barbershop/images/hero-portrait.png",
  },
  {
    name: "Борис",
    role: "Сооснователь",
    description: "Краткий текст описывающий Бориса и его подход к работе",
    image: "/svet-barbershop/images/hero-portrait-2.png",
  },
  {
    name: "Сергей",
    role: "Барбер",
    description: "Краткий текст описывающий Сергея и его стиль",
    image: "/svet-barbershop/images/hero-portrait-3.png",
  },
];

const SWIPE_THRESHOLD = 70;

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);

  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [incomingVisible, setIncomingVisible] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const startPositionRef = useRef(0);
  const verticalDragRef = useRef(false);
  const pointerIdRef = useRef(null);

  const activeMember = team[activeIndex];
  const incomingMember =
    nextIndex !== null ? team[nextIndex] : null;

  function changeSlide(newIndex, newDirection) {
    if (isAnimating || newIndex === activeIndex) return;

    setDirection(newDirection);
    setNextIndex(newIndex);
    setIsAnimating(true);
    setIncomingVisible(false);
    setDragOffset(0);

    setTimeout(() => {
      setIncomingVisible(true);
    }, 120);

    setTimeout(() => {
      setActiveIndex(newIndex);
      setNextIndex(null);
      setIncomingVisible(false);
      setIsAnimating(false);
    }, 720);
  }

  function nextSlide() {
    const newIndex = (activeIndex + 1) % team.length;

    changeSlide(newIndex, "next");
  }

  function prevSlide() {
    const newIndex =
      activeIndex === 0
        ? team.length - 1
        : activeIndex - 1;

    changeSlide(newIndex, "prev");
  }

  function handlePointerDown(event) {
    if (isAnimating || pointerIdRef.current !== null || !event.isPrimary) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    if (event.pointerType === "mouse") {
      event.preventDefault();
    }

    pointerIdRef.current = event.pointerId;
    verticalDragRef.current = window.matchMedia(
      "(min-width: 900px)"
    ).matches;
    startPositionRef.current = verticalDragRef.current
      ? event.clientY
      : event.clientX;

    setIsDragging(true);
    setDragOffset(0);

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    if (pointerIdRef.current !== event.pointerId) return;

    const currentPosition = verticalDragRef.current
      ? event.clientY
      : event.clientX;
    const delta = currentPosition - startPositionRef.current;

    setDragOffset(Math.max(-180, Math.min(180, delta)));
  }

  function finishDrag(event) {
    if (pointerIdRef.current !== event.pointerId) return;

    const offset = (verticalDragRef.current ? event.clientY : event.clientX)
      - startPositionRef.current;

    setIsDragging(false);
    pointerIdRef.current = null;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {}

    if (offset <= -SWIPE_THRESHOLD) {
      nextSlide();
      return;
    }

    if (offset >= SWIPE_THRESHOLD) {
      prevSlide();
      return;
    }

    setDragOffset(0);
  }

  function cancelDrag(event) {
    if (pointerIdRef.current !== event.pointerId) return;

    setIsDragging(false);
    setDragOffset(0);
    pointerIdRef.current = null;
  }

  const dragProgress = Math.min(
    Math.abs(dragOffset) / 180,
    1
  );

  return (
    <section className="team-section" id="team">
      <div className="team-section__eyebrow">
        Команда
      </div>

      <div className="team-stage">
      <div
        className={`team-card ${
          isDragging ? "team-card--dragging" : ""
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={cancelDrag}
        onLostPointerCapture={cancelDrag}
        onDragStart={(event) => event.preventDefault()}
      >
        {/* Текущий слайд */}
        <div
          key={`current-${activeIndex}`}
          className={[
            "team-slide",
            "team-slide--current",
            isAnimating
              ? direction === "next"
                ? "team-slide--exit-left"
                : "team-slide--exit-right"
              : "",
          ].join(" ")}
          style={
            isDragging
              ? {
                  transform: verticalDragRef.current
                    ? `translateY(${dragOffset}px)`
                    : `translateX(${dragOffset}px)`,
                  opacity: 1 - dragProgress * 0.65,
                  transition: "none",
                }
              : undefined
          }
        >
          <div
            className="team-card__portrait"
            style={{
              backgroundImage: `url(${activeMember.image})`,
            }}
          />

          <div className="team-card__fade" />

          <div className="team-card__content">
            <div className="team-card__person">
              <div className="team-card__name">
                {activeMember.name}
              </div>

              <div className="team-card__role">
                {activeMember.role}
              </div>
            </div>

            <div className="team-card__description">
              {activeMember.description}
            </div>
          </div>
        </div>

        {/* Входящий слайд */}
        {incomingMember && (
          <div
            key={`incoming-${nextIndex}`}
            className={[
              "team-slide",
              direction === "next"
                ? "team-slide--enter-right"
                : "team-slide--enter-left",
              incomingVisible
                ? "team-slide--enter-active"
                : "",
            ].join(" ")}
          >
            <div
              className="team-card__portrait"
              style={{
                backgroundImage: `url(${incomingMember.image})`,
              }}
            />

            <div className="team-card__fade" />

            <div className="team-card__content">
              <div className="team-card__person">
                <div className="team-card__name">
                  {incomingMember.name}
                </div>

                <div className="team-card__role">
                  {incomingMember.role}
                </div>
              </div>

              <div className="team-card__description">
                {incomingMember.description}
              </div>
            </div>
          </div>
        )}

        <button
          className="team-card__hit-area team-card__hit-area--left"
          aria-hidden="true"
          tabIndex={-1}
        />

        <button
          className="team-card__hit-area team-card__hit-area--right"
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>

      <div className="team-pagination">
        {team.map((member, index) => (
          <button
            key={member.name}
            className={`team-pagination__item ${
              index === activeIndex && !isAnimating
                ? "team-pagination__item--active"
                : index === nextIndex
                  ? "team-pagination__item--active"
                  : ""
            }`}
            onClick={() => {
              const newDirection =
                index > activeIndex
                  ? "next"
                  : "prev";

              changeSlide(index, newDirection);
            }}
            aria-label={`Показать ${member.name}`}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
