import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Heart, MessageCircle, Send, Play, Sparkles, Zap, Shield, Lock, Search, Layers,
  Truck, Headphones, Briefcase, Rocket, ArrowRight, Mail, Phone, Check, TrendingUp, Eye, CalendarCheck,
} from "lucide-react";
import heroVideo from "@/assets/hero_floating_screens.mp4.asset.json";
import phones from "@/assets/phones_reels.jpg";
import reelTruck from "@/assets/reel_truck.jpg";
import reelCreator from "@/assets/reel_creator.jpg";
import reelCafe from "@/assets/reel_cafe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Falcon Content Factory — контент для соцсетей на автопилоте" },
      { name: "description", content: "Один бриф — готовые посты, карусели, Reels, Shorts и видео в вашем стиле для Instagram, TikTok, YouTube и Telegram." },
      { property: "og:title", content: "Falcon Content Factory — SMM на автопилоте" },
      { property: "og:description", content: "AI-фабрика контента: один бриф на входе, готовый контент для всех соцсетей на выходе." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.animationDelay = `${delay}ms`; el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => { const p = Math.min((t - t0) / 1600, 1); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(el); return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-xs font-bold uppercase tracking-[0.25em] text-gradient">{children}</p>
);
const H2 = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl ${className}`}>{children}</h2>
);

function ReelCard({ img, tag, views, className = "" }: { img: string; tag: string; views: string; className?: string }) {
  return (
    <div className={`relative aspect-[9/16] overflow-hidden rounded-3xl border border-border shadow-glow ${className}`}>
      <img src={img} alt={tag} loading="lazy" width={720} height={1280} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/30" />
      <div className="absolute left-3 top-3 rounded-full glass px-3 py-1 text-xs font-semibold">{tag}</div>
      <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4 text-foreground">
        <Heart className="h-6 w-6 fill-hot text-hot" /><MessageCircle className="h-6 w-6" /><Send className="h-6 w-6" />
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-sm font-semibold">
        <Eye className="h-4 w-4" /> {views}
      </div>
    </div>
  );
}

const platforms = ["Instagram", "TikTok", "YouTube", "Facebook", "LinkedIn", "Telegram", "Reels", "Shorts", "Stories", "Carousels"];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border glass">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand font-display font-bold shadow-glow">F</span>
            <span className="leading-tight"><b className="block">Falcon</b><span className="text-xs text-muted-foreground">Content Factory</span></span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {[["Как это работает", "#how"], ["Возможности", "#features"], ["Профессор", "#prof"], ["Для кого", "#who"]].map(([l, h]) => (
              <a key={h} href={h} className="transition-colors hover:text-foreground">{l}</a>
            ))}
          </nav>
          <a href="#join" className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold shadow-glow transition-transform hover:scale-105">Подключиться</a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen pt-32">
        <video src={heroVideo.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold">
                <span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> AI-студия контента для растущих компаний
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
                Один бриф на входе.<br /><span className="text-gradient">Вирусный контент</span><br />на выходе.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground">
                Falcon превращает ваш сайт, документы и идеи в посты, карусели, Reels, Shorts и видео для всех соцсетей — в утверждённом стиле бренда, каждую неделю.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
              <a href="#join" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-bold shadow-glow transition-transform hover:scale-105">
                Запустить фабрику <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#showcase" className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 font-bold transition-colors hover:bg-secondary">
                <Play className="h-5 w-5 fill-foreground" /> Смотреть примеры
              </a>
            </Reveal>
            <Reveal delay={400} className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[[30, "+", "единиц контента / мес"], [6, "", "соцсетей из 1 брифа"], [4, "", "формата: 1:1 → 16:9"]].map(([n, s, l]) => (
                <div key={l as string}>
                  <div className="font-display text-3xl font-bold text-gradient"><Counter to={n as number} suffix={s as string} /></div>
                  <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="relative h-[620px]">
            <div className="absolute left-0 top-10 w-52 -rotate-6 animate-float"><ReelCard img={reelTruck} tag="Reels 9:16" views="128K" /></div>
            <div className="absolute left-1/2 top-0 z-10 w-60 -translate-x-1/2 animate-float-slow"><ReelCard img={reelCreator} tag="TikTok" views="1.2M" /></div>
            <div className="absolute right-0 top-24 w-52 rotate-6 animate-float"><ReelCard img={reelCafe} tag="Shorts" views="86K" /></div>
            <div className="absolute bottom-16 left-4 z-20 flex items-center gap-3 rounded-2xl glass px-4 py-3 shadow-glow animate-float-slow">
              <TrendingUp className="h-5 w-5 text-lime" /><div className="text-sm"><b>+340%</b> охвата<div className="text-xs text-muted-foreground">пример роста</div></div>
            </div>
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 rounded-2xl glass px-4 py-3 shadow-glow animate-float">
              <CalendarCheck className="h-5 w-5 text-primary" /><div className="text-sm font-semibold">Запланировано · вт 10:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-8">
        <p className="mb-6 text-center text-sm text-muted-foreground">Одна фабрика для всех каналов, где есть ваша аудитория</p>
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-16 pr-16">
            {[...platforms, ...platforms].map((p, i) => (
              <span key={i} className="font-display text-3xl font-bold text-muted-foreground/60 transition-colors hover:text-foreground md:text-4xl">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal><Eyebrow>Почему компании буксуют в соцсетях</Eyebrow></Reveal>
          <Reveal delay={100}><H2 className="mt-6">Регулярный контент — это отдельная работа. <span className="text-gradient">Не обязательно ваша.</span></H2></Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[["Нет времени", "Посты выходят раз в месяц, когда «руки дошли»."], ["Дорогая команда", "Дизайнер, монтажёр, копирайтер и SMM — это бюджет."], ["Нет системы", "Каждый пост — в новом стиле, бренд теряется."]].map(([t, d], i) => (
              <Reveal key={t} delay={i * 120}>
                <div className="h-full rounded-3xl glass p-8 text-left transition-transform hover:-translate-y-2">
                  <div className="font-display text-5xl font-bold text-hot/80">0{i + 1}</div>
                  <h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="relative py-32">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal><img src={phones} alt="Готовый контент для Reels, каруселей и Shorts" loading="lazy" width={1280} height={1280} className="w-full rounded-[2.5rem]" /></Reveal>
          <div>
            <Reveal><Eyebrow>Что вы получаете</Eyebrow></Reveal>
            <Reveal delay={100}><H2 className="mt-6">Объём контент-команды с дисциплиной фабрики</H2></Reveal>
            <Reveal delay={200}><p className="mt-6 text-lg text-muted-foreground">Один бриф превращается в полный набор для каждого формата и языка.</p></Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[["Пост", "Изображение, текст, подпись и хэштеги"], ["Карусель", "Слайды, текст, обложка"], ["Reels / Shorts", "Вертикальный MP4, субтитры, обложка"], ["YouTube 16:9", "Видео, описание, превью"]].map(([t, d], i) => (
                <Reveal key={t} delay={i * 100}>
                  <div className="group h-full rounded-2xl glass p-5 transition-all hover:border-primary/60 hover:shadow-glow">
                    <div className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-lime" />{t}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Reveal><Eyebrow>Как это работает</Eyebrow></Reveal>
            <Reveal delay={100}><H2 className="mt-6">От идеи до публикации<br />за четыре шага</H2></Reveal>
          </div>
          <div className="mt-20 grid gap-6 md:grid-cols-4">
            {[["Подключите компанию", "Сайт, документы и заметки — фабрика соберёт факты."], ["Утвердите стиль один раз", "Цвета, шрифты, логотип и тон в 1:1, 4:5, 9:16, 16:9."], ["Закажите контент", "Короткий бриф или концепции от Профессора."], ["Проверьте и опубликуйте", "Комплекты попадают в календарь и выходят в соцсетях."]].map(([t, d], i) => (
              <Reveal key={t} delay={i * 120}>
                <div className="relative h-full rounded-3xl glass p-8 transition-transform hover:-translate-y-2">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand font-display text-xl font-bold shadow-glow">0{i + 1}</div>
                  <h3 className="mt-6 text-lg font-bold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSOR */}
      <section id="prof" className="relative py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <Reveal><Eyebrow>Знакомьтесь: профессор вирусности</Eyebrow></Reveal>
            <Reveal delay={100}><H2 className="mt-6">Изучает, что работает в вашей нише, и создаёт своё</H2></Reveal>
            <Reveal delay={200}><p className="mt-6 text-lg text-muted-foreground">AI-исследователь находит сильные примеры, разбирает, почему они работают, и превращает приёмы в концепции на ваших фактах и в вашем стиле.</p></Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Исследование ниши", "Pattern Cards: хук, структура, CTA", "3 оригинальные концепции", "Creative Score 0–100"].map((t, i) => (
                <Reveal key={t} delay={i * 80}><span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm"><Sparkles className="h-4 w-4 text-accent" />{t}</span></Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="rounded-[2rem] glass p-8 shadow-glow">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand"><Zap className="h-6 w-6" /></div>
                <div><div className="font-display text-xl font-bold">Creative Score</div><div className="text-sm text-muted-foreground">Объяснимая рубрика</div></div>
                <div className="ml-auto font-display text-4xl font-bold text-gradient"><Counter to={92} /></div>
              </div>
              <div className="mt-8 space-y-5">
                {[["Соответствие аудитории", 20, 20], ["Первые секунды", 19, 20], ["Структура и темп", 14, 15], ["Польза и обещание", 14, 15], ["Новизна", 9, 10], ["Причина поделиться", 8, 10], ["Связь с брендом и CTA", 8, 10]].map(([l, v, m]) => (
                  <div key={l as string}>
                    <div className="flex justify-between text-sm"><span>{l}</span><b>{v}/{m}</b></div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${((v as number) / (m as number)) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTROL */}
      <section id="features" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Reveal><Eyebrow>Контроль у вас</Eyebrow></Reveal>
            <Reveal delay={100}><H2 className="mt-6">Автоматизация, которая соблюдает ваши правила</H2></Reveal>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[[Shield, "Политика публикации", "Автопубликация, согласование или ручная загрузка."], [Lock, "Доступы через коннекторы", "Ключи каналов никогда не попадают в контент."], [Search, "Контроль качества", "Видно, какое правило нарушено и что исправить."], [Layers, "Много компаний — один кабинет", "Свой стиль, календарь и роли у каждой."]].map(([Icon, t, d], i) => {
              const I = Icon as typeof Shield;
              return (
                <Reveal key={t as string} delay={i * 100}>
                  <div className="group h-full rounded-3xl glass p-8 transition-all hover:-translate-y-2 hover:shadow-glow">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground"><I className="h-6 w-6" /></div>
                    <h3 className="mt-6 text-lg font-bold">{t as string}</h3><p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO */}
      <section id="who" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Reveal><Eyebrow>Для кого</Eyebrow></Reveal>
            <Reveal delay={100}><H2 className="mt-6">Для компаний, которые хотят, <span className="text-gradient">чтобы их видели</span></H2></Reveal>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[[Truck, "Траковые и логистические", "Нанимайте водителей и привлекайте грузоотправителей."], [Headphones, "Диспетчеры и брокеры", "Показывайте перевозчикам, почему с вами выгодно."], [Briefcase, "Сервисный бизнес", "Экспертиза в полезных постах и видео."], [Rocket, "Стартапы и бренды", "Солидно с первого дня, без контент-команды."]].map(([Icon, t, d], i) => {
              const I = Icon as typeof Truck;
              return (
                <Reveal key={t as string} delay={i * 100}>
                  <div className="relative h-full overflow-hidden rounded-3xl glass p-8 transition-transform hover:-translate-y-2">
                    <I className="absolute -right-4 -top-4 h-28 w-28 text-primary/10" />
                    <I className="h-8 w-8 text-accent" />
                    <h3 className="mt-6 text-lg font-bold">{t as string}</h3><p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="px-6 py-32">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-brand p-12 text-center shadow-glow md:p-20">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative">
              <h2 className="font-display text-4xl font-extrabold leading-tight md:text-6xl">Выведем ваш бренд в эфир</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85">Оставьте заявку — проведём короткий звонок, настроим Brand Kit и выпустим первый комплект контента.</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a href="mailto:info@falconai.llc" className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 font-bold text-foreground transition-transform hover:scale-105"><Mail className="h-5 w-5" /> info@falconai.llc</a>
                <a href="tel:+12202200100" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-8 py-4 font-bold transition-colors hover:bg-primary-foreground/10"><Phone className="h-5 w-5" /> +1 (220) 220-0100</a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">© 2026 Falcon Content Factory</footer>
    </div>
  );
}
