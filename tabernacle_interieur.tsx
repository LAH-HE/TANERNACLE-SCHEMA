import React, { useState } from 'react';
import { Info } from 'lucide-react';

const TabernacleInterieur = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  const elements = {
    chandelier: {
      title: "Le Chandelier d'Or (Menorah)",
      description: "Fait d'or pur battu (un seul bloc), avec 7 branches portant 7 lampes alimentées par de l'huile d'olive pure. Placé au SUD du Lieu Saint.",
      reference: "Exode 25:31-40",
      symbolism: "Christ, 'la Lumière du Monde' (Jean 8:12). Les 7 lampes représentent la plénitude de l'Esprit Saint (Apocalypse 4:5). Seule source de lumière dans le Lieu Saint.",
      poids: "Environ 34 kg d'or pur"
    },
    table: {
      title: "La Table des Pains de Proposition",
      description: "Table en bois d'acacia recouverte d'or, portant 12 pains disposés en deux rangées de 6. Renouvelés chaque Shabbat. Placée au NORD du Lieu Saint.",
      reference: "Exode 25:23-30",
      symbolism: "Christ, 'le Pain de Vie' (Jean 6:35). Les 12 pains représentent les 12 tribus d'Israël constamment devant Dieu.",
      dimensions: "2 coudées × 1 coudée × 1,5 coudée"
    },
    parfums: {
      title: "L'Autel des Parfums (Autel d'Or)",
      description: "Petit autel en bois d'acacia recouvert d'or pur, placé juste devant le voile du Saint des Saints. Encens brûlé matin et soir par le sacrificateur.",
      reference: "Exode 30:1-10",
      symbolism: "Les prières des saints montant vers Dieu (Apocalypse 5:8, 8:3-4). Christ notre Intercesseur qui présente nos prières au Père.",
      dimensions: "1 coudée × 1 coudée × 2 coudées de haut"
    },
    voile: {
      title: "Le Voile (Parokhet)",
      description: "Rideau épais tissé de fils bleu, pourpre, cramoisi et de fin lin retors, brodé de chérubins. Séparait le Lieu Saint du Saint des Saints. Déchiré de haut en bas à la mort de Christ.",
      reference: "Exode 26:31-33 / Matthieu 27:51",
      symbolism: "Le corps de Christ (Hébreux 10:19-20). Sa mort a ouvert l'accès direct à Dieu, déchirant le voile de séparation.",
      epaisseur: "Tradition : 4 doigts d'épaisseur (environ 7-8 cm)"
    },
    arche: {
      title: "L'Arche de l'Alliance",
      description: "Coffre en bois d'acacia recouvert d'or pur, contenant les Tables de la Loi, la manne, et le bâton d'Aaron. Le propitiatoire (couvercle d'or) surmonté de deux chérubins d'or.",
      reference: "Exode 25:10-22",
      symbolism: "Le trône de Dieu sur terre. Le propitiatoire préfigure Christ, notre expiation (Romains 3:25 - même mot grec : hilasterion).",
      contenu: "Tables de la Loi, manne, bâton d'Aaron",
      dimensions: "2,5 coudées × 1,5 coudée × 1,5 coudée"
    },
    propitiatoire: {
      title: "Le Propitiatoire (Kapporet)",
      description: "Couvercle d'or pur de l'Arche, avec deux chérubins d'or battu face à face, leurs ailes déployées au-dessus. Lieu où Dieu rencontrait Moïse et où le sang était aspergé lors de Yom Kippour.",
      reference: "Exode 25:17-22 / Lévitique 16:14-15",
      symbolism: "Le lieu de la Présence divine (Shekinah). Le sang aspergé 7 fois préfigurait le sacrifice parfait de Christ. 'Propitiatoire' = expiation qui satisfait la justice divine."
    },
    lieuSaint: {
      title: "Le Lieu Saint (HaKodesh)",
      description: "Première partie du Tabernacle (20 coudées × 10 coudées × 10 coudées), accessible uniquement aux sacrificateurs pour le service quotidien. Contenait 3 meubles d'or.",
      reference: "Exode 26:33",
      symbolism: "Représente le service et l'adoration des croyants-sacrificateurs (1 Pierre 2:9). Accès limité mais régulier."
    },
    saintDesSaints: {
      title: "Le Saint des Saints (Kodesh HaKodashim)",
      description: "Cube parfait de 10 coudées × 10 coudées × 10 coudées, entièrement recouvert d'or. Accessible UNIQUEMENT au Souverain Sacrificateur, UNE FOIS par an (Yom Kippour). Contenait uniquement l'Arche.",
      reference: "Exode 26:33-34 / Lévitique 16",
      symbolism: "La présence immédiate de Dieu. Le cube parfait évoque la Nouvelle Jérusalem (Apocalypse 21:16). Christ y est entré 'une fois pour toutes' (Hébreux 9:12).",
      acces: "1 fois/an, Yom Kippour uniquement"
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-yellow-50 to-amber-50 p-4 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-amber-900 mb-2">
          Le Tabernacle - Vue Intérieure
        </h1>
        <p className="text-center text-stone-600 mb-6 italic">
          "J'habiterai au milieu des enfants d'Israël, et je serai leur Dieu" (Exode 29:45)
        </p>

        {/* Schéma principal */}
        <div className="relative bg-gradient-to-r from-yellow-100 via-amber-100 to-yellow-100 rounded-lg shadow-2xl p-8 mb-6 border-4 border-amber-800">
          
          <svg viewBox="0 0 900 500" className="w-full h-auto">
            {/* Fond intérieur doré */}
            <rect x="0" y="0" width="900" height="500" fill="url(#goldGradient)"/>
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FFD700', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#DAA520', stopOpacity: 0.5}} />
              </linearGradient>
              <linearGradient id="voileGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#4169E1', stopOpacity: 0.9}} />
                <stop offset="33%" style={{stopColor: '#800080', stopOpacity: 0.9}} />
                <stop offset="66%" style={{stopColor: '#DC143C', stopOpacity: 0.9}} />
                <stop offset="100%" style={{stopColor: '#FFFFFF', stopOpacity: 0.9}} />
              </linearGradient>
              <radialGradient id="gloryGradient">
                <stop offset="0%" style={{stopColor: '#FFFFFF', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#FFD700', stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: '#DAA520', stopOpacity: 0.3}} />
              </radialGradient>
            </defs>

            {/* Murs du Tabernacle (planches d'acacia recouvertes d'or) */}
            <rect x="50" y="50" width="800" height="400" fill="none" stroke="#DAA520" strokeWidth="4"/>
            
            {/* Séparation Lieu Saint / Saint des Saints */}
            <line x1="550" y1="50" x2="550" y2="450" stroke="#B8860B" strokeWidth="2" strokeDasharray="5,5"/>

            {/* ============ LIEU SAINT (à gauche) ============ */}
            <text x="300" y="35" textAnchor="middle" fill="#8B4513" fontSize="20" fontWeight="bold">
              LIEU SAINT (HaKodesh)
            </text>

            {/* Chandelier d'Or (Sud / gauche) */}
            <g 
              onClick={() => setSelectedElement(elements.chandelier)}
              className="cursor-pointer hover:opacity-80 transition-all"
            >
              {/* Base */}
              <rect x="80" y="350" width="60" height="15" fill="#FFD700" stroke="#DAA520" strokeWidth="2"/>
              {/* Tige centrale */}
              <rect x="107" y="200" width="6" height="150" fill="#FFD700" stroke="#DAA520" strokeWidth="1"/>
              {/* Branches (3 de chaque côté) */}
              {[-60, -40, -20, 20, 40, 60].map((offset, i) => (
                <g key={i}>
                  <path 
                    d={`M 110 ${275 + offset} Q ${110 + offset/2} ${250 + offset/2} ${110 + offset} 200`}
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="4"
                  />
                  {/* Flammes */}
                  <ellipse cx={110 + offset} cy="190" rx="8" ry="12" fill="#FF4500" opacity="0.8"/>
                  <ellipse cx={110 + offset} cy="185" rx="5" ry="8" fill="#FFD700" opacity="0.9"/>
                </g>
              ))}
              {/* Flamme centrale */}
              <ellipse cx="110" cy="190" rx="8" ry="12" fill="#FF4500" opacity="0.8"/>
              <ellipse cx="110" cy="185" rx="5" ry="8" fill="#FFD700" opacity="0.9"/>
              
              <text x="110" y="390" textAnchor="middle" fill="#8B4513" fontSize="12" fontWeight="bold">
                CHANDELIER
              </text>
            </g>

            {/* Table des Pains (Nord / droite du Lieu Saint) */}
            <g 
              onClick={() => setSelectedElement(elements.table)}
              className="cursor-pointer hover:opacity-80 transition-all"
            >
              {/* Pieds */}
              <rect x="80" y="110" width="8" height="30" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
              <rect x="142" y="110" width="8" height="30" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
              {/* Plateau */}
              <rect x="70" y="90" width="90" height="20" fill="#FFD700" stroke="#DAA520" strokeWidth="2"/>
              {/* Pains (2 rangées de 6) */}
              {[0,1,2,3,4,5].map(i => (
                <rect key={`pain1-${i}`} x={75 + i*14} y="70" width="12" height="8" fill="#DEB887" stroke="#8B4513" strokeWidth="1"/>
              ))}
              {[0,1,2,3,4,5].map(i => (
                <rect key={`pain2-${i}`} x={75 + i*14} y="80" width="12" height="8" fill="#DEB887" stroke="#8B4513" strokeWidth="1"/>
              ))}
              
              <text x="115" y="165" textAnchor="middle" fill="#8B4513" fontSize="11" fontWeight="bold">
                TABLE PAINS
              </text>
            </g>

            {/* Autel des Parfums (devant le voile) */}
            <g 
              onClick={() => setSelectedElement(elements.parfums)}
              className="cursor-pointer hover:opacity-80 transition-all"
            >
              {/* Base */}
              <rect x="470" y="240" width="40" height="8" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
              {/* Corps de l'autel */}
              <rect x="475" y="180" width="30" height="60" fill="#FFD700" stroke="#DAA520" strokeWidth="2"/>
              {/* Cornes aux 4 coins */}
              <polygon points="475,180 470,175 470,185" fill="#DAA520"/>
              <polygon points="505,180 510,175 510,185" fill="#DAA520"/>
              {/* Fumée d'encens */}
              <ellipse cx="490" cy="165" rx="15" ry="8" fill="#E0E0E0" opacity="0.6"/>
              <ellipse cx="490" cy="155" rx="12" ry="6" fill="#C0C0C0" opacity="0.5"/>
              <ellipse cx="490" cy="145" rx="9" ry="5" fill="#A0A0A0" opacity="0.4"/>
              
              <text x="490" y="265" textAnchor="middle" fill="#8B4513" fontSize="11" fontWeight="bold">
                PARFUMS
              </text>
            </g>

            {/* LE VOILE (séparation sacrée) */}
            <rect 
              x="540" y="60" width="20" height="380" 
              fill="url(#voileGradient)"
              onClick={() => setSelectedElement(elements.voile)}
              className="cursor-pointer hover:opacity-90 transition-all"
              opacity="0.85"
            />
            {/* Chérubins brodés (suggérés) */}
            <text x="550" y="150" textAnchor="middle" fill="#FFD700" fontSize="24" opacity="0.6">👼</text>
            <text x="550" y="300" textAnchor="middle" fill="#FFD700" fontSize="24" opacity="0.6">👼</text>

            {/* ============ SAINT DES SAINTS (à droite) ============ */}
            <text x="725" y="35" textAnchor="middle" fill="#8B0000" fontSize="20" fontWeight="bold">
              SAINT DES SAINTS
            </text>
            <text x="725" y="55" textAnchor="middle" fill="#8B0000" fontSize="12" fontStyle="italic">
              (Kodesh HaKodashim)
            </text>

            {/* Rayonnement de la Gloire divine (Shekinah) */}
            <ellipse cx="725" cy="250" rx="120" ry="150" fill="url(#gloryGradient)" opacity="0.4"/>

            {/* L'Arche de l'Alliance */}
            <g 
              onClick={() => setSelectedElement(elements.arche)}
              className="cursor-pointer hover:opacity-90 transition-all"
            >
              {/* Base de l'Arche */}
              <rect x="660" y="280" width="130" height="60" fill="#FFD700" stroke="#DAA520" strokeWidth="3"/>
              {/* Anneaux pour les barres de transport */}
              <circle cx="670" cy="310" r="8" fill="none" stroke="#DAA520" strokeWidth="2"/>
              <circle cx="780" cy="310" r="8" fill="none" stroke="#DAA520" strokeWidth="2"/>
              
              {/* Le Propitiatoire (couvercle) */}
              <g onClick={(e) => { e.stopPropagation(); setSelectedElement(elements.propitiatoire); }}>
                <rect x="655" y="270" width="140" height="10" fill="#FFD700" stroke="#DAA520" strokeWidth="2"/>
                
                {/* Chérubins d'or */}
                {/* Chérubin gauche */}
                <ellipse cx="685" cy="255" rx="20" ry="15" fill="#FFD700" stroke="#DAA520" strokeWidth="2"/>
                <path d="M 665 255 Q 675 240 685 235 Q 695 240 705 255" fill="#FFD700" stroke="#DAA520" strokeWidth="2"/>
                <circle cx="680" cy="250" r="3" fill="#8B4513"/>
                <circle cx="690" cy="250" r="3" fill="#8B4513"/>
                
                {/* Chérubin droite */}
                <ellipse cx="765" cy="255" rx="20" ry="15" fill="#FFD700" stroke="#DAA520" strokeWidth="2"/>
                <path d="M 745 255 Q 755 240 765 235 Q 775 240 785 255" fill="#FFD700" stroke="#DAA520" strokeWidth="2"/>
                <circle cx="760" cy="250" r="3" fill="#8B4513"/>
                <circle cx="770" cy="250" r="3" fill="#8B4513"/>
                
                {/* Ailes déployées */}
                <path d="M 665 260 Q 680 245 695 250" fill="none" stroke="#DAA520" strokeWidth="3"/>
                <path d="M 785 260 Q 770 245 755 250" fill="none" stroke="#DAA520" strokeWidth="3"/>
              </g>
              
              <text x="725" y="365" textAnchor="middle" fill="#8B4513" fontSize="13" fontWeight="bold">
                ARCHE DE L'ALLIANCE
              </text>
            </g>

            {/* Légende directionnelle */}
            <text x="50" y="480" fill="#8B4513" fontSize="14" fontWeight="bold">
              ← OUEST (Fond du Tabernacle)
            </text>
            <text x="750" y="480" textAnchor="end" fill="#8B4513" fontSize="14" fontWeight="bold">
              EST (Vers l'entrée) →
            </text>

          </svg>

          {/* Légende des zones */}
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div 
              className="bg-yellow-100 p-3 rounded border-2 border-yellow-600 cursor-pointer hover:bg-yellow-200"
              onClick={() => setSelectedElement(elements.lieuSaint)}
            >
              <strong className="text-yellow-900">LIEU SAINT</strong>
              <p className="text-xs mt-1">Service quotidien des sacrificateurs</p>
            </div>
            <div 
              className="bg-red-100 p-3 rounded border-2 border-red-800 cursor-pointer hover:bg-red-200"
              onClick={() => setSelectedElement(elements.saintDesSaints)}
            >
              <strong className="text-red-900">SAINT DES SAINTS</strong>
              <p className="text-xs mt-1">Accès: Souverain Sacrificateur, 1x/an (Yom Kippour)</p>
            </div>
          </div>
        </div>

        {/* Panneau d'information détaillé */}
        {selectedElement && (
          <div className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-amber-600">
            <div className="flex items-start gap-3 mb-4">
              <Info className="text-amber-600 flex-shrink-0 mt-1" size={24} />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-amber-900 mb-3">
                  {selectedElement.title}
                </h2>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  {selectedElement.description}
                </p>
                
                {selectedElement.dimensions && (
                  <p className="text-sm text-blue-800 mb-2">
                    📐 <strong>Dimensions:</strong> {selectedElement.dimensions}
                  </p>
                )}
                {selectedElement.poids && (
                  <p className="text-sm text-blue-800 mb-2">
                    ⚖️ <strong>Poids:</strong> {selectedElement.poids}
                  </p>
                )}
                {selectedElement.contenu && (
                  <p className="text-sm text-blue-800 mb-2">
                    📦 <strong>Contenu:</strong> {selectedElement.contenu}
                  </p>
                )}
                {selectedElement.acces && (
                  <p className="text-sm text-red-800 mb-2">
                    🚪 <strong>Accès:</strong> {selectedElement.acces}
                  </p>
                )}
                {selectedElement.epaisseur && (
                  <p className="text-sm text-purple-800 mb-2">
                    📏 <strong>Épaisseur:</strong> {selectedElement.epaisseur}
                  </p>
                )}
                
                <p className="text-sm text-amber-800 font-semibold mb-3 mt-4">
                  📖 Référence Biblique : {selectedElement.reference}
                </p>
                
                <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-400">
                  <p className="text-sm font-semibold text-amber-900 mb-2">
                    ✨ Symbolisme Christologique et Typologique :
                  </p>
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    {selectedElement.symbolism}
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setSelectedElement(null)}
              className="mt-4 px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors font-semibold"
            >
              Fermer
            </button>
          </div>
        )}

        {/* Instructions */}
        {!selectedElement && (
          <div className="bg-amber-100 rounded-lg p-4 border border-amber-300">
            <p className="text-center text-amber-900">
              <strong>Cliquez sur les éléments du Tabernacle</strong> (meubles, voile, zones) pour découvrir leur signification biblique profonde.
            </p>
          </div>
        )}

        {/* Notes théologiques importantes */}
        <div className="mt-6 bg-stone-100 rounded-lg p-5 text-sm text-stone-700">
          <h3 className="font-bold text-amber-900 mb-3 text-base">Clés Typologiques du Tabernacle :</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Progression Spatiale = Progression Spirituelle</h4>
              <ol className="list-decimal list-inside space-y-1 text-xs">
                <li><strong>Parvis:</strong> Justification (autel = sacrifice, cuve = purification)</li>
                <li><strong>Lieu Saint:</strong> Sanctification (service, lumière, pain, prière)</li>
                <li><strong>Saint des Saints:</strong> Glorification (présence immédiate de Dieu)</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Le Voile Déchiré (Matthieu 27:51)</h4>
              <p className="text-xs leading-relaxed">
                À la mort de Christ, le voile s'est déchiré <strong>de haut en bas</strong> (acte divin, pas humain), 
                ouvrant l'accès direct au Saint des Saints pour tous les croyants (Hébreux 10:19-22). 
                Nous avons désormais "une libre entrée dans le sanctuaire par le sang de Jésus".
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Les Trois Métaux</h4>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li><strong>Airain (Bronze):</strong> Jugement du péché (autel, cuve)</li>
                <li><strong>Argent:</strong> Rédemption (bases, crochets - Exode 30:11-16)</li>
                <li><strong>Or:</strong> Gloire divine (tous les meubles du sanctuaire)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Hébreux 9:1-10</h4>
              <p className="text-xs leading-relaxed">
                "Ces choses étant ainsi disposées, les sacrificateurs entrent continuellement dans le premier tabernacle 
                pour accomplir le service divin; mais dans le second, le souverain sacrificateur seul entre une fois par an, 
                non sans y porter du sang qu'il offre pour lui-même et pour les péchés du peuple."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabernacleInterieur;