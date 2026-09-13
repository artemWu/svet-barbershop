import Image from "next/image";
import BorderGlow from "@/components/BorderGlow";
import ServiceCard from "../components/ServiceCard";
import TeamSection from "../components/TeamSection";
import ReviewsSection from "../components/ReviewsSection";
import BookingSection from "../components/BookingSection";
import ContactsSection from "../components/ContactsSection";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <div
          className="hero__content"
          aria-label="Парикмахерская Свет"
        >
          <Image
            src="/svet-barbershop/svg/logo.png"
            alt="Свет, парикмахерская"
            width={600}
            height={600}
            className="hero__logo hero-animate hero-animate--logo"
            priority
            unoptimized
          />

          <div className="location hero-animate hero-animate--location">
            <p className="location__station">
              Чкаловская
            </p>

            <p className="location__hours">
              с 10:00 до 22:00
            </p>

            <p className="location__schedule">
              Ежедневно
            </p>
          </div>

          <BorderGlow
            className="booking-glow"
            edgeSensitivity={12}
            glowColor="29 12 58"
            backgroundColor="#171513"
            borderRadius={12}
            glowRadius={40}
            glowIntensity={1.45}
            coneSpread={28}
            animated
            colors={[
              "#a29588",
              "#f2ebe4",
              "#a29588",
            ]}
            fillOpacity={0.18}
          >
            <a
              className="booking-button"
              href="https://n365899.yclients.com/company/348811/personal/menu?o="
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Записаться</span>
            </a>
          </BorderGlow>
        </div>

        <div className="hero__portraits hero-animate hero-animate--portrait">
          <div
            className="hero__portrait hero__portrait--left"
            role="img"
            aria-label="Портрет мастера парикмахерской"
          />

          <div
            className="hero__portrait hero__portrait--right"
            role="img"
            aria-label="Портрет второго мастера парикмахерской"
          />
        </div>
      </section>

    <main>
      {/* SERVICES */}
      <section
        className="services"
        id="services"
      >
        <div className="services__title">
          <Reveal y={12}>
            <span>Услуги</span>
          </Reveal>
        </div>

        <div className="services__list">
          <Reveal
            delay={0}
            y={24}
          >
            <ServiceCard
              title="Стрижки"
              price="от 3 500 ₽"
              image="/svet-barbershop/images/haircut.webp"
              background="beige"
            />
          </Reveal>

          <Reveal
            delay={90}
            y={24}
          >
            <ServiceCard
              title="Борода"
              price="от 2 000 ₽"
              image="/svet-barbershop/images/beard.webp"
              background="brown"
            />
          </Reveal>

          <Reveal
            delay={180}
            y={24}
          >
            <ServiceCard
              title="Уход за лицом"
              price="от 1 800 ₽"
              image="/svet-barbershop/images/care.webp"
              background="gray"
            />
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <Reveal y={28}>
        <TeamSection />
      </Reveal>

      {/* REVIEWS */}
      <Reveal y={28}>
        <ReviewsSection />
      </Reveal>

      {/* BOOKING */}
      <Reveal y={18}>
        <BookingSection />
      </Reveal>

      {/* CONTACTS */}
      <Reveal y={28}>
        <ContactsSection />
      </Reveal>

    </main>

      {/* FOOTER */}
      <Reveal y={16}>
        <Footer />
      </Reveal>
    </>
  );
}
