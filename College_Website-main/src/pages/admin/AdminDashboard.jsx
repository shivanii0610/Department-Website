import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Calendar, BookOpen, Trophy, Briefcase, CalendarDays, Bell,
  LogOut, ChevronRight, Plus, Pencil, Trash2, X, Save, GraduationCap,
  LayoutDashboard, Layers, Zap, TrendingUp, Search, Phone, Mail,
  CheckCircle2, AlertCircle, BarChart3, ShieldCheck, Check, XCircle,
  Loader2, Upload, FileText, Image as ImageIcon
} from 'lucide-react';
import { supabase, uploadFile } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';

// ─── Sidebar Config ────────────────────────────────────────────────────────────
const sections = [
  { key: 'overview',   label: 'Overview',          icon: LayoutDashboard },
  { key: 'admin_access', label: 'Admin Access',     icon: ShieldCheck, superadminOnly: true },
  { key: 'faculty',    label: 'Faculty',            icon: Users },
  { key: 'notices',    label: 'Notice Board',       icon: Bell },
  { key: 'events',     label: 'Events',             icon: CalendarDays },
  { key: 'toppers',    label: 'Toppers',            icon: Trophy },
  { key: 'placements', label: 'Placements',         icon: Briefcase },
  { key: 'timetable',  label: 'Timetable',          icon: Calendar },
  { key: 'syllabus',   label: 'Syllabus',           icon: BookOpen },
  { key: 'books',      label: 'Books',              icon: Layers },
  { key: 'skills',     label: 'Skill Programs',     icon: Zap },
];

// ─── Shared UI Components ───────────────────────────────────────────────────────
const MAROON = '#6b1a2a';
const MAROON_DARK = '#4e1220';
const GOLD = '#d4a823';

function Modal({ title, onClose, children }) {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.5)' }} onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h3 className="font-bold text-gray-900 text-base">{title}</h3>
            <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
              <X size={18} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto flex-1">{children}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function Field({ label, children }) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, type = 'text', placeholder = '' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition-all"
    />
  );
}

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition-all"
    >
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  );
}

function Textarea({ value, onChange, placeholder, rows = 3 }) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition-all resize-none"
    />
  );
}

function FileSelect({ value, onChange, type = "image", label = "Upload File" }) {
  const [uploading, setUploading] = useState(false);
  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setUploading(true);
    try {
      const url = await uploadFile(file, type + 's');
      onChange(url);
    } catch (error) {
      console.error(error);
      alert("Upload failed! Please make sure you have created the 'media' bucket in Supabase and set it to 'Public'.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      {value && type === "image" && (
        <div className="relative w-full h-32 rounded-xl border border-gray-100 overflow-hidden bg-gray-50 flex items-center justify-center">
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 text-[9px] text-white font-bold rounded-lg backdrop-blur-sm">PREVIEW</div>
        </div>
      )}
      <div className="flex items-center gap-3">
        <label className="flex-1 cursor-pointer group">
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl group-hover:border-red-300 group-hover:bg-red-50 transition-all text-xs font-bold text-gray-500 group-hover:text-[#6b1a2a]">
            {uploading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              type === "image" ? <ImageIcon size={16} /> : <FileText size={16} />
            )}
            {uploading ? "Uploading..." : (value ? "Change File" : label)}
          </div>
          <input type="file" className="hidden" accept={type === "image" ? "image/*" : ".pdf,.doc,.docx"} onChange={handleFileChange} />
        </label>
        {value && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-100 rounded-xl">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-bold text-green-700">Uploaded</span>
          </div>
        )}
      </div>
      {value && (
        <div className="px-3 py-1 bg-gray-100 rounded-lg max-w-full overflow-hidden border border-gray-200">
          <p className="text-[10px] text-gray-400 font-mono truncate">{value}</p>
        </div>
      )}
    </div>
  );
}

function SaveBtn({ onClick, label = 'Save' }) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 text-white font-semibold rounded-xl text-sm shadow-md transition-all"
      style={{ background: `linear-gradient(135deg, ${MAROON}, ${MAROON_DARK})`, boxShadow: `0 4px 12px rgba(107,26,42,0.3)` }}
      onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.08)'}
      onMouseLeave={e => e.currentTarget.style.filter = 'none'}
    >
      <Save size={16} /> {label}
    </button>
  );
}

function EmptyState({ msg }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
      <AlertCircle size={36} className="mb-3 opacity-30" />
      <p className="text-sm">{msg}</p>
    </div>
  );
}

function SectionHeader({ title, count, onAdd, addLabel = 'Add' }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
        {count !== undefined && <p className="text-xs text-gray-400 mt-0.5">{count} record{count !== 1 ? 's' : ''}</p>}
      </div>
      {onAdd && (
        <button
          onClick={onAdd}
          className="flex items-center gap-1.5 px-4 py-2 text-white text-sm font-semibold rounded-xl shadow-md transition-all"
          style={{ background: `linear-gradient(135deg, ${MAROON}, ${MAROON_DARK})` }}
          onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.08)'}
          onMouseLeave={e => e.currentTarget.style.filter = 'none'}
        >
          <Plus size={15} /> {addLabel}
        </button>
      )}
    </div>
  );
}

