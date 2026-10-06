"use client";

import { useEffect } from "react";

const COUNTER_ID = 110918228;
const CONSENT_KEY = "svet-cookie-consent";

function loadMetrika() {
  if (window.ym) return;

  window.ym = function (...args) {
    (window.ym.a = window.ym.a || []).push(args);
  };
  window.ym.l = 1 * new Date();

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${COUNTER_ID}`;
  document.head.appendChild(script);

  window.ym(COUNTER_ID, "init", {
    ssr: true,
    clickmap: true,
    referrer: document.referrer,
    url: window.location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  });
}

export default function YandexMetrika() {
  useEffect(() => {
    if (window.localStorage.getItem(CONSENT_KEY) === "accepted") {
      loadMetrika();
    }

    function handleConsent() {
      loadMetrika();
    }

    window.addEventListener("svet-cookie-accepted", handleConsent);
    return () => window.removeEventListener("svet-cookie-accepted", handleConsent);
  }, []);

  return null;
}
