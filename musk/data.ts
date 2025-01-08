import {
  ApplicationIcons,
  FeedbackIcons,
  MaterialsIcons,
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
    title: "Главная",
    child: [
      {
        id: 11,
        link: "/anticorrosive",
        text: "Виртуальная академия",
      },
      {
        id: 12,
        link: "/glossary",
        text: "Словарь",
      },
      {
        id: 13,
        link: "/about-us",
        text: "О нас",
      },
      {
        id: 14,
        link: "/faq",
        text: "FAQ",
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
        text: "Новости",
      },
      {
        id: 22,
        link: "/",
        text: "Литература",
      },
      {
        id: 23,
        link: "/country-information?type=anti_terrorism",
        text: "Страновая информация",
      },
      {
        id: 24,
        link: "/international-organizations?type=anti_terrorism",
        text: "Международные организации",
      },
      {
        id: 25,
        link: "/",
        text: "Полезные ссылки",
      },
      {
        id: 26,
        link: "/analytics?type=anti_terrorism",
        text: "Аналитические данные",
      },
      {
        id: 27,
        link: "/video-materials?type=anti_terrorism",
        text: "Видеоматериалы",
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
        text: "Новости",
      },
      {
        id: 32,
        link: "/",
        text: "Литература",
      },
      {
        id: 33,
        link: "/country-information?type=anti_corruption",
        text: "Страновая информация",
      },
      {
        id: 34,
        link: "/international-organizations?type=anti_corruption",
        text: "Международные организации",
      },
      {
        id: 35,
        link: "/",
        text: "Полезные ссылки",
      },
      {
        id: 36,
        link: "/analytics?type=anti_corruption",
        text: "Аналитические данные",
      },
      {
        id: 37,
        link: "/video-materials?type=anti_corruption",
        text: "Видеоматериалы",
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
    text: "Источники",
    link: "/sources",
    image: "/r1.png",
  },
  {
    id: 2,
    text: "Страновая информация",
    link: "/country-information",
    image: "/r2.png",
  },
  {
    id: 3,
    text: "Международные организации",
    link: "/international-organizations",
    image: "/r3.png",
  },
  {
    id: 4,
    text: "Информационные базы данных",
    link: "/information-databases",
    image: "/r4.png",
  },
  {
    id: 5,
    text: "Аналитика",
    link: "/analytics",
    image: "/r5.png",
  },
  {
    id: 6,
    text: "Видеоматериалы",
    link: "/video-materials",
    image: "/r6.jfif",
  },
];

export const ProfileLayoutArr = [
  {
    id: 1,
    text: "Personal-information",
    link: "/profile/information",
    icons: () => ProfileIcons(),
  },
  {
    id: 2,
    text: "My-materials",
    link: "/profile/materials",
    icons: () => MaterialsIcons(),
  },
  {
    id: 3,
    text: "Recommendations",
    link: "/profile/recommendations",
    icons: () => RecommendationsIcons(),
  },
  {
    id: 4,
    text: "Feedback",
    link: "/profile/feedback",
    icons: () => FeedbackIcons(),
  },
  {
    id: 5,
    text: "Cooperation",
    link: "/profile/cooperation",
    icons: () => ApplicationIcons(),
  },
  {
    id: 6,
    text: "Notification",
    link: "/profile/notifications",
    icons: () => ApplicationIcons(),
  },
];
