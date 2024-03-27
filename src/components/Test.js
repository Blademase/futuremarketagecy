import React, { useState, useEffect } from 'react';

function Test() {
  const [siteWidth, setSiteWidth] = useState(0);
  const [siteHeight, setSiteHeight] = useState(0);

  useEffect(() => {
    const updateSiteDimensions = () => {
      const width = Math.max(
        document.body.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.clientWidth,
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth
      );
      setSiteWidth(width);

      const height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      setSiteHeight(height);
    };

    window.addEventListener('resize', updateSiteDimensions); // Обновляем размеры при изменении размера окна
    updateSiteDimensions(); // Получаем размеры сайта при монтировании компонента

    return () => {
      window.removeEventListener('resize', updateSiteDimensions); // Удаляем слушателя событий при размонтировании компонента
    };
  }, []);

  return (
    <div>
      <p>Ширина сайта: {siteWidth}px</p>
      <p>Высота сайта: {siteHeight}px</p>
      {/* Другой JSX вашего приложения */}
    </div>
  );
}

export default Test;
