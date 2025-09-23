import { Link } from 'react-router-dom';

const DashboardCard = ({ title, description, icon, path, gradient = "from-blue-500 to-purple-600" }) => {
  return (
    <Link to={path} className="block group">
      <div className={`p-8 rounded-2xl shadow-xl bg-gradient-to-br ${gradient} transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer`}>
        <div className="text-white">
          <div className="text-4xl mb-4 text-center">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center tracking-wide">
            {title}
          </h3>
          <p className="text-sm opacity-90 text-center leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;