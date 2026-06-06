'use client';

import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import JoinSection from '@/components/JoinSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import {
  Zap,
  Target,
  Trophy,
  Users,
  Crown,
  Calendar,
  Star,
  ChevronRight,
  Quote,
  ArrowRight,
  Activity,
  Shield,
  Award,
  ChevronLeft,
} from 'lucide-react';

/* ─── Hero ─────────────────────────────────────────────────── */
function HeroSection() {
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center overflow-hidden pt-16"
    >
      {/* Background overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 mx-auto lg:mx-0 w-fit">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-xs sm:text-sm font-medium">Now Enrolling — 2026 Season</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight sm:leading-none mb-4 sm:mb-6">
              Where Passion
              <br />
              Meets
              <br />
              <span className="text-red-500">Performance</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
              Elite coaching, performance analytics, and 360° training programs across Cricket, Football, Basketball &amp; Taekwondo.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scroll('join')}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full flex items-center gap-2 transition-all duration-200 shadow-lg shadow-red-900/40 text-sm sm:text-base"
              >
                <Zap className="w-4 h-4" />
                Join Now
              </button>
              <button
                onClick={() => scroll('programs')}
                className="border border-white/30 hover:border-red-500 text-white hover:text-red-400 font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full flex items-center gap-2 transition-all duration-200 text-sm sm:text-base"
              >
                View Programs <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right — Animated counter cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
            <AnimatedCounter
              end={20000}
              suffix="+"
              duration={2.5}
              label="Active Athletes"
              icon={<Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />}
            />
            <AnimatedCounter
              end={500}
              suffix="+"
              duration={2.5}
              label="Championships Won"
              icon={<Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />}
            />
            <AnimatedCounter
              end={50}
              suffix="+"
              duration={2.5}
              label="Professional Coaches"
              icon={<Crown className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />}
            />
            <AnimatedCounter
              end={2009}
              suffix=""
              duration={2.5}
              label="Since 2009"
              icon={<Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────── */
function AboutSection() {
  const values = [
    { icon: Target, title: 'Precision Training', desc: 'Science-backed methods tailored to each athlete.' },
    { icon: Shield, title: 'Safety First', desc: 'Expert oversight and injury-prevention protocols.' },
    { icon: Award, title: 'Championship Culture', desc: 'A winning mindset ingrained from day one.' },
    { icon: Activity, title: 'Live Analytics', desc: 'Real-time performance data to accelerate growth.' },
  ];

  return (
    <section id="about" className="bg-gray-950 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4 sm:mb-6">
              Built by Champions, <br />
              <span className="text-red-500">For Champions</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Founded in 2009, Shadow Striker United has grown from a single training pitch to a full multi-sport performance academy. We combine elite-level expertise with cutting-edge technology to unlock every athlete's potential.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Our coaches are former professionals who understand what it takes to win at the highest level. Every program is designed to challenge, inspire, and elevate.
            </p>
            <button
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 transition-colors w-fit mx-auto lg:mx-0 text-sm sm:text-base"
            >
              Explore Programs <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-red-600/40 transition-colors"
              >
                <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-2 w-fit mb-3 sm:mb-4">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">{title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Carousel Component with Auto-slide ───────────────────────────────────────────────── */
function Carousel({ items, renderItem, itemsPerView = 3, title, autoSlide = true, slideInterval = 5000 }: { 
  items: any[], 
  renderItem: (item: any, index: number) => React.ReactNode, 
  itemsPerView?: number, 
  title?: string,
  autoSlide?: boolean,
  slideInterval?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(autoSlide);
  
  // Responsive items per view
  const getItemsPerView = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return itemsPerView;
  }, [itemsPerView]);

  const [currentItemsPerView, setCurrentItemsPerView] = useState(getItemsPerView());
  const totalItems = items.length;
  const maxIndex = Math.max(0, totalItems - currentItemsPerView);

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Reset index when items or items per view changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [items.length, currentItemsPerView]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentItemsPerView(getItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getItemsPerView]);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide || !isAutoSliding) return;
    
    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        next();
      } else {
        setCurrentIndex(0);
      }
    }, slideInterval);
    
    return () => clearInterval(interval);
  }, [autoSlide, isAutoSliding, currentIndex, maxIndex, next, slideInterval]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsAutoSliding(false);
  const handleMouseLeave = () => setIsAutoSliding(autoSlide);

  const visibleItems = items.slice(currentIndex, currentIndex + currentItemsPerView);
  const showNavigation = totalItems > currentItemsPerView;

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title && <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">{title}</h3>}
      <div className="flex items-center gap-2 sm:gap-4">
        {showNavigation && (
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="p-1.5 sm:p-2 rounded-full bg-gray-800 hover:bg-red-600/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 z-10 shrink-0"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        )}
        
        <div className={`grid gap-4 sm:gap-6 flex-1 transition-all duration-300 ${
          currentItemsPerView === 1 ? 'grid-cols-1' :
          currentItemsPerView === 2 ? 'grid-cols-1 sm:grid-cols-2' :
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {visibleItems.map((item, idx) => renderItem(item, idx))}
        </div>

        {showNavigation && (
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="p-1.5 sm:p-2 rounded-full bg-gray-800 hover:bg-red-600/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 z-10 shrink-0"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        )}
      </div>
      
      {/* Dots indicator for mobile */}
      {showNavigation && totalItems > currentItemsPerView && (
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {Array.from({ length: Math.ceil(totalItems / currentItemsPerView) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * currentItemsPerView)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / currentItemsPerView) === idx
                  ? 'bg-red-500 w-4 sm:w-6'
                  : 'bg-gray-600 w-1.5 sm:w-2 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Programs Section with Carousel ───────────────────────────────────────────────── */
function ProgramsSection() {
  const programs = [
    {
      sport: 'Cricket',
      img: 'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600',
      levels: ['Beginner', 'Intermediate', 'Elite'],
      desc: 'Comprehensive batting, bowling, and fielding development with biomechanical analysis.',
    },
    {
      sport: 'Football',
      img: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600',
      levels: ['Youth', 'Amateur', 'Pro'],
      desc: 'Technical skills, tactical understanding, and match-speed conditioning.',
    },
    {
      sport: 'Basketball',
      img: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600',
      levels: ['Beginner', 'Advanced', 'Competitive'],
      desc: 'Dribbling, shooting mechanics, court vision, and team play systems.',
    },
    {
      sport: 'Taekwondo',
      img: 'https://images.pexels.com/photos/7045585/pexels-photo-7045585.jpeg?auto=compress&cs=tinysrgb&w=600',
      levels: ['White Belt', 'Color Belt', 'Black Belt'],
      desc: 'Discipline, flexibility, self-defence, and competition sparring.',
    },
  ];

  const renderProgram = (program: any) => (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={program.img}
          alt={program.sport}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4">
          <h3 className="text-white font-bold text-lg sm:text-xl">{program.sport}</h3>
        </div>
      </div>
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">{program.desc}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {program.levels.map((l: string) => (
            <span
              key={l}
              className="bg-red-600/10 border border-red-600/20 text-red-400 text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="programs" className="bg-black py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">Programs</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-3 sm:mb-4">
            Train in Your <span className="text-red-500">Sport</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto px-4">
            From grassroots to elite competition, we have a program for every level and age group.
          </p>
        </div>

        <Carousel 
          items={programs} 
          renderItem={renderProgram} 
          itemsPerView={3}
          autoSlide={true}
          slideInterval={4000}
        />
      </div>
    </section>
  );
}

/* ─── Coaches Section with Carousel ───────────────────────────────────────────────── */
function CoachesSection() {
  const coaches = [
    {
      name: 'Mr. SHAIJU BALA',
      sport: 'MANAGER',
      exp: '20 yrs',
      img: 'https://i.ibb.co/39M1mJyZ/Whats-App-Image-2026-06-04-at-4-15-39-PM.jpg',
      bio: '20 plus years of experience in the field of physical education (games and sports/ fitness)',
    },
    {
      name: 'Mr. TRIMOHAN KUMAR',
      sport: 'C-LICENSE FOOTBALL COACH',
      exp: '17 yrs',
      img: 'https://i.ibb.co/HfWrMm2q/Whats-App-Image-2026-06-04-at-4-15-41-PM.jpg',
      bio: 'AFC C-LICENSE FOOTBALL COACH WITH MORE THAN 17 YEARS OF EXPERIENCE IN PLAYER DEVELOPMENT, TACTICAL TRAINING, AND COMPETITIVE FOOTBALL.',
    },
    {
      name: 'Mr. YOGESH BHATI',
      sport: 'TAEKWONDO COACH',
      exp: '12 yrs',
      img: 'https://i.ibb.co/DggRtLpZ/Whats-App-Image-2026-06-04-at-4-15-40-PM-1.jpg',
      bio: 'PLAYED MORE THAN 5 Nationals and 2 more international, he is associated with Noida taekwondo association',
    },
    {
      name: 'Mr. ADITYA KUMAR SINGH',
      sport: 'BASKETBALL',
      exp: '15 yrs',
      img: 'https://i.ibb.co/xqTxjLKr/Whats-App-Image-2026-06-04-at-4-15-40-PM.jpg',
      bio: 'Former national-level basketball player with 15+ years of coaching experience, dedicated to building skilled, disciplined, and high-performance athletes.',
    },
  ];

  const renderCoach = (coach: any) => (
    <div className="bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group h-full flex flex-col">
      <div className="relative pt-4 px-4 sm:pt-6 sm:px-6 bg-gradient-to-b from-gray-800/50 to-gray-900">
        <div className="aspect-square w-full max-w-[280px] mx-auto rounded-full overflow-hidden border-4 border-red-600/30 group-hover:border-red-500 transition-all duration-300">
          <img
            src={coach.img}
            alt={coach.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="p-4 sm:p-5 text-center flex-1 flex flex-col">
        <h3 className="text-white font-bold text-base sm:text-lg mb-1">{coach.name}</h3>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-2 sm:mb-3">
          <span className="bg-red-600/20 text-red-400 text-xs px-2 py-0.5 sm:px-2.5 rounded-full border border-red-600/20">
            {coach.sport}
          </span>
          <span className="text-gray-500 text-xs">{coach.exp} experience</span>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1">{coach.bio}</p>
      </div>
    </div>
  );

  return (
    <section id="coaches" className="bg-gray-950 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">Coaches</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-3 sm:mb-4">
            Learn From the <span className="text-red-500">Best</span>
          </h2>
        </div>

        <Carousel 
          items={coaches} 
          renderItem={renderCoach} 
          itemsPerView={3}
          autoSlide={true}
          slideInterval={5000}
        />
      </div>
    </section>
  );
}

/* ─── Achievements ───────────────────────────────────────────── */
function AchievementsSection() {
  const achievements = [
    { year: '2023', title: 'National Youth Championship', sport: 'Cricket', medal: 'Gold' },
    { year: '2023', title: 'Regional Football League', sport: 'Football', medal: 'Silver' },
    { year: '2022', title: 'State Basketball Tournament', sport: 'Basketball', medal: 'Gold' },
    { year: '2022', title: 'National Taekwondo Open', sport: 'Taekwondo', medal: 'Gold' },
    { year: '2021', title: 'Under-19 Cricket Series', sport: 'Cricket', medal: 'Gold' },
    { year: '2021', title: 'Youth Football Cup', sport: 'Football', medal: 'Bronze' },
  ];

  const medalColor: Record<string, string> = {
    Gold: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
    Silver: 'text-gray-300 bg-gray-300/10 border-gray-300/30',
    Bronze: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  };

  return (
    <section id="achievements" className="bg-black py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">Achievements</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-3 sm:mb-4">
            Our Trophy <span className="text-red-500">Cabinet</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto px-4">
            Decades of hard work reflected in our athletes' success on every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {achievements.map(({ year, title, sport, medal }) => (
            <div
              key={`${year}-${title}`}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:border-red-600/40 transition-colors"
            >
              <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-2 sm:p-3 shrink-0">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-2 mb-1">
                  <span className="text-gray-500 text-xs">{year}</span>
                  <span className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full border font-medium ${medalColor[medal]}`}>
                    {medal}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 truncate">{title}</h3>
                <span className="text-red-400 text-xs">{sport}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Blog Section with Carousel ───────────────────────────────────────────────── */
