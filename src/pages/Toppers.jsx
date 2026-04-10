import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Toppers() {
  const { data } = useData();
  const years = [...new Set(data.toppers.map(t => t.year))].sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(years[0] || '');

  const filteredToppers = data.toppers.filter(t => t.year === selectedYear);

  // Merit list data (placeholder)
  const meritListData = [
    { rank: 1, name: 'Ananya Kulkarni', program: 'BCS', cgpa: '9.8' },
    { rank: 2, name: 'Rohan Patil', program: 'BCS', cgpa: '9.6' },
    { rank: 3, name: 'Priyanka Deshmukh', program: 'MCS', cgpa: '9.5' },
    { rank: 4, name: 'Sahil Jadhav', program: 'BCS', cgpa: '9.3' },
    { rank: 5, name: 'Megha Shinde', program: 'MCS', cgpa: '9.2' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-8">Merit List & Toppers</h1>
      </motion.div>

      {/* Year selector */}
      <div className="flex items-center gap-3 mb-8">
        <label className="text-sm font-medium text-gray-600">Select Year:</label>
        <select
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
        >
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      {/* Merit List Table */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
          <Medal size={20} className="text-primary" /> Merit List
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-section-bg">
                <th className="text-left px-4 py-3 font-semibold text-navy">Rank</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Program</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">CGPA</th>
              </tr>
            </thead>
            <tbody>
              {meritListData.map(row => (
                <tr key={row.rank} className="border-t border-gray-50 hover:bg-section-bg/50 transition-colors">
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                      row.rank <= 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {row.rank}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-navy">{row.name}</td>
                  <td className="px-4 py-3 text-gray-600">{row.program}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                      {row.cgpa}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Toppers Cards */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
          <Trophy size={20} className="text-primary" /> Toppers — {selectedYear}
        </h2>
        {filteredToppers.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredToppers.map(topper => (
              <div
                key={topper.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 text-center"
              >
                <PlaceholderImage src={topper.imageUrl} aspect="passport" height="250px" label="Topper Photo" />
                <div className="p-4">
                  <h3 className="font-bold text-navy">{topper.name}</h3>
                  <p className="text-sm text-gray-500">{topper.program}</p>
                  <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-semibold">
                    <Trophy size={14} /> CGPA: {topper.cgpa}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-10 bg-section-bg rounded-xl">
            No toppers data available for {selectedYear}.
          </p>
        )}
      </motion.div>
    </div>
  );
}
