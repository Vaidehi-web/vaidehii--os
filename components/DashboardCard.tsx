import type { ReactNode } from "react";
import Link from "next/link";

type DashboardCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  subtitle?: string;
  color?: string;
  href?: string;
};

export default function DashboardCard({
  title,
  value,
  icon,
  subtitle,
  color = "from-pink-500 to-rose-500",
  href,
}: DashboardCardProps) {
  const card = (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/50
        bg-white/80
        backdrop-blur-xl
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        cursor-pointer
      "
    >

      {/* Gradient Glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-300 bg-gradient-to-br ${color}`}
      />

      {/* Icon */}
      <div
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-md`}
      >
        {icon}
      </div>


      {/* Title */}
      <h3 className="relative mt-5 text-sm font-medium uppercase tracking-wide text-gray-500">
        {title}
      </h3>


      {/* Value */}
      <p className="relative mt-1 text-3xl font-bold text-gray-900">
        {value}
      </p>


      {/* Subtitle */}
      {subtitle && (
        <p className="relative mt-2 text-sm text-gray-500">
          {subtitle}
        </p>
      )}

    </div>
  );


  return href ? (
    <Link href={href}>
      {card}
    </Link>
  ) : (
    card
  );
}