function ActionBtns({ onEdit, onDelete }) {
  return (
    <div className="flex gap-1 shrink-0">
      <button onClick={onEdit} className="p-2 hover:bg-blue-50 rounded-lg transition-colors group" title="Edit">
        <Pencil size={14} className="text-blue-500 group-hover:text-blue-700" />
      </button>
      <button onClick={onDelete} className="p-2 hover:bg-red-50 rounded-lg transition-colors group" title="Delete">
        <Trash2 size={14} className="text-red-400 group-hover:text-red-600" />
      </button>
    </div>
  );
}

// ─── Avatar placeholder ─────────────────────────────────────────────────────────
function Avatar({ name, size = 36 }) {
  const initials = name?.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
  return (
    <div
      className="rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0"
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${MAROON}, ${MAROON_DARK})` }}
    >
      {initials}
    </div>
  );
}

// ─── Search Helper ─────────────────────────────────────────────────────────────
function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="relative mb-4">
      <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition-all"
      />
    </div>
  );
}

// ─── OVERVIEW ──────────────────────────────────────────────────────────────────
function Overview({ data, setActiveSection }) {
  const stats = [
    { key: 'faculty',    label: 'Faculty',      icon: Users,        color: '#3b82f6', count: data.faculty?.length || 0 },
    { key: 'notices',    label: 'Notices',      icon: Bell,         color: '#f59e0b', count: data.notices?.length || 0 },
    { key: 'toppers',    label: 'Toppers',      icon: Trophy,       color: '#10b981', count: data.toppers?.length || 0 },
    { key: 'placements', label: 'Placements',   icon: Briefcase,    color: '#8b5cf6', count: data.placements?.length || 0 },
    { key: 'timetable',  label: 'Timetables',   icon: Calendar,     color: '#ef4444', count: data.timetables?.length || 0 },
    { key: 'syllabus',   label: 'Syllabus',     icon: BookOpen,     color: '#06b6d4', count: data.syllabus?.length || 0 },
    { key: 'events',     label: 'Events',       icon: CalendarDays, color: '#ec4899', count: Object.values(data.events || {}).flat().length },
    { key: 'skills',     label: 'Skill Programs', icon: Zap,        color: '#f97316', count: data.skillPrograms?.length || 0 },
  ];

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 text-xl">Dashboard Overview</h3>
        <p className="text-sm text-gray-500 mt-1">Quick summary of all managed content sections</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map(({ key, label, icon: Icon, color, count }) => (
          <motion.button
            key={key}
            whileHover={{ y: -3, shadow: '0 8px 25px rgba(0,0,0,0.1)' }}
            onClick={() => setActiveSection(key)}
            className="bg-white border border-gray-100 rounded-2xl p-5 text-left hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: color + '18' }}>
              <Icon size={20} style={{ color }} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{count}</p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            <div className="flex items-center gap-1 mt-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color }}>
              Manage <ChevronRight size={12} />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Quick actions */}
      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 size={18} color={MAROON} />
          <h4 className="font-bold text-gray-800">Quick Actions</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { label: 'Add Faculty', section: 'faculty' },
            { label: 'Post Notice', section: 'notices' },
            { label: 'Add Event', section: 'events' },
            { label: 'Add Topper', section: 'toppers' },
            { label: 'Add Placement', section: 'placements' },
            { label: 'Add Skill Program', section: 'skills' },
          ].map(({ label, section }) => (
            <button
              key={label}
              onClick={() => setActiveSection(section)}
              className="flex items-center gap-2 px-3 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-red-50 hover:border-red-200 hover:text-red-800 transition-all"
            >
              <Plus size={14} /> {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── FACULTY MANAGER ───────────────────────────────────────────────────────────
function FacultyManager({ data, updateData }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ name: '', designation: '', qualification: '', imageUrl: '', contact: '', experience: '', eligibility: '' });

  const f = v => setForm(p => ({ ...p, ...v }));
  const openAdd = () => { setEditing(null); setForm({ name: '', designation: '', qualification: '', imageUrl: '', contact: '', experience: '', eligibility: '' }); setShowModal(true); };
  const openEdit = item => { setEditing(item); setForm({ ...item }); setShowModal(true); };
  const handleSave = () => {
    let updated;
    if (editing) updated = data.faculty.map(x => x.id === editing.id ? { ...x, ...form } : x);
    else updated = [...data.faculty, { ...form, id: Math.max(0, ...data.faculty.map(x => x.id)) + 1 }];
    updateData('faculty', updated);
    setShowModal(false);
  };
  const handleDelete = id => updateData('faculty', data.faculty.filter(x => x.id !== id));

  const filtered = data.faculty.filter(x => x.name.toLowerCase().includes(search.toLowerCase()) || x.designation?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <SectionHeader title="Faculty Management" count={data.faculty.length} onAdd={openAdd} addLabel="Add Faculty" />
      <SearchBar value={search} onChange={setSearch} placeholder="Search faculty by name or designation…" />
      <div className="space-y-2">
        {filtered.length === 0 ? <EmptyState msg="No faculty found." /> : filtered.map(item => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all group">
            <Avatar name={item.name} />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm truncate">{item.name}</p>
              <p className="text-xs text-gray-500 truncate">{item.designation} • {item.experience} Exp.</p>
              {item.contact && (
                <div className="flex items-center gap-1 mt-0.5">
                  <Phone size={11} className="text-gray-400" />
                  <span className="text-xs text-gray-400">{item.contact}</span>
                </div>
              )}
            </div>
            <ActionBtns onEdit={() => openEdit(item)} onDelete={() => handleDelete(item.id)} />
          </motion.div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Faculty Member' : 'Add Faculty Member'} onClose={() => setShowModal(false)}>
          <Field label="Full Name"><Input value={form.name} onChange={v => f({ name: v })} placeholder="e.g. Prof. A.D. Gangarde" /></Field>
          <Field label="Designation"><Input value={form.designation} onChange={v => f({ designation: v })} placeholder="e.g. Assistant Professor" /></Field>
          <Field label="Qualification"><Input value={form.qualification} onChange={v => f({ qualification: v })} placeholder="e.g. M.Sc. Computer Science" /></Field>
          <div className="grid grid-cols-2 gap-3">
             <Field label="Experience"><Input value={form.experience} onChange={v => f({ experience: v })} placeholder="e.g. 15+ Years" /></Field>
             <Field label="Contact Number"><Input value={form.contact} onChange={v => f({ contact: v })} placeholder="10-digit mobile" /></Field>
          </div>
          <Field label="Professional Eligibility"><Input value={form.eligibility} onChange={v => f({ eligibility: v })} placeholder="e.g. Ph.D. Research Guide" /></Field>
          <Field label="Faculty Photo"><FileSelect value={form.imageUrl} onChange={v => f({ imageUrl: v })} /></Field>
          <SaveBtn onClick={handleSave} label={`${editing ? 'Update' : 'Add'} Faculty`} />
        </Modal>
      )}
    </div>
  );
}

// ─── NOTICE MANAGER ────────────────────────────────────────────────────────────
function NoticeManager({ data, updateData }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', date: '', content: '' });

  const f = v => setForm(p => ({ ...p, ...v }));
  const openAdd = () => { setEditing(null); setForm({ title: '', date: new Date().toISOString().split('T')[0], content: '' }); setShowModal(true); };
  const openEdit = item => { setEditing(item); setForm({ ...item }); setShowModal(true); };
  const handleSave = () => {
    let updated;
    if (editing) updated = data.notices.map(x => x.id === editing.id ? { ...x, ...form } : x);
    else updated = [...data.notices, { ...form, id: Math.max(0, ...data.notices.map(x => x.id)) + 1 }];
    updateData('notices', updated);
    setShowModal(false);
  };
  const handleDelete = id => updateData('notices', data.notices.filter(x => x.id !== id));

  return (
    <div>
      <SectionHeader title="Notice Board" count={data.notices.length} onAdd={openAdd} addLabel="Post Notice" />
      <div className="space-y-2">
        {data.notices.length === 0 ? <EmptyState msg="No notices posted." /> : [...data.notices].sort((a, b) => b.date > a.date ? 1 : -1).map(item => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#fef9c3' }}>
              <Bell size={14} style={{ color: '#ca8a04' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm leading-tight">{item.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.date}</p>
              {item.content && <p className="text-xs text-gray-400 mt-1 line-clamp-2">{item.content}</p>}
            </div>
            <ActionBtns onEdit={() => openEdit(item)} onDelete={() => handleDelete(item.id)} />
          </motion.div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Notice' : 'Post New Notice'} onClose={() => setShowModal(false)}>
          <Field label="Notice Title"><Input value={form.title} onChange={v => f({ title: v })} placeholder="Notice title…" /></Field>
          <Field label="Date"><Input type="date" value={form.date} onChange={v => f({ date: v })} /></Field>
          <Field label="Content"><Textarea value={form.content} onChange={v => f({ content: v })} placeholder="Notice details…" rows={4} /></Field>
          <SaveBtn onClick={handleSave} label={`${editing ? 'Update' : 'Post'} Notice`} />
        </Modal>
      )}
    </div>
  );
}

// ─── EVENTS MANAGER ────────────────────────────────────────────────────────────
function EventsManager({ data, updateData, updateNestedData }) {
  const categories = ['cultural', 'extraCurricular', 'conferences', 'awards', 'social', 'alumni'];
  const catLabels = { cultural: 'Cultural', extraCurricular: 'Extra Curricular', conferences: 'Conferences', awards: 'Awards', social: 'Social', alumni: 'Alumni' };
  const catColors = { cultural: '#ec4899', extraCurricular: '#8b5cf6', conferences: '#3b82f6', awards: '#f59e0b', social: '#10b981', alumni: '#6366f1' };
  const [activeCategory, setActiveCategory] = useState('cultural');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', date: '', description: '', imageUrl: '', recipient: '' });

  const events = data.events?.[activeCategory] || [];
  const f = v => setForm(p => ({ ...p, ...v }));
  const openAdd = () => { setEditing(null); setForm({ title: '', date: new Date().toISOString().split('T')[0], description: '', imageUrl: '', recipient: '' }); setShowModal(true); };
  const openEdit = item => { setEditing(item); setForm({ ...item }); setShowModal(true); };
  const handleSave = () => {
    let updated;
    if (editing) updated = events.map(x => x.id === editing.id ? { ...x, ...form } : x);
    else updated = [...events, { ...form, id: Math.max(0, ...events.map(x => x.id), 0) + 1 }];
    updateNestedData('events', activeCategory, updated);
    setShowModal(false);
  };
  const handleDelete = id => updateNestedData('events', activeCategory, events.filter(x => x.id !== id));

  return (
    <div>
      <SectionHeader title="Events Management" count={Object.values(data.events || {}).flat().length} onAdd={openAdd} addLabel="Add Event" />
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={activeCategory === cat
              ? { background: catColors[cat], color: '#fff' }
              : { background: '#f3f4f6', color: '#6b7280' }
            }
          >
            {catLabels[cat]} ({data.events?.[cat]?.length || 0})
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {events.length === 0 ? <EmptyState msg={`No ${catLabels[activeCategory]} events yet.`} /> : events.map(item => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: catColors[activeCategory] + '20' }}>
              <CalendarDays size={14} style={{ color: catColors[activeCategory] }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
              {item.description && <p className="text-xs text-gray-400 mt-1 line-clamp-1">{item.description}</p>}
            </div>
            <ActionBtns onEdit={() => openEdit(item)} onDelete={() => handleDelete(item.id)} />
          </motion.div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? `Edit Event` : `Add ${catLabels[activeCategory]} Event`} onClose={() => setShowModal(false)}>
          <Field label="Event Title"><Input value={form.title} onChange={v => f({ title: v })} placeholder="Event title…" /></Field>
          <Field label="Date"><Input type="date" value={form.date} onChange={v => f({ date: v })} /></Field>
          <Field label="Description"><Textarea value={form.description} onChange={v => f({ description: v })} placeholder="Brief description of the event…" /></Field>
          {activeCategory === 'awards' && <Field label="Recipient"><Input value={form.recipient} onChange={v => f({ recipient: v })} placeholder="Award recipient name…" /></Field>}
          <Field label="Event Photo"><FileSelect value={form.imageUrl} onChange={v => f({ imageUrl: v })} /></Field>
          <SaveBtn onClick={handleSave} label={`${editing ? 'Update' : 'Add'} Event`} />
        </Modal>
      )}
    </div>
  );
}

// ─── TOPPER MANAGER ────────────────────────────────────────────────────────────
function TopperManager({ data, updateData }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', year: '', cgpa: '', imageUrl: '', program: '', rank: '' });

  const f = v => setForm(p => ({ ...p, ...v }));
  const openAdd = () => { setEditing(null); setForm({ name: '', year: new Date().getFullYear().toString(), cgpa: '', imageUrl: '', program: '', rank: '1' }); setShowModal(true); };
  const openEdit = item => { setEditing(item); setForm({ ...item }); setShowModal(true); };
  const handleSave = () => {
    let updated;
    if (editing) updated = data.toppers.map(x => x.id === editing.id ? { ...x, ...form } : x);
    else updated = [...data.toppers, { ...form, id: Math.max(0, ...data.toppers.map(x => x.id), 0) + 1 }];
    updateData('toppers', updated);
    setShowModal(false);
  };
  const handleDelete = id => updateData('toppers', data.toppers.filter(x => x.id !== id));

  return (
    <div>
      <SectionHeader title="Merit List / Toppers" count={data.toppers.length} onAdd={openAdd} addLabel="Add Topper" />
      <div className="space-y-2">
        {data.toppers.length === 0 ? <EmptyState msg="No toppers added yet." /> : data.toppers.map(item => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ background: '#fef3c7', color: '#d97706' }}>
              #{item.rank || '?'}
            </div>
            <Avatar name={item.name} />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">{item.program} • {item.year} • CGPA: {item.cgpa}</p>
            </div>
            <ActionBtns onEdit={() => openEdit(item)} onDelete={() => handleDelete(item.id)} />
          </motion.div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Topper' : 'Add Topper'} onClose={() => setShowModal(false)}>
          <Field label="Student Name"><Input value={form.name} onChange={v => f({ name: v })} placeholder="Full name" /></Field>
          <Field label="Program"><Input value={form.program} onChange={v => f({ program: v })} placeholder="e.g. B.Sc. CS, M.Sc. CS" /></Field>
          <div className="grid grid-cols-3 gap-3">
            <Field label="Year"><Input value={form.year} onChange={v => f({ year: v })} placeholder="2025" /></Field>
            <Field label="CGPA"><Input value={form.cgpa} onChange={v => f({ cgpa: v })} placeholder="9.8" /></Field>
            <Field label="Rank"><Input value={form.rank} onChange={v => f({ rank: v })} placeholder="1" /></Field>
          </div>
          <Field label="Topper Photo"><FileSelect value={form.imageUrl} onChange={v => f({ imageUrl: v })} /></Field>
          <SaveBtn onClick={handleSave} label={`${editing ? 'Update' : 'Add'} Topper`} />
        </Modal>
      )}
    </div>
  );
}

// ─── PLACEMENT MANAGER ─────────────────────────────────────────────────────────
function PlacementManager({ data, updateData }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', company: '', package: '', imageUrl: '', year: '', role: '' });

  const f = v => setForm(p => ({ ...p, ...v }));
  const openAdd = () => { setEditing(null); setForm({ name: '', company: '', package: '', imageUrl: '', year: new Date().getFullYear().toString(), role: '' }); setShowModal(true); };
  const openEdit = item => { setEditing(item); setForm({ ...item }); setShowModal(true); };
  const handleSave = () => {
    let updated;
    if (editing) updated = data.placements.map(x => x.id === editing.id ? { ...x, ...form } : x);
    else updated = [...data.placements, { ...form, id: Math.max(0, ...data.placements.map(x => x.id), 0) + 1 }];
    updateData('placements', updated);
    setShowModal(false);
  };
  const handleDelete = id => updateData('placements', data.placements.filter(x => x.id !== id));

  return (
    <div>
      <SectionHeader title="Placement Records" count={data.placements.length} onAdd={openAdd} addLabel="Add Placement" />
      <div className="space-y-2">
        {data.placements.length === 0 ? <EmptyState msg="No placement records added yet." /> : data.placements.map(item => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
            <Avatar name={item.name} />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">{item.role && `${item.role} @ `}{item.company} • {item.package} • {item.year}</p>
            </div>
            <ActionBtns onEdit={() => openEdit(item)} onDelete={() => handleDelete(item.id)} />
          </motion.div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Placement' : 'Add Placement'} onClose={() => setShowModal(false)}>
          <Field label="Student Name"><Input value={form.name} onChange={v => f({ name: v })} placeholder="Full name" /></Field>
          <Field label="Job Role"><Input value={form.role} onChange={v => f({ role: v })} placeholder="e.g. Software Engineer" /></Field>
          <Field label="Company"><Input value={form.company} onChange={v => f({ company: v })} placeholder="Company name" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Package"><Input value={form.package} onChange={v => f({ package: v })} placeholder="e.g. 4.5 LPA" /></Field>
            <Field label="Year"><Input value={form.year} onChange={v => f({ year: v })} placeholder="2025" /></Field>
          </div>
          <Field label="Placement Photo"><FileSelect value={form.imageUrl} onChange={v => f({ imageUrl: v })} /></Field>
          <SaveBtn onClick={handleSave} label={`${editing ? 'Update' : 'Add'} Placement`} />
        </Modal>
      )}
    </div>
  );
}

// ─── TIMETABLE MANAGER ─────────────────────────────────────────────────────────
function TimetableManager({ data, updateData }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ year: '', pdfUrl: '', semester: '' });

  const f = v => setForm(p => ({ ...p, ...v }));
  const openAdd = () => { setEditing(null); setForm({ year: '', pdfUrl: '', semester: '' }); setShowModal(true); };
  const openEdit = item => { setEditing(item); setForm({ ...item }); setShowModal(true); };
  const handleSave = () => {
    let updated;
    if (editing) updated = data.timetables.map(x => x.id === editing.id ? { ...x, ...form } : x);
    else updated = [...data.timetables, { ...form, id: Math.max(0, ...data.timetables.map(x => x.id)) + 1 }];
    updateData('timetables', updated);
    setShowModal(false);
  };
  const handleDelete = id => updateData('timetables', data.timetables.filter(x => x.id !== id));

  const semGroups = {};
  data.timetables.forEach(t => {
    if (!semGroups[t.semester]) semGroups[t.semester] = [];
    semGroups[t.semester].push(t);
  });

  return (
    <div>
      <SectionHeader title="Timetable Manager" count={data.timetables.length} onAdd={openAdd} addLabel="Add Timetable" />
      {Object.entries(semGroups).map(([sem, items]) => (
        <div key={sem} className="mb-5">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">{sem}</p>
          <div className="space-y-2">
            {items.map(item => (
              <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#dbeafe' }}>
                  <Calendar size={14} style={{ color: '#2563eb' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">{item.year}</p>
                  <a href={item.pdfUrl} target="_blank" rel="noreferrer" className="text-xs text-blue-500 hover:underline truncate block">View PDF</a>
                </div>
                <ActionBtns onEdit={() => openEdit(item)} onDelete={() => handleDelete(item.id)} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
      {data.timetables.length === 0 && <EmptyState msg="No timetables added yet." />}
      {showModal && (
        <Modal title={editing ? 'Edit Timetable' : 'Add Timetable'} onClose={() => setShowModal(false)}>
          <Field label="Year / Class"><Input value={form.year} onChange={v => f({ year: v })} placeholder="e.g. FY B.Sc. CS" /></Field>
          <Field label="Semester"><Input value={form.semester} onChange={v => f({ semester: v })} placeholder="e.g. Semester I" /></Field>
          <Field label="Timetable File (PDF)"><FileSelect value={form.pdfUrl} onChange={v => f({ pdfUrl: v })} type="pdf" label="Upload PDF" /></Field>
          <SaveBtn onClick={handleSave} label={`${editing ? 'Update' : 'Add'} Timetable`} />
        </Modal>
      )}
    </div>
  );
}

// ─── SYLLABUS MANAGER ──────────────────────────────────────────────────────────
function SyllabusManager({ data, updateData }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ year: '', level: 'UG', semester: '', syllabusUrl: '', pyqUrl: '' });

  const f = v => setForm(p => ({ ...p, ...v }));
  const openAdd = () => { setEditing(null); setForm({ year: '', level: 'UG', semester: '', syllabusUrl: '', pyqUrl: '' }); setShowModal(true); };
  const openEdit = item => { setEditing(item); setForm({ ...item }); setShowModal(true); };
  const handleSave = () => {
    let updated;
    if (editing) updated = data.syllabus.map(x => x.id === editing.id ? { ...x, ...form } : x);
    else updated = [...data.syllabus, { ...form, id: Math.max(0, ...data.syllabus.map(x => x.id)) + 1 }];
    updateData('syllabus', updated);
    setShowModal(false);
  };
  const handleDelete = id => updateData('syllabus', data.syllabus.filter(x => x.id !== id));

  return (
    <div>
      <SectionHeader title="Syllabus Manager" count={data.syllabus.length} onAdd={openAdd} addLabel="Add Syllabus" />
      <div className="space-y-2">
        {data.syllabus.length === 0 ? <EmptyState msg="No syllabus entries added yet." /> : data.syllabus.map(item => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#d1fae5' }}>
              <BookOpen size={14} style={{ color: '#059669' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900 text-sm">{item.year}</p>
                <span className="px-1.5 py-0.5 text-xs font-semibold rounded" style={{ background: item.level === 'UG' ? '#dbeafe' : '#ede9fe', color: item.level === 'UG' ? '#1d4ed8' : '#7c3aed' }}>{item.level}</span>
              </div>
              <p className="text-xs text-gray-500">Semester: {item.semester}</p>
            </div>
            <ActionBtns onEdit={() => openEdit(item)} onDelete={() => handleDelete(item.id)} />
          </motion.div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Syllabus' : 'Add Syllabus'} onClose={() => setShowModal(false)}>
          <Field label="Year / Class"><Input value={form.year} onChange={v => f({ year: v })} placeholder="e.g. FY B.Sc. CS" /></Field>
          <Field label="Level"><Select value={form.level} onChange={v => f({ level: v })} options={[{ value: 'UG', label: 'Undergraduate (UG)' }, { value: 'PG', label: 'Postgraduate (PG)' }]} /></Field>
          <Field label="Semester"><Input value={form.semester} onChange={v => f({ semester: v })} placeholder="e.g. All, Sem I" /></Field>
          <Field label="Syllabus PDF"><FileSelect value={form.syllabusUrl} onChange={v => f({ syllabusUrl: v })} type="pdf" label="Upload Syllabus" /></Field>
          <Field label="PYQ PDF (Optional)"><FileSelect value={form.pyqUrl} onChange={v => f({ pyqUrl: v })} type="pdf" label="Upload PYQ" /></Field>
          <SaveBtn onClick={handleSave} label={`${editing ? 'Update' : 'Add'} Syllabus`} />
        </Modal>
      )}
    </div>
  );
}

// ─── BOOKS MANAGER ─────────────────────────────────────────────────────────────
function BooksManager({ data, updateData }) {
  const yearKeys = ['FY', 'SY', 'TY', 'MSC-I', 'MSC-II'];
  const [activeYear, setActiveYear] = useState('FY');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ subject: '', publication: '', pdfUrl: '' });

  const books = data.books?.[activeYear] || [];
  const f = v => setForm(p => ({ ...p, ...v }));
  const openAdd = () => { setEditing(null); setForm({ subject: '', publication: '', pdfUrl: '#' }); setShowModal(true); };
  const openEdit = item => { setEditing(item); setForm({ ...item }); setShowModal(true); };
  const handleSave = () => {
    const updated = data.books ? { ...data.books } : {};
    const arr = updated[activeYear] || [];
    if (editing) updated[activeYear] = arr.map(x => x.id === editing.id ? { ...x, ...form } : x);
    else updated[activeYear] = [...arr, { ...form, id: Math.max(0, ...arr.map(x => x.id), 0) + 1 }];
    updateData('books', updated);
    setShowModal(false);
  };
  const handleDelete = id => {
    const updated = { ...data.books };
    updated[activeYear] = (updated[activeYear] || []).filter(x => x.id !== id);
    updateData('books', updated);
  };

  return (
    <div>
      <SectionHeader title="E-Books & Resources" count={Object.values(data.books || {}).flat().length} onAdd={openAdd} addLabel="Add Book" />
      <div className="flex flex-wrap gap-2 mb-4">
        {yearKeys.map(yr => (
          <button
            key={yr}
            onClick={() => setActiveYear(yr)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={activeYear === yr ? { background: MAROON, color: '#fff' } : { background: '#f3f4f6', color: '#6b7280' }}
          >
            {yr} ({data.books?.[yr]?.length || 0})
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {books.length === 0 ? <EmptyState msg={`No books for ${activeYear} yet.`} /> : books.map(item => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#fce7f3' }}>
              <BookOpen size={14} style={{ color: '#db2777' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm">{item.subject}</p>
              <p className="text-xs text-gray-500">{item.publication}</p>
            </div>
            <ActionBtns onEdit={() => openEdit(item)} onDelete={() => handleDelete(item.id)} />
          </motion.div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Book' : `Add Book — ${activeYear}`} onClose={() => setShowModal(false)}>
          <Field label="Subject Name"><Input value={form.subject} onChange={v => f({ subject: v })} placeholder="e.g. Data Structures using C" /></Field>
          <Field label="Publication / Author"><Input value={form.publication} onChange={v => f({ publication: v })} placeholder="e.g. Pearson, Tanenbaum" /></Field>
          <Field label="Book PDF / Resource File"><FileSelect value={form.pdfUrl} onChange={v => f({ pdfUrl: v })} type="pdf" label="Upload PDF" /></Field>
          <SaveBtn onClick={handleSave} label={`${editing ? 'Update' : 'Add'} Book`} />
        </Modal>
      )}
    </div>
  );
}

// ─── SKILL PROGRAMS MANAGER ────────────────────────────────────────────────────
function SkillManager({ data, updateData }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', duration: '', description: '', instructor: '', status: 'active' });

  const programs = data.skillPrograms || [];
  const f = v => setForm(p => ({ ...p, ...v }));
  const openAdd = () => { setEditing(null); setForm({ title: '', duration: '', description: '', instructor: '', status: 'active' }); setShowModal(true); };
  const openEdit = item => { setEditing(item); setForm({ ...item }); setShowModal(true); };
  const handleSave = () => {
    let updated;
    if (editing) updated = programs.map(x => x.id === editing.id ? { ...x, ...form } : x);
    else updated = [...programs, { ...form, id: Math.max(0, ...programs.map(x => x.id), 0) + 1 }];
    updateData('skillPrograms', updated);
    setShowModal(false);
  };
  const handleDelete = id => updateData('skillPrograms', programs.filter(x => x.id !== id));

  return (
    <div>
      <SectionHeader title="Skill Development Programs" count={programs.length} onAdd={openAdd} addLabel="Add Program" />
      <div className="space-y-2">
        {programs.length === 0 ? <EmptyState msg="No skill programs added yet." /> : programs.map(item => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#fff7ed' }}>
              <Zap size={14} style={{ color: '#ea580c' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                <span className={`px-1.5 py-0.5 text-xs font-semibold rounded ${item.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {item.status === 'active' ? 'Active' : 'Completed'}
                </span>
              </div>
              <p className="text-xs text-gray-500">{item.instructor && `${item.instructor} • `}{item.duration}</p>
            </div>
            <ActionBtns onEdit={() => openEdit(item)} onDelete={() => handleDelete(item.id)} />
          </motion.div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Program' : 'Add Skill Program'} onClose={() => setShowModal(false)}>
          <Field label="Program Title"><Input value={form.title} onChange={v => f({ title: v })} placeholder="e.g. Python Programming Bootcamp" /></Field>
          <Field label="Instructor"><Input value={form.instructor} onChange={v => f({ instructor: v })} placeholder="Instructor name" /></Field>
          <Field label="Duration"><Input value={form.duration} onChange={v => f({ duration: v })} placeholder="e.g. 4 Weeks, 20 Hours" /></Field>
          <Field label="Status"><Select value={form.status} onChange={v => f({ status: v })} options={[{ value: 'active', label: 'Active / Upcoming' }, { value: 'completed', label: 'Completed' }]} /></Field>
          <Field label="Description"><Textarea value={form.description} onChange={v => f({ description: v })} placeholder="Brief program description…" /></Field>
          <SaveBtn onClick={handleSave} label={`${editing ? 'Update' : 'Add'} Program`} />
        </Modal>
      )}
    </div>
  );
}

