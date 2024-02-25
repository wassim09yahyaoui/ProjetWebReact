import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsComponent from './NewsComponent.tsx';
import NewsProperty from '../../enums/NewsEnum.ts';
import '../../Style/News/NewsConponentList.scss';
import newsData from "../../mokeData/newsMokeData.ts";

interface NewsItem {
  [NewsProperty.ID]: number;
  [NewsProperty.DATE]: string;
  [NewsProperty.TITLE]: string;
  [NewsProperty.CONTENT]: string;
}

const NewsComponentList: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Fetch data when the component is mounted
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const fetchData = async () => {
    try {
      // Replace the URL with your actual API endpoint or data source
      // const response = await axios.get('https://example.com/api/news');
      const data = newsData;
      setNewsList(data.news); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="news-list">
      {newsList.map((news) => (
        <NewsComponent key={news[NewsProperty.ID]} news={news} />
      ))}
    </div>
  );
};

export default NewsComponentList;
