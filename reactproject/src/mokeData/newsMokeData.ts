// src/mokeData/newsData.ts

import NewsProperty from '../enums/NewsEnum.ts';

interface NewsItem {
  [NewsProperty.ID]: number;
  [NewsProperty.DATE]: string;
  [NewsProperty.TITLE]: string;
  [NewsProperty.CONTENT]: string;
  image: string; // Add image property
}

interface NewsData {
  news: NewsItem[];
}

const newsData: NewsData = {
  news: [
    {
      [NewsProperty.ID]: 1,
      [NewsProperty.DATE]: '2024-02-17',
      [NewsProperty.TITLE]: 'Exciting Discovery in Science',
      [NewsProperty.CONTENT]: 'Scientists have made a groundbreaking discovery that could revolutionize the way we understand the universe.',
      image: 'https://placekitten.com/300/200', // Placeholder image of a kitten
    },
    {
      [NewsProperty.ID]: 2,
      [NewsProperty.DATE]: '2024-02-16',
      [NewsProperty.TITLE]: 'Technology Advancement Announcement',
      [NewsProperty.CONTENT]: 'A leading tech company announces the development of a futuristic device set to change the way we interact with technology.',
      image: 'https://placekitten.com/300/201', // Another placeholder image of a kitten
    },
    {
      [NewsProperty.ID]: 3,
      [NewsProperty.DATE]: '2024-02-15',
      [NewsProperty.TITLE]: 'Cultural Event Unveiled',
      [NewsProperty.CONTENT]: 'An upcoming cultural event promises to showcase the rich diversity of art, music, and traditions from around the world.',
      image: 'https://placekitten.com/300/202', // Another placeholder image of a kitten
    },
    {
      [NewsProperty.ID]: 4,
      [NewsProperty.DATE]: '2024-02-14',
      [NewsProperty.TITLE]: 'Space Exploration Milestone',
      [NewsProperty.CONTENT]: 'Astronauts successfully complete a historic mission, marking a significant milestone in the exploration of outer space.',
      image: 'https://placekitten.com/300/203', // Another placeholder image of a kitten
    },
    {
      [NewsProperty.ID]: 5,
      [NewsProperty.DATE]: '2024-02-13',
      [NewsProperty.TITLE]: 'Environmental Conservation Initiative',
      [NewsProperty.CONTENT]: 'Global leaders come together to announce a collaborative effort aimed at addressing pressing environmental challenges.',
      image: 'https://placekitten.com/300/204', // Another placeholder image of a kitten
    },
    {
      [NewsProperty.ID]: 6,
      [NewsProperty.DATE]: '2024-02-12',
      [NewsProperty.TITLE]: 'Healthcare Breakthrough',
      [NewsProperty.CONTENT]: 'Medical researchers unveil a groundbreaking medical treatment that shows promising results in the fight against a prevalent disease.',
      image: 'https://placekitten.com/300/205', // Another placeholder image of a kitten
    },
    {
      [NewsProperty.ID]: 7,
      [NewsProperty.DATE]: '2024-02-11',
      [NewsProperty.TITLE]: 'Educational Reform Proposal',
      [NewsProperty.CONTENT]: 'Policy makers propose a comprehensive plan for educational reform, focusing on preparing students for the challenges of the future.',
      image: 'https://placekitten.com/300/206', // Another placeholder image of a kitten
    },
    {
      [NewsProperty.ID]: 8,
      [NewsProperty.DATE]: '2024-02-10',
      [NewsProperty.TITLE]: 'Sports Championship Results',
      [NewsProperty.CONTENT]: 'The thrilling conclusion of a major sports championship leaves fans on the edge of their seats as the underdog emerges victorious.',
      image: 'https://placekitten.com/300/207', // Another placeholder image of a kitten
    },
    {
      [NewsProperty.ID]: 9,
      [NewsProperty.DATE]: '2024-02-09',
      [NewsProperty.TITLE]: 'Artistic Expression Festival',
      [NewsProperty.CONTENT]: 'Artists from various disciplines come together to celebrate creativity and artistic expression in a vibrant festival.',
      image: 'https://placekitten.com/300/208', // Another placeholder image of a kitten
    },
    {
      [NewsProperty.ID]: 10,
      [NewsProperty.DATE]: '2024-02-08',
      [NewsProperty.TITLE]: 'Business Innovation Award',
      [NewsProperty.CONTENT]: 'Innovative companies are recognized for their contributions to business and industry, receiving prestigious awards for their groundbreaking solutions.',
      image: 'https://placekitten.com/300/209', // Another placeholder image of a kitten
    },
    // Add more news items as needed
  ],
};

export default newsData;
