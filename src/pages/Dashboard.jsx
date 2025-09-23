import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  const cards = [
    {
      title: 'Translator',
      description: 'Live translation with RapidAPI integration. Type and see real-time translations.',
      icon: '🌐',
      path: '/translator',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Random String Generator',
      description: 'Generate random strings with React hooks demonstration using useState, useEffect, and useCallback.',
      icon: '🎲',
      path: '/random',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'React Router Demo',
      description: 'Learn about client-side routing and navigation in React applications.',
      icon: '🧭',
      path: '/router-demo',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-wide">
            My React Projects Dashboard
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Explore interactive React applications showcasing modern development practices,
            API integrations, and advanced routing techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <DashboardCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              path={card.path}
              gradient={card.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;