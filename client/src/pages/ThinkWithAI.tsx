import { Link } from "wouter";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Minimize,
  Sparkles,
} from "lucide-react";

const ASSETS = {
  story: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663277276996/uOAAbgylKVrWfVkH.png",
  orchard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663277276996/CHgSkXVTOyWAiTMj.png",
  mathVideo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663277276996/VGWlUCXBYIAKcALt.mp4",
  mathPoster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663277276996/qUsUHDVKHlNYcESi.jpg",
  arenaVideo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663277276996/hkHdPHcpYjNLPiCF.mp4",
  arenaPoster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663277276996/miLxjSefDJVEqKuU.jpg",
};

const totalSlides = 9;

function SlideShell({
  eyebrow,
  children,
  source,
}: {
  eyebrow: string;
  children: ReactNode;
  source?: ReactNode;
}) {
  return (
    <div className="relative h-full min-h-0 overflow-hidden bg-[#fffdf8] text-[#1a1a1a]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: "radial-gradient(#d8d4cb 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative flex h-full min-h-0 flex-col px-6 py-7 sm:px-10 lg:px-16 lg:py-10">
        <div className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#168f84] sm:text-xs">
          {eyebrow}
        </div>
        <div className="min-h-0 flex-1">{children}</div>
        {source ? (
          <div className="mt-2 max-w-5xl font-mono text-[8px] leading-relaxed text-[#746f66] sm:text-[10px]">
            {source}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function KeyLine({ children, color = "#2ec4b6" }: { children: ReactNode; color?: string }) {
  return (
    <div
      className="flex items-start gap-3 border-l-4 py-1 pl-4 text-base leading-snug text-[#3b3a36] sm:text-lg lg:text-xl"
      style={{ borderColor: color }}
    >
      {children}
    </div>
  );
}

function ProductFrame({ children }: { children: ReactNode }) {
  return (
    <div className="border border-[#302f2b] bg-[#fffdf8] p-1.5 shadow-[5px_5px_0_rgba(25,25,23,0.08)]">
      {children}
    </div>
  );
}

function PresentationContent({ slide }: { slide: number }) {
  switch (slide) {
    case 0:
      return (
        <SlideShell
          eyebrow="The AI moment"
          source={
            <>
              Provider access rules vary by service and region. Illustrative examples: <a className="underline" href="https://openai.com/policies/terms-of-use/" target="_blank" rel="noreferrer">OpenAI Terms (2026)</a> require users to be at least 13 or the local digital-consent age, with guardian permission for under-18s; <a className="underline" href="https://www.anthropic.com/legal/consumer-terms" target="_blank" rel="noreferrer">Anthropic Consumer Terms</a> require users to be at least 18 or the local consent age.
            </>
          }
        >
          <div className="flex h-full flex-col justify-center pb-5 sm:pb-8">
            <div className="mb-5 inline-flex w-fit items-center gap-2 border border-[#f2c94c] bg-[#fff8d9] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#5d5018] sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" /> The need
            </div>
            <h1 className="max-w-5xl font-heading text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[0.94] tracking-[-0.055em]">
              AI is becoming the new <span className="text-[#168f84]">thinking environment.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#56544e] sm:text-xl lg:text-2xl">
              Our kids need preparation for that world—before AI becomes a default shortcut.
            </p>
          </div>
        </SlideShell>
      );
    case 1:
      return (
        <SlideShell eyebrow="The gap">
          <div className="flex h-full flex-col justify-center">
            <h2 className="max-w-5xl font-heading text-[clamp(2.3rem,6.3vw,5.8rem)] font-bold leading-[0.96] tracking-[-0.05em]">
              Commercial AI is powerful.<br />
              <span className="text-[#e75757]">It is rarely a child-centered classroom.</span>
            </h2>
            <div className="mt-8 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
              {[
                ["Age gates", "Access conditions vary by product and location.", "#f2c94c"],
                ["Adult-first tools", "General-purpose products are not learning environments.", "#ff6b6b"],
                ["Fast outputs", "A polished answer is not evidence of learning.", "#2ec4b6"],
              ].map(([title, body, color]) => (
                <div key={title} className="border border-[#302f2b] bg-[#fffdf8] p-5" style={{ borderTopWidth: 7, borderTopColor: color }}>
                  <div className="font-heading text-xl font-semibold">{title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-[#625f58] lg:text-base">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </SlideShell>
      );
    case 2:
      return (
        <SlideShell eyebrow="Our response">
          <div className="grid h-full grid-cols-1 items-center gap-8 py-3 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            <div>
              <h2 className="font-heading text-[clamp(2.4rem,5.6vw,5.35rem)] font-bold leading-[0.98] tracking-[-0.05em]">
                A supervised, project-based environment for <span className="text-[#168f84]">thinking with AI.</span>
              </h2>
              <div className="mt-8 max-w-3xl space-y-5">
                <KeyLine>Specially designed harnesses structure the learning context.</KeyLine>
                <KeyLine color="#f2c94c">Supervision keeps the learner’s questions and decisions in view.</KeyLine>
                <KeyLine color="#ff6b6b">Projects end in explainable artifacts—not copied outputs.</KeyLine>
              </div>
            </div>
            <div className="border border-[#302f2b] bg-[#fff7d8] p-6 sm:p-8">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#5d5018]">The intended outcome</div>
              <div className="mt-4 font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em]">A skill<br />and a habit.</div>
              <p className="mt-5 text-base leading-relaxed text-[#5d5018]">Children learn to use AI as a collaborator for inquiry—not a replacement for their thinking.</p>
            </div>
          </div>
        </SlideShell>
      );
    case 3:
      return (
        <SlideShell eyebrow="The supervised learning loop">
          <div className="flex h-full flex-col justify-center">
            <h2 className="font-heading text-[clamp(2.2rem,5.4vw,5.2rem)] font-bold leading-[0.96] tracking-[-0.05em]">
              The learner must <span className="text-[#168f84]">think and decide</span> at every step.
            </h2>
            <div className="mt-8 grid grid-cols-5 gap-0 border-y border-[#302f2b]">
              {[
                ["01", "Frame", "Own the question", "#2ec4b6"],
                ["02", "Investigate", "Examine evidence", "#f2c94c"],
                ["03", "Test", "Compare ideas", "#ff6b6b"],
                ["04", "Explain", "Defend a choice", "#2ec4b6"],
                ["05", "Create", "Revise the work", "#f2c94c"],
              ].map(([number, title, body, color], index) => (
                <div key={title} className={`min-h-[146px] p-3 sm:min-h-[190px] sm:p-5 ${index < 4 ? "border-r border-[#302f2b]" : ""}`} style={{ borderTop: `7px solid ${color}` }}>
                  <div className="font-mono text-[9px] text-[#6c685f] sm:text-xs">{number}</div>
                  <div className="mt-5 font-heading text-base font-semibold sm:text-2xl">{title}</div>
                  <div className="mt-1.5 hidden text-xs leading-snug text-[#625f58] sm:block">{body}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 font-heading text-xl font-semibold text-[#3b3a36] sm:text-2xl">AI supports the process. The child owns the reasoning.</p>
          </div>
        </SlideShell>
      );
    case 4:
      return (
        <SlideShell eyebrow="Demo 01 / Story Teller">
          <div className="grid h-full grid-cols-1 items-center gap-7 py-3 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <h2 className="font-heading text-[clamp(2.45rem,5.3vw,5rem)] font-bold leading-[0.98] tracking-[-0.05em]">Stories make <span className="text-[#168f84]">reasoning</span> safe to practise.</h2>
              <div className="mt-7 border-l-4 border-[#2ec4b6] pl-5 font-heading text-xl font-semibold leading-snug sm:text-3xl">“What do we know—and what are we only inferring?”</div>
            </div>
            <div>
              <ProductFrame>
                <img src={ASSETS.story} alt="Tiger, Rabbit, and Leopard student story prototype" className="h-[240px] w-full object-cover object-center sm:h-[355px]" />
              </ProductFrame>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#746f66]">Student story prototype / evidence before conclusion</div>
            </div>
          </div>
        </SlideShell>
      );
    case 5:
      return (
        <SlideShell
          eyebrow="Demo 02 / Math Wizard"
          source={<>Mathematical source: <a className="underline" href="https://www.imo-official.org/problems/2011/" target="_blank" rel="noreferrer">International Mathematical Olympiad 2011, Problem 2</a>. The course harness guides the learner through the windmill proof pathway rather than providing a completed proof.</>}
        >
          <div className="grid h-full grid-cols-1 items-center gap-7 py-3 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <h2 className="font-heading text-[clamp(2.35rem,5.15vw,4.9rem)] font-bold leading-[0.98] tracking-[-0.05em]">AI helps build the <span className="text-[#e75757]">proof.</span><br />It does not skip to it.</h2>
              <div className="mt-8 grid grid-cols-3 border-y border-[#302f2b]">
                {[["Simplify", "Make it testable", "#2ec4b6"], ["Challenge", "Find the break", "#ff6b6b"], ["Explain", "Justify the rule", "#f2c94c"]].map(([title, body, color], index) => (
                  <div key={title} className={`min-h-[120px] p-3 sm:p-5 ${index < 2 ? "border-r border-[#302f2b]" : ""}`} style={{ borderTop: `7px solid ${color}` }}>
                    <div className="font-heading text-base font-semibold sm:text-xl">{title}</div>
                    <div className="mt-2 text-[11px] leading-snug text-[#625f58] sm:text-sm">{body}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ProductFrame>
                <video className="h-[245px] w-full bg-black object-cover sm:h-[350px]" autoPlay muted loop playsInline controls poster={ASSETS.mathPoster}>
                  <source src={ASSETS.mathVideo} type="video/mp4" />
                </video>
              </ProductFrame>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#746f66]">Goat Tracker / a rotating-line proof challenge</div>
            </div>
          </div>
        </SlideShell>
      );
    case 6:
      return (
        <SlideShell eyebrow="Demo 03 / Game Changer">
          <div className="grid h-full grid-cols-1 items-center gap-7 py-3 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <ProductFrame>
                <video className="h-[245px] w-full bg-black object-cover sm:h-[350px]" autoPlay muted loop playsInline controls poster={ASSETS.arenaPoster}>
                  <source src={ASSETS.arenaVideo} type="video/mp4" />
                </video>
              </ProductFrame>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#746f66]">Battle Arena / robot-flight screen recording</div>
            </div>
            <div>
              <h2 className="font-heading text-[clamp(2.45rem,5.4vw,5.15rem)] font-bold leading-[0.98] tracking-[-0.05em]">Make strategy <span className="text-[#e75757]">observable.</span></h2>
              <div className="mt-7 grid grid-cols-3 border-y border-[#302f2b]">
                {[["Hypothesis", "#2ec4b6"], ["Match", "#f2c94c"], ["Reflection", "#ff6b6b"]].map(([title, color], index) => (
                  <div key={title} className={`min-h-[96px] p-3 font-heading text-sm font-semibold sm:min-h-[116px] sm:p-4 sm:text-lg ${index < 2 ? "border-r border-[#302f2b]" : ""}`} style={{ borderTop: `7px solid ${color}` }}>{title}</div>
                ))}
              </div>
              <p className="mt-6 font-heading text-2xl font-semibold leading-snug text-[#3b3a36]">From “Is the bot smart?”<br />to “What changed—and why?”</p>
            </div>
          </div>
        </SlideShell>
      );
    case 7:
      return (
        <SlideShell eyebrow="Demo 04 / App Builder">
          <div className="grid h-full grid-cols-1 items-center gap-7 py-3 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <h2 className="font-heading text-[clamp(2.4rem,5.25vw,5rem)] font-bold leading-[0.98] tracking-[-0.05em]">Turn an idea into a <span className="text-[#168f84]">working loop.</span></h2>
              <div className="mt-8 flex flex-wrap items-center gap-2 font-heading text-lg font-semibold sm:text-2xl">
                <span className="border-b-4 border-[#2ec4b6] pb-1">Specify</span><ArrowRight className="h-5 w-5 text-[#746f66]" />
                <span className="border-b-4 border-[#f2c94c] pb-1">Observe</span><ArrowRight className="h-5 w-5 text-[#746f66]" />
                <span className="border-b-4 border-[#ff6b6b] pb-1">Revise</span>
              </div>
            </div>
            <div>
              <ProductFrame>
                <img src={ASSETS.orchard} alt="Orchard app builder prototype" className="h-[240px] w-full object-cover object-center sm:h-[350px]" />
              </ProductFrame>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#746f66]">Orchard / a student-built time and task loop</div>
            </div>
          </div>
        </SlideShell>
      );
    case 8:
      return (
        <SlideShell eyebrow="The invitation">
          <div className="flex h-full flex-col justify-center">
            <div className="mx-auto max-w-5xl text-center">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#168f84]">Now in iteration 2</div>
              <h2 className="mt-5 font-heading text-[clamp(2.4rem,6.1vw,5.9rem)] font-bold leading-[0.96] tracking-[-0.055em]">A class of <span className="text-[#e75757]">about ten students.</span><br />A model ready to learn.</h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#5e5a52] sm:text-xl">We are refining the learning environment with real student work, close supervision, and observable artifacts.</p>
              <div className="mt-9 grid grid-cols-1 gap-3 text-left sm:grid-cols-3 sm:gap-5">
                {[["Educators", "Shape the learning experience."], ["Families", "Stress-test relevance and safety."], ["Evaluators", "Help us learn from the artifacts."]].map(([title, body], index) => (
                  <div key={title} className="border border-[#302f2b] bg-[#fffdf8] p-5" style={{ borderTop: `7px solid ${["#2ec4b6", "#f2c94c", "#ff6b6b"][index]}` }}>
                    <div className="font-heading text-xl font-semibold">{title}</div>
                    <div className="mt-1 text-sm text-[#625f58]">{body}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 font-heading text-2xl font-semibold text-[#1a1a1a] sm:text-3xl">Join the next iteration.</div>
            </div>
          </div>
        </SlideShell>
      );
    default:
      return null;
  }
}

export default function ThinkWithAI() {
  const [slide, setSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goPrevious = useCallback(() => setSlide((current) => Math.max(0, current - 1)), []);
  const goNext = useCallback(() => setSlide((current) => Math.min(totalSlides - 1, current + 1)), []);

  const toggleFullscreen = useCallback(async () => {
    const element = document.getElementById("think-with-ai-presentation");
    if (!element) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await element.requestFullscreen();
    }
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        goNext();
      }
      if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goPrevious();
      }
      if (event.key === "Home") setSlide(0);
      if (event.key === "End") setSlide(totalSlides - 1);
      if (event.key.toLowerCase() === "f") void toggleFullscreen();
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [goNext, goPrevious, toggleFullscreen]);

  return (
    <main className="min-h-screen bg-[#f0eee8] p-0 text-[#1a1a1a] md:p-6">
      <div
        id="think-with-ai-presentation"
        className="mx-auto flex h-[100dvh] max-w-[1600px] flex-col overflow-hidden bg-[#fffdf8] shadow-2xl md:h-[calc(100dvh-3rem)]"
        aria-label="Think with AI presentation"
      >
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-[#302f2b] bg-[#fffdf8] px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center gap-2 font-heading text-sm font-semibold hover:text-[#168f84]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#302f2b] bg-[#f2c94c] text-xs">✦</span>
            <span className="hidden sm:inline">AI for Kids</span>
          </Link>
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#746f66] sm:text-xs">Think with AI / 5 min</div>
          <button
            type="button"
            onClick={() => void toggleFullscreen()}
            className="inline-flex items-center gap-2 border border-[#302f2b] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors hover:bg-[#f2c94c] sm:px-3 sm:text-xs"
            aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
          >
            {isFullscreen ? <Minimize className="h-3.5 w-3.5" /> : <Expand className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Full screen"}</span>
          </button>
        </header>

        <section className="min-h-0 flex-1" aria-live="polite">
          <PresentationContent slide={slide} />
        </section>

        <footer className="flex h-14 shrink-0 items-center justify-between border-t border-[#302f2b] bg-[#fffdf8] px-4 sm:h-16 sm:px-6">
          <div className="hidden font-mono text-[10px] uppercase tracking-[0.1em] text-[#746f66] sm:block">← → to navigate · F for full screen</div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={goPrevious} disabled={slide === 0} className="inline-flex h-8 w-8 items-center justify-center border border-[#302f2b] transition-colors enabled:hover:bg-[#f2c94c] disabled:cursor-not-allowed disabled:opacity-35" aria-label="Previous slide">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="min-w-14 text-center font-mono text-xs text-[#625f58]">{String(slide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}</div>
            <button type="button" onClick={goNext} disabled={slide === totalSlides - 1} className="inline-flex h-8 w-8 items-center justify-center border border-[#302f2b] transition-colors enabled:hover:bg-[#2ec4b6] disabled:cursor-not-allowed disabled:opacity-35" aria-label="Next slide">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="h-1.5 w-20 bg-[#e5e1d8] sm:w-36">
            <div className="h-full bg-[#168f84] transition-[width] duration-200" style={{ width: `${((slide + 1) / totalSlides) * 100}%` }} />
          </div>
        </footer>
      </div>
    </main>
  );
}
