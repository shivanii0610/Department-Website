// ─────────────────────────────────────────────────────────────────────────────
// Direct Vite asset imports from the "Administration images" folder.
// Relative path from src/data/ → OJT Website/Administration images/
// ─────────────────────────────────────────────────────────────────────────────

// ── College Leadership ────────────────────────────────────────────────────────
import imgSagade    from '../../../Administration images/Dr. B. B. Sagade.jpeg';
import imgAthare    from '../../../Administration images/Dr. A. E. Athare.jpeg';
import imgKalamkar  from '../../../Administration images/Dr. S. B. Kalamkar.jpeg';

// ── Department Faculty ────────────────────────────────────────────────────────
import imgGangarde  from '../../../Administration images/Prof. Arun D. Gangarde.jpeg';
import imgBhingare  from '../../../Administration images/Prof. M.B. Bhingare.jpeg';
import imgGobare    from '../../../Administration images/Prof. M.B. Gobare.jpeg';
import imgTakate    from '../../../Administration images/Dr. A.A. Takate.jpeg';
import imgKarkhile  from '../../../Administration images/Prof. M.A. Karkhile.jpeg';  // updated: .jpeg (was .png)
import imgDanave    from '../../../Administration images/Prof. B.M. Danave.jpeg';    // newly added
import imgThange    from '../../../Administration images/Prof. T.S. Thange.jpeg';
import imgKale      from '../../../Administration images/Prof. S.S. Kale.jpeg';
import imgChoudhary from '../../../Administration images/Prof. M.R. Choudhary.jpeg';
import imgKhalekar  from '../../../Administration images/Prof. S.B. Khalekar.jpeg';
import imgJasud     from '../../../Administration images/Prof. M.J. Jasud.jpeg';
import imgChoure    from '../../../Administration images/Prof. K.S. Choure.jpeg';

// ── Non-Teaching Staff ────────────────────────────────────────────────────
import imgDeshmukh  from '../../../Administration images/Bharat Deshmukh.jpeg';
import imgAthareNT  from '../../../Administration images/Deepak Athare.jpeg';

/**
 * Map of faculty/leadership name → imported image URL.
 * Names must match EXACTLY what is used in initialData.js and Administration.jsx LEADERSHIP array.
 */
export const FACULTY_IMAGES = {
  // ── College Leadership ────────────────────────────────────────────────────
  'Dr. B. B. Sagade':       imgSagade,
  'Dr. A. E. Athare':       imgAthare,

  // ── Department Faculty ────────────────────────────────────────────────────
  'Prof. Arun D. Gangarde': imgGangarde,
  'Prof. M.B. Bhingare':    imgBhingare,
  'Prof. M.B. Gobare':      imgGobare,
  'Dr. A.A. Takate':        imgTakate,
  'Prof. M.A. Karkhile':    imgKarkhile,   // ← now uses .jpeg
  'Prof. B.M. Danave':      imgDanave,     // ← newly mapped
  'Prof. T.S. Thange':      imgThange,
  'Prof. S.S. Kale':        imgKale,
  'Prof. M.R. Choudhary':   imgChoudhary,
  'Prof. S.B. Khalekar':    imgKhalekar,
  'Prof. M.J. Jasud':       imgJasud,      // ← newly mapped
  'Dr. S. B. Kalamkar':     imgKalamkar,   // ← newly added
  'Prof. K.S. Choure':      imgChoure,

  // ── Non-Teaching Staff ────────────────────────────────────────────────────
  'Bharat Deshmukh':        imgDeshmukh,
  'Deepak Athare':          imgAthareNT,
};
