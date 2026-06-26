import cube from "../assets/svg/cube-16-solid.svg";
import chart from "../assets/svg/chart-pie.svg";
import trend from "../assets/svg/arrow-trending-up.svg";
import cog from "../assets/svg/cog-8-tooth.svg";
import link from "../assets/svg/link-solid.svg";

const features = [
  {
    id: 1,
    title: "AI Workflow Automation",
    desc: "Create intelligent workflows that automate repetitive tasks using AI agents.",
    size: "large",
    icon: cube,
  },
  {
    id: 2,
    title: "Predictive Analytics",
    desc: "Generate forecasts from millions of records in seconds.",
    size: "small",
    icon: chart,
  },
  {
    id: 3,
    title: "Live API Integration",
    desc: "Connect CRM, ERP, Slack, Gmail and 100+ services instantly.",
    size: "small",
    icon: link,
  },
  {
    id: 4,
    title: "Enterprise Security",
    desc: "Advanced encryption, role-based access control and continuous monitoring.",
    size: "wide",
    icon: cog,
  },
  {
    id: 5,
    title: "Realtime Dashboard",
    desc: "Monitor AI workflows and business KPIs with beautiful live analytics.",
    size: "wide",
    icon: trend,
  },
];

export default features;