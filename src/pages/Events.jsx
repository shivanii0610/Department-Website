import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Heart, Lightbulb, PartyPopper } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const eventCategories = [
  { key: 'extraCurricular', label: 'Extra Curricular', icon: Lightbulb },
  { key: 'conferences', label: 'Conferences & Workshops', icon: Calendar },
  { key: 'cultural', label: 'Cultural / Tech Srujana', icon: PartyPopper },
  { key: 'awards', label: 'Awards & Felicitation', icon: Award },
  { key: 'social', label: 'Social Activities', icon: Heart },
];

export default function Events() {
  const { data } = useData();
  const [activeCategory, setActiveCategory] = useState('conferences');
  const events = data.events[activeCategory] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Events</h1>
        <p className="text-gray-500 mb-8">Explore our diverse range of academic and cultural events.</p>
      </motion.div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {eventCategories.map(cat => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeCategory === cat.key
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-section-bg text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon size={14} /> {cat.label}
            </button>
          );
        })}
      </div>

      {/* Events grid */}
      <motion.div
        key={activeCategory}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {events.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map(event => (
              <div
                key={event.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <PlaceholderImage src={event.imageUrl} label="Event Photo" height="180px" className="!rounded-none" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-xs text-gray-500">{event.date}</span>
                  </div>
                  <h3 className="font-bold text-navy group-hover:text-primary transition-colors mb-2">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
                  )}
                  {event.recipient && (
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Recipient:</span> {event.recipient}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-section-bg rounded-xl">
            <p className="text-gray-500">No events in this category yet.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