function BlogSection() {
  const posts = [
    {
      category: 'Cricket',
      date: 'May 28, 2024',
      title: '5 Batting Techniques That Separate Good from Great',
      excerpt: 'The difference between a competent batsman and an elite striker often comes down to these key mechanics.',
      img: 'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600',
      read: '5 min read',
    },
    {
      category: 'Football',
      date: 'May 20, 2024',
      title: 'The Science of Speed: Explosive Acceleration Training',
      excerpt: 'How modern sports science has revolutionised the way we train footballers for maximum velocity.',
      img: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600',
      read: '7 min read',
    },
    {
      category: 'Taekwondo',
      date: 'May 14, 2024',
      title: 'Mental Toughness: The Hidden Weapon in Martial Arts',
      excerpt: 'Discipline and psychological resilience are what truly distinguish champions in competitive taekwondo.',
      img: 'https://images.pexels.com/photos/7045585/pexels-photo-7045585.jpeg?auto=compress&cs=tinysrgb&w=600',
      read: '6 min read',
    },
    {
      category: 'Basketball',
      date: 'May 10, 2024',
      title: 'Elite Footwork: The Foundation of Great Defense',
      excerpt: 'How defensive slides, closeouts, and positioning can make you an unstoppable force on the court.',
      img: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600',
      read: '8 min read',
    },
  ];

  const renderPost = (post: any) => (
    <article className="bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group cursor-pointer h-full flex flex-col">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <span className="bg-red-600 text-white text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="text-gray-500 text-xs">{post.date}</span>
          <span className="text-gray-600 text-xs">{post.read}</span>
        </div>
        <h3 className="text-white font-bold text-sm sm:text-base leading-snug mb-2 group-hover:text-red-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1">{post.excerpt}</p>
      </div>
    </article>
  );

  return (
    <section id="blog" className="bg-gray-950 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-14">
          <div className="text-center sm:text-left">
            <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">Blog</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
              Latest <span className="text-red-500">Insights</span>
            </h2>
          </div>
          <a href="#" className="text-red-400 hover:text-red-300 text-xs sm:text-sm font-medium flex items-center gap-1 transition-colors justify-center sm:justify-start">
            View all posts <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>

        <Carousel 
          items={posts} 
          renderItem={renderPost} 
          itemsPerView={3}
          autoSlide={true}
          slideInterval={4500}
        />
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Arjun Mehta',
      sport: 'Cricket',
      rating: 5,
      text: 'Shadow Striker United completely transformed my batting. Within six months I earned a spot on the regional squad. The coaching here is world-class.',
    },
    {
      name: 'Priya Nair',
      sport: 'Football',
      rating: 5,
      text: 'The analytical approach is unlike anything I experienced before. Video breakdowns after each session gave me insights I never had access to.',
    },
    {
      name: 'James Wu',
      sport: 'Taekwondo',
      rating: 5,
      text: 'Master Ji-Won is an incredible coach. The discipline and technique I learned here helped me win gold at the national open.',
    },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            What Our <span className="text-red-500">Athletes</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map(({ name, sport, rating, text }) => (
            <div
              key={name}
              className="bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:border-red-600/40 transition-colors h-full"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-red-600/40 mb-3 sm:mb-4" />
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">{name}</div>
                  <div className="text-red-400 text-xs">{sport}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <CoachesSection />
      <AchievementsSection />
      <TestimonialsSection />
      <BlogSection />
      <JoinSection />
      <ContactSection />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}