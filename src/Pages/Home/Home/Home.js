import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Home = () => {
    const AllNews = useLoaderData();
    return (
        <div>
            <h2>Anaconda Total News: {AllNews.length}</h2>
            {
                AllNews.map(news => <NewsCard 
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Home;