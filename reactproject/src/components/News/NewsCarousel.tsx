import React, { useState, useEffect } from 'react';
import NewsComponent from './NewsComponent.tsx';
import NewsProperty from '../../enums/NewsEnum.ts';
import LikeDislikeButtons from './LikeDislikeButtons.tsx'; // Importez le composant LikeDislikeButtons
import '../../Style/News/NewsCarousel.scss';
import newsData from "../../mokeData/newsMokeData.ts";

interface NewsItem {
  [NewsProperty.ID]: number;
  [NewsProperty.DATE]: string;
  [NewsProperty.TITLE]: string;
  [NewsProperty.CONTENT]: string;
}

const NewsCarousel = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHiddenTop, setShowHiddenTop] = useState(false);
  const [showHiddenBottom, setShowHiddenBottom] = useState(false);

  useEffect(() => {
    const data = newsData;
    setNewsList(data.news);
  }, []);

  const handleArrowClick = (direction: 'up' | 'down') => {
    const lastIndex = newsList.length - 1;

    if (direction === 'down' && currentIndex < lastIndex - 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setShowHiddenTop(false);
    } else if (direction === 'up' && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setShowHiddenBottom(false);
    }
  };

  const handleHiddenClick = (direction: 'top' | 'bottom') => {
    if (direction === 'top' && currentIndex > 0) {
      setShowHiddenTop(true);
    } else if (direction === 'bottom' && currentIndex < lastIndex - 3) {
      setShowHiddenBottom(true);
    }
  };

  const lastIndex = newsList.length - 1;

  return (
    <div className="news-carousel">
      <div className="carousel-container">
        <button className="arrow arrow-up" onClick={() => handleArrowClick('up')} onMouseDown={() => handleHiddenClick('top')}>
          &#9650;
        </button>
        {/* Hidden element 1 */}
        {showHiddenTop && currentIndex > 0 && (
          <NewsComponent news={newsList[currentIndex - 1]} hidden />
        )}
        {/* Displayed elements */}
        {newsList.slice(currentIndex, currentIndex + 3).map((news) => (
          <div key={news[NewsProperty.ID]}>
            <NewsComponent news={news} centered={currentIndex === news[NewsProperty.ID]} />
            <LikeDislikeButtons newsId={news[NewsProperty.ID]} /> {/* Ajoutez le composant LikeDislikeButtons ici */}
          </div>
        ))}
        {/* Hidden element 2 */}
        {showHiddenBottom && currentIndex < lastIndex - 3 && (
          <NewsComponent news={newsList[currentIndex + 4]} hidden />
        )}
        <button className="arrow arrow-down" onClick={() => handleArrowClick('down')} onMouseDown={() => handleHiddenClick('bottom')}>
          &#9660;
        </button>
      </div>
    </div>
  );
};

export default NewsCarousel;
