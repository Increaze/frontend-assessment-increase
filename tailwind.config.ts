import { Config } from "tailwindcss";

const tailwindConfig: Config = {
  theme: {
    extend: {
      colors: {
        fara: {
          blue: "#2563EB",
          blue2: "#1D4ED8",
          green: "#16A34A",
        },
        "mid-night": {
          10: "#64748B",
          20: "#475569",
          40: "#334155",
          60: "#1E293B",
          80: "#0F172A",
          100: "#020617",
          200: "#111827",
        },
        pearl: {
          2: "#F8FAFC",
          3: "#E2E8F0",
          4: "#F1F5F9",
          5: "#FFFFFF",
          6: "#EEF2F7",
        },
        neutral: {
          500: "#64748B",
        },
        black: "#0F172A",
        "hero-bg": "#F8FAFC",
        forest: {
          100: "#15803D",
        },
        cherry: {
          100: "#DC2626",
        },
        sunfest: {
          100: "#D97706",
        },

        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
        },

        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F1F5F9",
          soft: "#EEF2F7",
        },

        text: {
          strong: "#0F172A",
          DEFAULT: "#1E293B",
          muted: "#64748B",
        },

        border: {
          DEFAULT: "#DBE3EE",
          strong: "#CBD5E1",
        },
      },
      fontSize: {
        header: ["3.4375rem", "1.2"],
        body: ["17px", "1.64"],
      },
      boxShadow: {
        button:
          "0px 2px 8px rgba(37, 99, 235, 0.18)",
        card:
          "0px 6px 18px rgba(15, 23, 42, 0.06)",
        custom:
          "0px 12px 28px rgba(15, 23, 42, 0.10)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
};

export default tailwindConfig;