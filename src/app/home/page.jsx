"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleCheck,
  Lock,
  Person,
  ShieldCheck,
  Thunderbolt,
} from "@gravity-ui/icons";

const features = [
  {
    icon: Lock,
    title: "Secure Authentication",
    description:
      "Learn how authentication works with secure sessions, protected routes, and email/password login.",
  },
  {
    icon: Person,
    title: "User Accounts",
    description:
      "Create accounts, manage profiles, update user information, and work with authenticated user data.",
  },
  {
    icon: ShieldCheck,
    title: "Email Verification",
    description:
      "Build a complete email verification flow and understand how applications verify user identity.",
  },
  {
    icon: Thunderbolt,
    title: "Social Sign-In",
    description:
      "Explore OAuth authentication with providers such as Google and GitHub using Better Auth.",
  },
];

const learningTopics = [
  "Email & password authentication",
  "Google & GitHub social login",
  "Email verification",
  "Session management",
  "Protected routes",
  "Profile management",
];

const technologies = [
  ["Next.js", "Modern React framework"],
  ["JavaScript", "Core application language"],
  ["Better Auth", "Authentication & sessions"],
  ["MongoDB", "Database for user data"],
  ["HeroUI", "Accessible UI components"],
  ["DaisyUI", "Tailwind CSS components"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:py-28">
          {/* Hero Content */}
          <div>
            <div className="badge badge-primary badge-outline mb-6 gap-2 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-success" />
              Next.js + Better Auth Learning Project
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learn authentication by{" "}
              <span className="text-primary">building it.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-base-content/70">
              A modern authentication playground built with Next.js,
              JavaScript, MongoDB, and Better Auth. Explore sign-up, sign-in,
              email verification, social authentication, sessions, and
              protected pages.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/sign-up" className="btn btn-primary gap-2">
                Create Account
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link href="/sign-in" className="btn btn-outline">
                Sign In
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-base-content/60">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                Next.js
              </span>

              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                Better Auth
              </span>

              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                MongoDB
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl" />

            <div className="card relative overflow-hidden border border-base-300 bg-base-200 shadow-2xl">
              <figure>
                <Image
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80"
                  alt="Developer working on authentication software"
                  width={1200}
                  height={800}
                  className="h-[420px] w-full object-cover"
                  priority
                />
              </figure>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/70 p-5 text-white shadow-xl backdrop-blur-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-success/20">
                    <CircleCheck className="h-6 w-6 text-success" />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Authentication Active
                    </p>

                    <p className="text-sm text-white/60">
                      Your session is securely managed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-base-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              About the Project
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A practical way to understand authentication
            </h2>

            <p className="mt-5 leading-8 text-base-content/70">
              Instead of learning authentication through isolated examples,
              this project brings the most important authentication concepts
              together in one Next.js application.
            </p>

            <p className="mt-4 leading-8 text-base-content/70">
              Experiment with account creation, login, verification, social
              providers, sessions, and protected pages while learning how the
              frontend and backend work together.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "01",
                "Create an account",
                "Register using an email address and password.",
              ],
              [
                "02",
                "Verify your email",
                "Confirm your email before accessing protected features.",
              ],
              [
                "03",
                "Start a session",
                "Sign in and work with authenticated user information.",
              ],
              [
                "04",
                "Protect your app",
                "Restrict private routes to authenticated users.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="card border border-base-300 bg-base-100 shadow-sm"
              >
                <div className="card-body">
                  <span className="text-3xl font-bold text-primary">
                    {number}
                  </span>

                  <h3 className="mt-2 font-semibold">{title}</h3>

                  <p className="text-sm leading-6 text-base-content/60">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">
            What You Can Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Authentication concepts in one place
          </h2>

          <p className="mt-4 text-base-content/60">
            Explore the essential building blocks behind modern authenticated
            web applications.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="card border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="card-body">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-6 text-base-content/60">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="bg-base-200">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                Learning Roadmap
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Build your authentication knowledge step by step.
              </h2>

              <p className="mt-5 leading-8 text-base-content/70">
                Start with basic account authentication and gradually move
                toward sessions, verification, social providers, and protected
                application areas.
              </p>

              <Link
                href="/dashboard"
                className="btn btn-primary mt-8 gap-2"
              >
                Explore Dashboard
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="card border border-base-300 bg-base-100 shadow-sm">
              <div className="card-body">
                <ul className="space-y-5">
                  {learningTopics.map((topic, index) => (
                    <li
                      key={topic}
                      className="flex items-center gap-4 border-b border-base-300 pb-5 last:border-0 last:pb-0"
                    >
                      <span className="badge badge-primary badge-lg">
                        {index + 1}
                      </span>

                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Technologies
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Built with modern technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base-content/60">
            This project combines modern frontend tools with a complete
            authentication system to create a practical learning experience.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map(([title, description]) => (
            <div
              key={title}
              className="card border border-base-300 bg-base-100 shadow-sm"
            >
              <div className="card-body">
                <h3 className="card-title">{title}</h3>

                <p className="text-sm text-base-content/60">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-10">
        <div className="hero overflow-hidden rounded-3xl bg-primary text-primary-content">
          <div className="hero-content px-6 py-16 text-center sm:px-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to explore authentication?
              </h2>

              <p className="mt-4 opacity-80">
                Create an account and experiment with the authentication
                features you're learning with Next.js and Better Auth.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/sign-up"
                  className="btn bg-white text-black hover:bg-base-200"
                >
                  Get Started
                </Link>

                <Link
                  href="/sign-in"
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-primary"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-base-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-base-content/50 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} AuthLab. Built for learning.
          </p>

          <p>
            Next.js · JavaScript · Better Auth · MongoDB · HeroUI · DaisyUI
          </p>
        </div>
      </footer>
    </main>
  );
}