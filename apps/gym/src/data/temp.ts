import { StoryItem } from "@/app/shared/utils/video/story-player";
import { GalleryItem, ImageItem } from "@/entities/types";

export const BASE_URL = process.env.NEXT_PUBLIC_MEDIA_BASE
  export const GalleryData: GalleryItem[] = [
    {
      id: "1",
      image:
        `${ BASE_URL }/images/issam.jpeg`,
      title: "Coach Issam",
      category: "Kickboxing",
      likes: "342",
      link: "https://www.instagram.com/coach_issam_agadir/",
      tagSentence: "Black belts🥋 in kickboxing ",
      icon: "Flame",
    },
    // {
    //   id: "2",
    //   image:
    //     `${ BASE_URL }/images/boxing.jpg`,
    //   title: "Pro Fight Prep",
    //   category: "MMA",
    //   likes: "512",
    //   link: "https://instagram.com",
    //   tagSentence: "Amzing Work",
    //   icon: "Flame",
    // },
    // {
    //   id: "3",
    //   image:
    //     `${ BASE_URL }/images/boxing.jpg`,
    //   title: "Heavy Bag Conditioning",
    //   category: "Boxing",
    //   likes: "289",
    //   link: "https://instagram.com",
    //   tagSentence: "Amzing Work",
    //   icon: "Flame",
    // },
    // {
    //   id: "4",
    //   image:
    //     `${ BASE_URL }/images/boxing.jpg`,
    //   title: "Youth Champions",
    //   category: "Junior",
    //   likes: "420",
    //   link: "https://instagram.com",
    //   tagSentence: "Amzing Work",
    //   icon: "Flame",
    // },
  ];

  export const galleryImages = [
    `${BASE_URL}/images/kkb-warmup.webp`,
    `${BASE_URL}/images/kkb-workout.webp`,
    `${BASE_URL}/images/mma-drill-1.webp`,
    `${BASE_URL}/images/mma-drill-2.webp`,
    `${BASE_URL}/images/mma-drill.webp`,
    `${BASE_URL}/images/mma-instructions-1.webp`,
    `${BASE_URL}/images/kkb-drill-2.webp`,
    `${BASE_URL}/images/kkb-drill-4.webp`,
    `${BASE_URL}/images/kkb-drill-3.webp`,
    `${BASE_URL}/images/kids-kkb-instructions-3.webp`,
    `${BASE_URL}/images/kids-kkb-drill-2.webp`,
    `${BASE_URL}/images/kids-kkb-group-1.webp`,
    `${BASE_URL}/images/kkb-drill.webp`,
    `${BASE_URL}/images/kkb-instuctions-1.webp`,
    `${BASE_URL}/images/kkb-warmup-2.webp`,
    `${BASE_URL}/images/kkb-warmup.webp`,
    `${BASE_URL}/images/kkb-drill-3.webp`,
    `${ BASE_URL }/images/kkb-instuctions-1.webp`,
  ];

  export const cardsData = [
    {
      image:
        `${ BASE_URL }/images/kbm-gym-logo.webp`,
      alt: "Kickboxing Training",
    },
    {
      image:
        `${ BASE_URL }/images/kkb-warmup-2.webp`,
      alt: "Sparring Session",
    },
  ];


  export const combatStories: StoryItem[] = [
    {
      id: "boxing-1",
      videoUrl:
         `${ BASE_URL }/videos/kb.mp4`,
      title: "KickBoxing Session",
      subtitle: "Coach Issam - 18:00 Session",
    },
    {
      id: "kickboxing-2",
      videoUrl:
        `${ BASE_URL }/videos/mma.mp4`,
      title: "MMA - JUJUTSU Session",
      subtitle: "Coach Amine - 19:30 Session",
    },
  ];


  export const gallery: ImageItem[][] = [
    [
      { id: '1', src: `${ BASE_URL }/images/kbm-gym-logo.webp`, alt: 'Gallery Image 1' },
      { id: '2', src: `${ BASE_URL }/images/kids-kkb-drill-2.webp`, alt: 'Gallery Image 2' },
      { id: '3', src: `${ BASE_URL }/images/kids-kkb-drill.webp`, alt: 'Gallery Image 3' },
    ],
    [
      { id: '4', src: `${ BASE_URL }/images/kids-kkb-group-1.webp`, alt: 'Gallery Image 4' },
      { id: '5', src: `${ BASE_URL }/images/kids-kkb-group.webp`, alt: 'Gallery Image 5' },
      { id: '6', src: `${ BASE_URL }/images/kids-kkb-instructions-1.webp`, alt: 'Gallery Image 6' },
    ],
    [
      { id: '7', src: `${ BASE_URL }/images/kids-kkb-instructions-2.webp`, alt: 'Gallery Image 7' },
      { id: '8', src: `${ BASE_URL }/images/kids-kkb-instructions-3.webp`, alt: 'Gallery Image 8' },
      { id: '9', src: `${ BASE_URL }/images/kids-kkb-drill-2.webp`, alt: 'Gallery Image 9' },
    ],
    [
      { id: '10', src: `${ BASE_URL }/images/kids-kkb-drill.webp`, alt: 'Gallery Image 10' },
      { id: '11', src: `${ BASE_URL }/images/kids-kkb-group.webp`, alt: 'Gallery Image 11' },
      { id: '12', src: `${ BASE_URL }/images/kids-kkb-instructions-3.webp`, alt: 'Gallery Image 12' },
    ],
  ];

  export const aboutImages = [
    `${ BASE_URL }/images/kids-kkb-group.webp`,
    `${ BASE_URL }/images/mma-group.webp`,
    `${ BASE_URL }/images/kkb-group.webp`,
  ];
