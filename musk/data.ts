import {
  ApplicationIcons,
  FeedbackIcons,
  MaterialsIcons,
  MyApplicationsIcons,
  NotificationIcons,
  ProfileIcons,
  RecommendationsIcons,
} from "@/components/icons";

export const LangArr = [
  {
    id: 1,
    label: "Ru",
    value: "ru",
  },
  {
    id: 2,
    label: "En",
    value: "en",
  },
  {
    id: 3,
    label: "Uz",
    value: "uz",
  },
];

export const HeaderSiteBarrArr = [
  {
    id: 1,
    title: "main",
    child: [
      {
        id: 11,
        link: "/anticorrosive",
        text: "anticorrosive",
      },
      {
        id: 12,
        link: "/glossary",
        text: "glossary",
      },
      {
        id: 13,
        link: "/about-us",
        text: "О нас",
      },
      {
        id: 14,
        link: "/faq",
        text: "faq",
      },
    ],
  },
  {
    id: 2,
    title: "ПОДФТ",
    child: [
      {
        id: 21,
        link: "/news?type=anti_terrorism",
        text: "news",
      },
      {
        id: 22,
        link: "/",
        text: "Литература",
      },
      {
        id: 23,
        link: "/country-information?type=anti_terrorism",
        text: "country-information",
      },
      {
        id: 24,
        link: "/international-organizations?type=anti_terrorism",
        text: "international-organizations",
      },
      {
        id: 25,
        link: "/",
        text: "Полезные ссылки",
      },
      {
        id: 26,
        link: "/analytics?type=anti_terrorism",
        text: "analytics",
      },
      {
        id: 27,
        link: "/video-materials?type=anti_terrorism",
        text: "video-materials",
      },
    ],
  },
  {
    id: 3,
    title: "Антикор",
    child: [
      {
        id: 31,
        link: "/news?type=anti_corruption",
        text: "news",
      },
      {
        id: 32,
        link: "/",
        text: "Литература",
      },
      {
        id: 33,
        link: "/country-information?type=anti_corruption",
        text: "country-information",
      },
      {
        id: 34,
        link: "/international-organizations?type=anti_corruption",
        text: "international-organizations",
      },
      {
        id: 35,
        link: "/",
        text: "Полезные ссылки",
      },
      {
        id: 36,
        link: "/analytics?type=anti_corruption",
        text: "analytics",
      },
      {
        id: 37,
        link: "/video-materials?type=anti_corruption",
        text: "video-materials",
      },
    ],
  },
];
export const SitebarArr = [
  {
    id: 1,
    text: "Главная",
    child: [
      {
        id: 11,
        text: "Антикоррупционная деятельность",
      },
      {
        id: 12,
        text: "Борьба с отмыванием денег и финансированием терроризма",
      },
      {
        id: 13,
        text: "Виртуальная Академия",
      },
      {
        id: 14,
        text: "Словарь",
      },
      {
        id: 15,
        text: "Архив",
      },
      {
        id: 16,
        text: "Часто задаваемые вопросы",
      },
    ],
  },
  {
    id: 2,
    text: "Антикор",
    child: [
      {
        id: 21,
        text: "Новости",
      },
      {
        id: 22,
        text: "Источник",
      },
      {
        id: 23,
        text: "Информация по странам",
      },
      {
        id: 24,
        text: "Международные организации",
      },
      {
        id: 25,
        text: "Информационная база",
      },
      {
        id: 26,
        text: "Аналитика",
      },
    ],
  },
  {
    id: 3,
    text: "ПОД/ФТ",
    child: [
      {
        id: 31,
        text: "Новости",
      },
      {
        id: 32,
        text: "Источник",
      },
      {
        id: 33,
        text: "Информация по странам",
      },
      {
        id: 34,
        text: "Международные организации",
      },
      {
        id: 35,
        text: "Анализ",
      },
    ],
  },
  {
    id: 4,
    text: "Посещения",
    child: [
      {
        id: 41,
        text: "Общее",
      },
      {
        id: 42,
        text: "Сегодня",
      },
      {
        id: 43,
        text: "Вчера",
      },
      {
        id: 44,
        text: "За неделю",
      },
      {
        id: 45,
        text: "За месяц:",
      },
    ],
  },
];

export const ResourcesArr = [
  {
    id: 1,
    text: "sources",
    link: "/sources",
    image: "/r1.png",
  },
  {
    id: 2,
    text: "country-information",
    link: "/country-information",
    image: "/r2.png",
  },
  {
    id: 3,
    text: "international-organizations",
    link: "/international-organizations",
    image: "/r3.png",
  },
  {
    id: 4,
    text: "information-databases",
    link: "/information-databases",
    image: "/r4.png",
  },
  {
    id: 5,
    text: "analytics",
    link: "/analytics",
    image: "/r5.png",
  },
  {
    id: 6,
    text: "video-materials",
    link: "/video-materials",
    image: "/r6.jfif",
  },
];

export const ProfileLayoutArr = [
  {
    id: 1,
    text: "personal-information",
    link: "/profile/information",
    icons: () => ProfileIcons(),
  },
  {
    id: 2,
    text: "my-materials",
    link: "/profile/materials",
    icons: () => MaterialsIcons(),
  },
  {
    id: 3,
    text: "recommendations",
    link: "/profile/recommendations",
    icons: () => RecommendationsIcons(),
  },
  {
    id: 4,
    text: "feedback",
    link: "/profile/feedback",
    icons: () => FeedbackIcons(),
  },
  {
    id: 5,
    text: "cooperation",
    link: "/profile/cooperation",
    icons: () => ApplicationIcons(),
  },
  {
    id: 6,
    text: "my-applications",
    link: "/profile/my-applications",
    icons: () => MyApplicationsIcons(),
  },
  {
    id: 7,
    text: "notification",
    link: "/profile/notifications",
    icons: () => NotificationIcons(),
  },
];
