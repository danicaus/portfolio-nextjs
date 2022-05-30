import React, { useState, useEffect } from 'react';

export default function AboutScreen() {
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/danicaus/danicaus/main/README.md')
      .then((res) => res.text())
      .then((resText) => {
        const $aboutElement = document.createElement('div');
        $aboutElement.innerHTML = resText;
        return $aboutElement.querySelector('#portuguese_profile').textContent;
      })
      .then((content) => setAboutContent(content));
  }, []);

  return (
    <div>
      {aboutContent}
    </div>
  );
}
