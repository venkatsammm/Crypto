import React from 'react';
import { motion } from 'framer-motion';
import { FaCoins, FaListAlt, FaBell } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const MainComponent = () => {
    const latestNews = [
        {
            headline: 'Bitcoin Breaks New Record High',
            description: 'Bitcoin has reached a new all-time high, surpassing $60,000.',
            image: 'https://i.insider.com/605322ccfe6a340019acf455?format=jpeg',
        },
        {
            headline: 'Ethereum Upgrades EIP-1559',
            description: 'The Ethereum network has successfully upgraded its fee structure with EIP-1559.',
            image: 'https://th.bing.com/th/id/OIP.-22BoK-eq92r680-dZY4HgHaEc?rs=1&pid=ImgDetMain',
        },
        {
            headline: 'Ripple Expands Partnerships in Asia',
            description: 'Ripple continues its growth in Asia with new partnerships in the region.',
            image: 'https://th.bing.com/th/id/OIP.QdYVosOtmCnzY-9orYrZcAHaHa?w=600&h=600&rs=1&pid=ImgDetMain',
        },
    ];

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1536px', padding: '48px', color: '#1F2937' }}>
                {/* Header Section */}
                <header style={{ position: 'relative', marginBottom: '48px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3B82F6' }}>CryptoTracker</h1>
                    <motion.p
                        style={{ fontSize: '1.25rem', marginTop: '16px' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Your ultimate destination for tracking the crypto market.
                    </motion.p>
                </header>

                {/* Hero Section */}
                <section style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '48px', alignItems: 'center', flexWrap: 'wrap' }}>
    {/* Image Content */}
    <div style={{ width: '100%', padding: '24px', '@media (min-width: 768px)': { width: '50%' } }}>
        <motion.img
            src="https://www.geekextreme.com/wp-content/uploads/2020/05/person-trading-crypto.jpg"
            alt="Crypto Tracker Dashboard"
            style={{ borderRadius: '20px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)', width: '100%', transition: 'transform 0.3s', cursor: 'pointer' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        />
    </div>
</section>
                {/* Latest News Section */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: '600', textAlign: 'center', marginBottom: '24px', color: '#3B82F6' }}>Latest News</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', padding: '16px', justifyContent: 'center' }}>
                        {latestNews.map((newsItem, index) => (
                            <motion.div
                                key={index}
                                style={{ padding: '16px', borderRadius: '20px', backgroundColor: '#F3F4F6', width: '100%', maxWidth: '300px' }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={newsItem.image}
                                    alt={newsItem.headline}
                                    style={{ width: '100%', height: '128px', objectFit: 'cover', borderRadius: '20px', marginBottom: '16px' }}
                                />
                                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px' }}>{newsItem.headline}</h3>
                                <p style={{ color: '#4B5563' }}>{newsItem.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Video Play Area */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: '600', textAlign: 'center', marginBottom: '24px', color: '#3B82F6' }}>What is Mean by Crypto</h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=rYQgy8QDEBI"
                            style={{ borderRadius: '20px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                            width="100%"
                            height="400px"
                            controls
                        />
                    </div>
                </section>

                {/* Features Section */}
                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '48px' }}>
    <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '24px', color: '#3B82F6', textAlign: 'center' }}>
        Key Features
    </h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', width: '100%' }}>
        <motion.div
            style={{ backgroundColor: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '300px', width: '100%' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <FaCoins style={{ height: '48px', width: '48px', color: '#3B82F6', margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#3B82F6', marginBottom: '8px' }}>Real-Time Market Data</h3>
            <p style={{ color: '#4B5563' }}>
                Stay up to date with live price data and market trends.
            </p>
        </motion.div>

        <motion.div
            style={{ backgroundColor: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '300px', width: '100%' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <FaListAlt style={{ height: '48px', width: '48px', color: '#3B82F6', margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#3B82F6', marginBottom: '8px' }}>Customizable Watchlists</h3>
            <p style={{ color: '#4B5563' }}>
                Track your favorite cryptocurrencies and assets in one place.
            </p>
        </motion.div>

        <motion.div
            style={{ backgroundColor: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '300px', width: '100%' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <FaBell style={{ height: '48px', width: '48px', color: '#3B82F6', margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#3B82F6', marginBottom: '8px' }}>Instant Alerts</h3>
            <p style={{ color: '#4B5563' }}>
                Receive notifications on price movements and market changes.
            </p>
        </motion.div>
    </div>
</section>


                {/* CTA Section */}
               {/* Testimonials Section */}
               <section style={{ marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '24px', color: '#3B82F6', textAlign: 'center' }}>What users say</h2>
    <div style={{ display: 'flex', gap: '32px', maxWidth: '1200px', width: '100%' }}>
        <div style={{ width: '100%', maxWidth: '550px', backgroundColor: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', marginBottom: '16px', color: '#4B5563' }}>
                "CryptoTracker is my go-to app for staying updated on the latest crypto market trends."
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#3B82F6', marginBottom: '8px' }}>- Alex P.</p>
        </div>
        <div style={{ width: '100%', maxWidth: '550px', backgroundColor: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', marginBottom: '16px', color: '#4B5563' }}>
                "A must-have for any crypto enthusiast. I love the customizable watchlists!"
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#3B82F6', marginBottom: '8px' }}>- Maria S.</p>
        </div>
    </div>
</section>


{/* FAQ Section */}
<section style={{ marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '24px', color: '#3B82F6', textAlign: 'center' }}>Frequently Asked Questions</h2>
    <div style={{ display: 'flex', gap: '32px', maxWidth: '1200px', width: '100%' }}>
        <div style={{ width: '100%', maxWidth: '600px', backgroundColor: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3B82F6', marginBottom: '16px' }}>How does CryptoTracker work?</h3>
            <p style={{ fontSize: '1.125rem', marginBottom: '8px', color: '#4B5563' }}>
                CryptoTracker uses real-time data to provide you with the latest market trends and news.
            </p>
        </div>
        <div style={{ width: '100%', maxWidth: '1200px', backgroundColor: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3B82F6', marginBottom: '16px' }}>Can I customize my watchlists?</h3>
            <p style={{ fontSize: '1.125rem', marginBottom: '8px', color: '#4B5563' }}>
                Yes, you can create and customize your own watchlists for specific cryptocurrencies.
            </p>
        </div>
    </div>
</section>

<footer style={{textAlign:'center'}}>
                    <p className="text-gray-600">&copy; 2024 CryptoTracker. All rights reserved.</p>
                </footer>


            </div>
        </div>
    );
};

export default MainComponent;