// ─── ADMIN ACCESS MANAGER ──────────────────────────────────────────────────────
function AdminAccessManager({ data, updateData }) {
  const [activeTab, setActiveTab] = useState('requests');

  const requests = data.adminRequests || [];
  const admins = data.admins || [];

  const handleApprove = (req) => {
    const newAdmin = {
      id: Math.max(0, ...admins.map(a => a.id), 0) + 1,
      name: req.name,
      username: req.username,
      password: req.password, // Storing raw passwords in localStorage is a security risk but fine for this simple demo
      role: 'admin'
    };
    updateData('admins', [...admins, newAdmin]);
    updateData('adminRequests', requests.filter(r => r.id !== req.id));
  };

  const handleReject = (id) => updateData('adminRequests', requests.filter(r => r.id !== id));
  const handleRevoke = (id) => updateData('admins', admins.filter(a => a.id !== id));

  return (
    <div>
      <SectionHeader title="Admin Access Management" count={activeTab === 'requests' ? requests.length : admins.length} />
      
      <div className="flex border-b border-gray-100 mb-6">
        <button
          onClick={() => setActiveTab('requests')}
          className={`pb-3 px-4 text-sm font-semibold transition-colors ${activeTab === 'requests' ? `border-b-2 border-[${MAROON}] text-[${MAROON}]` : 'text-gray-500 hover:text-gray-700'}`}
          style={activeTab === 'requests' ? { borderColor: MAROON, color: MAROON } : {}}
        >
          Pending Requests ({requests.length})
        </button>
        <button
          onClick={() => setActiveTab('admins')}
          className={`pb-3 px-4 text-sm font-semibold transition-colors ${activeTab === 'admins' ? `border-b-2 border-[${MAROON}] text-[${MAROON}]` : 'text-gray-500 hover:text-gray-700'}`}
          style={activeTab === 'admins' ? { borderColor: MAROON, color: MAROON } : {}}
        >
          Active Admins ({admins.length})
        </button>
      </div>

      <div className="space-y-3">
        {activeTab === 'requests' && (
          requests.length === 0 ? <EmptyState msg="No pending access requests." /> : requests.map(req => (
            <motion.div key={req.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
              <Avatar name={req.name || req.username} />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{req.name || req.username}</p>
                <p className="text-xs text-gray-500">Username: {req.username} • Requested: {new Date(req.date).toLocaleDateString()}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => handleApprove(req)} className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg text-xs font-semibold transition-colors">
                  <Check size={14} /> Approve
                </button>
                <button onClick={() => handleReject(req.id)} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg text-xs font-semibold transition-colors">
                  <XCircle size={14} /> Reject
                </button>
              </div>
            </motion.div>
          ))
        )}

        {activeTab === 'admins' && (
          admins.length === 0 ? <EmptyState msg="No active admins found." /> : admins.map(admin => (
            <motion.div key={admin.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
              <Avatar name={admin.name || admin.username} />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{admin.name || admin.username} {admin.role === 'superadmin' && <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-[10px] uppercase rounded-full tracking-wider">Superadmin</span>}</p>
                <p className="text-xs text-gray-500">Username: {admin.username}</p>
              </div>
              {admin.role !== 'superadmin' && (
                <button onClick={() => handleRevoke(admin.id)} className="flex items-center gap-1.5 px-3 py-1.5 text-red-500 hover:bg-red-50 rounded-lg text-xs font-semibold transition-colors shrink-0">
                  <Trash2 size={14} /> Revoke Access
                </button>
              )}
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

// ─── MAIN DASHBOARD ────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const { isAuthenticated, logout, currentUser } = useAuth();
  const { data, updateData, updateNestedData } = useData();
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const renderManager = () => {
    switch (activeSection) {
      case 'overview':   return <Overview data={data} setActiveSection={setActiveSection} />;
      case 'faculty':    return <FacultyManager data={data} updateData={updateData} />;
      case 'notices':    return <NoticeManager data={data} updateData={updateData} />;
      case 'events':     return <EventsManager data={data} updateData={updateData} updateNestedData={updateNestedData} />;
      case 'toppers':    return <TopperManager data={data} updateData={updateData} />;
      case 'placements': return <PlacementManager data={data} updateData={updateData} />;
      case 'timetable':  return <TimetableManager data={data} updateData={updateData} />;
      case 'syllabus':   return <SyllabusManager data={data} updateData={updateData} />;
      case 'books':      return <BooksManager data={data} updateData={updateData} />;
      case 'skills':     return <SkillManager data={data} updateData={updateData} />;
      case 'admin_access': return <AdminAccessManager data={data} updateData={updateData} />;
      default:           return null;
    }
  };

  const navSections = sections.filter(s => !s.superadminOnly || currentUser?.role === 'superadmin');

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f8f9fa' }}>
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-6 h-16">
          <div className="flex items-center gap-3">
            {/* Hamburger for mobile */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <div className="w-5 h-0.5 bg-gray-700 mb-1 rounded" />
              <div className="w-5 h-0.5 bg-gray-700 mb-1 rounded" />
              <div className="w-5 h-0.5 bg-gray-700 rounded" />
            </button>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${MAROON}, ${MAROON_DARK})` }}>
              <GraduationCap size={18} className="text-yellow-300" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm leading-tight">Admin Panel</p>
              <p className="text-xs text-gray-400 leading-tight hidden sm:block">CS Department — NACSC</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: '#dcfce7', color: '#166534' }}>
              <CheckCircle2 size={12} /> {currentUser?.name || 'Admin'} {currentUser?.role === 'superadmin' ? '(Super)' : ''}
            </span>
            <button
              onClick={() => { logout(); navigate('/admin'); }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={15} /> <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <>
          {/* Mobile overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
          )}

          <aside
            className={`fixed lg:sticky top-16 h-[calc(100vh-4rem)] z-30 w-60 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <nav className="flex-1 p-3 overflow-y-auto">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 mb-2 mt-1">Navigation</p>
              {navSections.map(sec => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.key;
                return (
                  <button
                    key={sec.key}
                    onClick={() => { setActiveSection(sec.key); setSidebarOpen(false); }}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all mb-0.5 group"
                    style={isActive
                      ? { background: `linear-gradient(135deg, ${MAROON}, ${MAROON_DARK})`, color: '#fff', boxShadow: `0 2px 12px rgba(107,26,42,0.25)` }
                      : { color: '#6b7280' }
                    }
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#f9f9f9'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                  >
                    <Icon size={16} style={isActive ? { color: '#fde047' } : {}} />
                    <span className="flex-1 text-left">{sec.label}</span>
                    {isActive && <ChevronRight size={13} className="opacity-60" />}
                  </button>
                );
              })}
            </nav>
            <div className="p-3 border-t border-gray-100">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
              >
                <TrendingUp size={15} />
                View Public Site
              </a>
            </div>
          </aside>
        </>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 min-w-0">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm min-h-[calc(100vh-8rem)]"
          >
            {renderManager()}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
