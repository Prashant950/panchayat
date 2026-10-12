// All site content lives here (static). Edit only with verified facts.
const T = (en, hi) => ({ en, hi });

export const site = {
  name: T('Gram Panchayat Chiluli', 'ग्राम पंचायत चिलूली'),
  tagline: T('Our Soil, Our Identity', 'हमारी मिट्टी, हमारी पहचान।'),
  pradhan: T('Vishnu Pratap Singh', 'विष्णु प्रताप सिंह'),
  pradhanPhone: '9455134505',
  pradhanCategory: T('General Category', 'सामान्य वर्ग'),
  phone: '9455134505',
  secretary: T('Lal Chand Saroj', 'लाल चंद सरोज'),
  secretaryPhone: '9807051431',
  formerPradhan: T('Mo. Ibrahim Kha', 'मो० इब्राहिम खां'),
  formerPradhanPhone: '9838465524',
  formerPradhanCategory: T('OBC (Backward Class)', 'पिछड़ा वर्ग'),
  formerPradhanImage: '/images/former-pradhan-ibrahim-kha.jpg',
  pradhanImage: '/images/ration-distribution-1.jpg',
  blockCode: '2063',
  panchayatCode: '84242',
  blockTotalPanchayats: '58',
  address: T('Panchayat Bhawan Chiluli, Development Block Singhpur, Tehsil Tiloi, District Amethi, Uttar Pradesh - 229309', 'पंचायत भवन चिलूली, विकास खंड सिंहपुर, तहसील तिलोई, जनपद अमेठी, उत्तर प्रदेश - 229309'),
  email: null,
  instagram: 'https://www.instagram.com/chiluli_tiloi_amethi_2022?cplk=Y3dqdXRmN3JhZjUx',
  facebook: 'https://www.facebook.com/share/1FEcoAnmEi/',
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};

export const tbu = T('Information being updated', 'जानकारी अपडेट की जा रही है');

export const facts = [
  [T('Gram Pradhan (present)', 'ग्राम प्रधान (वर्तमान)'), site.pradhan],
  [T('Development Block', 'विकास खंड'), T('Singhpur (~58 Panchayats)', 'सिंहपुर (लगभग 58 ग्राम पंचायतें)')],
  [T('Tehsil', 'तहसील'), T('Tiloi', 'तिलोई')],
  [T('District', 'जनपद'), T('Amethi', 'अमेठी')],
  [T('Gram Panchayat Code', 'ग्राम पंचायत कोड'), '84242'],
  [T('Development Block Code', 'विकास खण्ड कोड'), '2063'],
];

export const pending = [
  T('Population', 'जनसंख्या'),
  T('Households', 'परिवार'),
  T('Schools & facilities', 'विद्यालय व सुविधाएँ'),
  T('Development projects', 'विकास परियोजनाएँ')
];

export const projectCats = [
  T('Roads & public infrastructure', 'सड़क व सार्वजनिक अवसंरचना'),
  T('Drinking water & sanitation', 'पेयजल व स्वच्छता'),
  T('Cleanliness & environment', 'सफ़ाई व पर्यावरण'),
  T('Street lighting', 'स्ट्रीट लाइट'),
  T('Community facilities', 'सामुदायिक सुविधाएँ'),
  T('Education & awareness', 'शिक्षा व जागरूकता')
];

export const projects = [
  {
    id: 'bhawan',
    img: '/images/panchayat-bhawan.jpg',
    status: T('Completed', 'पूर्ण'),
    title: T('Panchayat Bhawan, Chiluli', 'पंचायत भवन, चिलूली'),
    place: T('Chiluli, Block Singhpur', 'चिलूली, विकास खंड सिंहपुर'),
    desc: T(
      'The modern Gram Panchayat building, equipped with a covered verandah, vivid wall murals portraying rural culture, and a rooftop solar panel system. Serving as the primary hub for administrative services, public meetings, and citizen welfare coordination.',
      'ग्राम पंचायत चिलूली का नवनिर्मित एवं सुसज्जित भवन — विशाल बरामदा, ग्रामीण संस्कृति और विकास के दृश्यों से सजी दीवार-चित्रकारी तथा छत पर स्थापित सौर ऊर्जा (सोलर) पैनल। यह ग्रामवासियों और प्रशासन के बीच संवाद व सेवाओं का मुख्य केंद्र है।'
    ),
    features: [
      T('Rooftop Solar Powered System', 'छत पर स्थापित सोलर पैनल संयंत्र'),
      T('Cultural Wall Murals & Rural Art', 'ग्रामीण संस्कृति को दर्शाती दीवार चित्रकारी'),
      T('Spacious Citizen Verandah', 'ग्रामवासियों हेतु खुला बैठक बरामदा'),
      T('Public Service Meeting Chamber', 'नागरिक सेवा व विचार-विमर्श कक्ष')
    ]
  },
  {
    id: 'solar-lights',
    img: '/images/solar-light-1.png',
    images: [
      '/images/solar-light-1.png',
      '/images/solar-light-2.png',
      '/images/solar-light-3.png',
      '/images/solar-light-4.png'
    ],
    status: T('Ongoing', 'प्रगति पर'),
    title: T('Solar & Street Lighting Phase', 'सोलर व स्ट्रीट लाइट व्यवस्था'),
    place: T('Main Pathways, Chiluli', 'गाँव के प्रमुख मार्ग, चिलूली'),
    desc: T(
      'Enhancing village pathway safety and night visibility through solar and energy-efficient lighting installations across residential settlements.',
      'गाँव के मुख्य मार्गों और सार्वजनिक स्थानों पर प्रकाश व्यवस्था को सुदृढ़ करने हेतु सोलर व स्ट्रीट लाइट व्यवस्था का विस्तार।'
    ),
    features: [
      T('Energy-Efficient Lighting', 'ऊर्जा दक्ष एलईडी व सोलर लाइट'),
      T('Pathway Safety at Night', 'रात्रि के समय मार्ग सुरक्षा')
    ]
  },
  {
    id: 'clean-water',
    img: '/images/community-welfare-gathering.jpg',
    status: T('Active', 'सक्रिय'),
    title: T('Clean Drinking Water & Jal Jeevan Mission', 'स्वच्छ पेयजल व जल जीवन मिशन'),
    place: T('Village Habitations, Chiluli', 'समस्त मजरों में, चिलूली'),
    desc: T(
      'Facilitating tap water supply and routine inspection of handpumps and water points in collaboration with Jal Jeevan Mission guidelines.',
      'जल जीवन मिशन के अंतर्गत गाँव के हर घर तक स्वच्छ पेयजल पहुँचाने तथा मौजूदा इंडिया मार्क हैंडपंपों की सुचारू देखरेख।'
    ),
    features: [
      T('Tap Water Connection Pipeline', 'नल से जल आपूर्ति पाइपलाइन'),
      T('Water Point Maintenance', 'पेयजल स्रोतों का नियमित रखरखाव')
    ]
  }
];

export const gallery = [
  {
    id: 'g-saree-rural-lane',
    cat: 'welfare',
    src: '/images/saree-distribution-rural-lane.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh presenting saree package to village mother by roadside in Chiluli', 'ग्रामीण मार्ग पर महिला लाभार्थी को सम्मानपूर्वक साड़ी व उपहार किट भेंट करते ग्राम प्रधान श्री विष्णु प्रताप सिंह'),
    desc: T('Door-to-door welfare outreach honoring village mothers and families.', 'गाँव के हर टोले और मजरे में जाकर माताओं-बहनों को सम्मान व सहायता सामग्री उपलब्ध कराना।')
  },
  {
    id: 'g-elder-aid-winter',
    cat: 'welfare',
    src: '/images/elderly-mother-aid-handover.jpg',
    alt: T('Handing over essential welfare aid packet to elderly village mother beside car in Chiluli', 'गाड़ी से जरूरतमंद बुजुर्ग माताजी को सम्मानपूर्वक राहत पैकेट व सहायता सामग्री सौंपते हुए'),
    desc: T('Respectful assistance delivered directly to village elders and senior citizens.', 'गाँव के वरिष्ठ बुजुर्गों का सम्मान और उन तक सीधी मदद पहुँचाना हमारी पहली प्राथमिकता है।')
  },
  {
    id: 'g-women-kit-group',
    cat: 'welfare',
    src: '/images/women-group-welfare-kit-night.jpg',
    alt: T('Group of village women proudly displaying welfare aid kits received under panchayat initiatives', 'ग्राम पंचायत जनकल्याण पहल के तहत प्राप्त सहायता किट के साथ प्रसन्नतापूर्वक खड़ी ग्रामीण मातृशक्ति'),
    desc: T('Empowering rural women and ensuring comprehensive welfare across Gram Panchayat Chiluli.', 'गाँव की महिलाओं को सशक्त, आत्मनिर्भर और खुशहाल बनाने के संकल्प के साथ निरंतर सेवा कार्य।')
  },
  {
    id: 'g-festival-sweets',
    cat: 'community',
    src: '/images/festival-gift-sweets-distribution.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh distributing festive sweets and gift packs to village women and children', 'त्योहार व उत्सव के अवसर पर मातृशक्ति व बच्चों को मिष्ठान व उपहार किट वितरित करते ग्राम प्रधान'),
    desc: T('Sharing festive joy, sweetness, and blessings across all households in Chiluli.', 'त्योहारों के अवसर पर खुशियाँ बाँटने और गाँव के हर परिवार में मिठास घोलने की सुंदर परंपरा।')
  },
  {
    id: 'g-winter-blanket-elder',
    cat: 'welfare',
    src: '/images/winter-blanket-elderly-mother.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh presenting winter blanket and relief kit to elderly mother in Chiluli', 'सर्दियों में बुजुर्ग माताजी को सम्मानपूर्वक कंबल व राहत किट भेंट करते ग्राम प्रधान श्री विष्णु प्रताप सिंह'),
    desc: T('Seasonal winter relief ensuring protection and warmth for elderly village residents.', 'ठंड के मौसम में गाँव के बुजुर्गों व जरूरतमंदों को कंबल व ऊनी वस्त्र वितरण की निरंतर सेवा।')
  },
  {
    id: 'g-chaupal-officials',
    cat: 'community',
    src: '/images/panchayat-representatives-chaupal.jpg',
    alt: T('Village representatives and residents gathered on chaupal street discussing public grievances', 'गाँव के मार्ग पर चौपाल लगाकर जनसमस्याओं व विकास योजनाओं पर चर्चा करते प्रतिनिधि व ग्रामीण'),
    desc: T('Grassroots citizen dialogue and open discussion with local representatives in Chiluli.', 'गाँव की गलियों और चौपालों पर बैठकर नागरिकों की समस्याओं का त्वरित समाधान और चर्चा।')
  },
  {
    id: 'g-red-car-blanket',
    cat: 'welfare',
    src: '/images/red-car-blanket-distribution.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh distributing warm blankets to village mothers and children', 'गाँव की माताओं-बहनों व नौनिहालों को गाड़ी से गर्म कंबल व राहत पैकेट वितरित करते ग्राम प्रधान'),
    desc: T('Reaching every neighborhood to distribute warm clothing and household essentials.', 'गाँव के हर मोहल्ले तक पहुँचकर जरूरतमंद परिवारों को ऊनी सामग्री व राहत सहायता पहुँचाना।')
  },
  {
    id: 'g-hut-relief-aid',
    cat: 'welfare',
    src: '/images/thatched-hut-relief-handover.jpg',
    alt: T('Doorstep handover of clothing and relief package to rural family outside thatched house in Chiluli', 'गाँव के कच्चे घर/छप्पर के प्रांगण में परिवार को सम्मानपूर्वक वस्त्र व सहायता सामग्री भेंट'),
    desc: T('Dedicated public service reaching the most vulnerable households across the panchayat.', 'पंचायत के अंतिम छोर पर बसे जरूरतमंद परिवारों तक सीधी मदद और सम्मान पहुँचाने का संकल्प।')
  },
  {
    id: 'g-night-relief-mother',
    cat: 'welfare',
    src: '/images/night-household-relief-mother.jpg',
    alt: T('Evening household relief handover to elderly mother in the presence of village youth', 'गाँव के साथियों की उपस्थिति में देर शाम बुजुर्ग माताजी को सम्मानपूर्वक राहत सामग्री सौंपते हुए'),
    desc: T('Dedicated round-the-clock welfare support reaching every doorstep in Chiluli.', 'दिन हो या रात, गाँव के बुजुर्गों और माताओं की सेवा में सदैव तत्पर हमारी ग्राम पंचायत टीम।')
  },
  {
    id: 'g-saree-collage',
    cat: 'welfare',
    src: '/images/doorstep-saree-welfare-collage.jpg',
    alt: T('Doorstep distribution of sarees and welfare packages to village mothers by Gram Pradhan Vishnu Pratap Singh', 'ग्राम प्रधान श्री विष्णु प्रताप सिंह द्वारा गाँव के घर-घर जाकर मातृशक्ति व बुजुर्ग माताओं को साड़ी व राहत सामग्री वितरण'),
    desc: T('Direct household distribution of clothing, sarees, and essential kits across Chiluli.', 'गाँव की माताओं-बहनों तक उनके द्वार पर जाकर सम्मानपूर्वक वस्त्र व सहायता सामग्री पहुँचाने का पुनीत कार्य।')
  },
  {
    id: 'g-kharanja-walk',
    cat: 'community',
    src: '/images/village-kharanja-padyatra.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh and villagers conducting inspection walk along village brick road in Chiluli', 'ग्राम पंचायत चिलूली में खड़ंजा मार्ग पर ग्रामीणों व साथियों के साथ पैदल निरीक्षण करते ग्राम प्रधान'),
    desc: T('Regular inspection of village roads, drainage, and infrastructure alongside local residents.', 'गाँव के रास्तों, नालियों और विकास कार्यों का स्थलीय निरीक्षण व नागरिकों से विचार-विमर्श।')
  },
  {
    id: 'g-unity-elders',
    cat: 'community',
    src: '/images/village-elders-youth-unity.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh standing in solidarity with village elders, youth, and residents', 'ग्राम पंचायत चिलूली में सम्मानित बुजुर्गों, युवा साथियों व ग्रामीणों के साथ ग्राम प्रधान श्री विष्णु प्रताप सिंह'),
    desc: T('Unwavering bond between village leadership, senior citizens, and youth of Chiluli.', 'गाँव के वरिष्ठ प्रबुद्धजनों के आशीर्वाद और युवाओं के सहयोग से निरंतर अग्रसर हमारी ग्राम पंचायत।')
  },
  {
    id: 'g-utensil-aid',
    cat: 'welfare',
    src: '/images/utensil-aid-distribution-night.jpg',
    alt: T('Night distribution of utility utensils and household items to village mothers across Chiluli households', 'ग्राम पंचायत चिलूली में रात्रि चौपाल के दौरान मातृशक्ति को घरेलू उपयोगी बर्तन व सामग्री वितरण'),
    desc: T('Doorstep delivery of essential household utensils and utility sets to village families.', 'गाँव के परिवारों को उपयोगी बर्तन व आवश्यक घरेलू सामग्री का सम्मानपूर्वक वितरण।')
  },
  {
    id: 'g-women-saree-aid',
    cat: 'welfare',
    src: '/images/women-empowerment-saree-aid.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh presenting saree and welfare kit to village woman with community gathered', 'ग्रामीण मातृशक्ति को सम्मानपूर्वक साड़ी व सहायता किट भेंट करते ग्राम प्रधान श्री विष्णु प्रताप सिंह'),
    desc: T('Supporting women empowerment and dignity through dedicated community welfare programs.', 'मातृशक्ति के सम्मान और सशक्तीकरण हेतु ग्राम पंचायत चिलूली की निरंतर सेवा पहल।')
  },
  {
    id: 'g-padyatra-1',
    cat: 'community',
    src: '/images/village-padyatra-inspection.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh leading village padyatra with residents and youth through Chiluli', 'ग्राम प्रधान श्री विष्णु प्रताप सिंह के नेतृत्व में ग्रामीणों व युवाओं के साथ गाँव में पदयात्रा व विकास निरीक्षण'),
    desc: T('Walking hand-in-hand with villagers through rural lanes to inspect development needs.', 'गाँव की गलियों में पदयात्रा कर विकास कार्यों की समीक्षा व नागरिकों से सीधा संवाद।')
  },
  {
    id: 'g-rally-night',
    cat: 'community',
    src: '/images/night-victory-rally-support.jpg',
    alt: T('Night victory rally and massive public support gathering for Gram Pradhan in Chiluli', 'ग्राम पंचायत चिलूली में ग्रामवासियों व युवाओं का अपार जनसमर्थन और रात्रि विजय व एकता उत्सव'),
    desc: T('Overwhelming trust and solidarity expressed by villagers with raised hands and victory signs.', 'गाँव के प्रबुद्ध नागरिकों और ऊर्जावान युवाओं का अटूट विश्वास और विजय उत्सव।')
  },
  {
    id: 'g-riverside-aid',
    cat: 'welfare',
    src: '/images/riverside-elderly-relief-aid.jpg',
    alt: T('Handing over essential welfare aid to elderly mother near village pond in the presence of elders', 'गाँव के वरिष्ठ बुजुर्गों की उपस्थिति में वृद्ध माताजी को राहत व आवश्यक सामग्री भेंट'),
    desc: T('Delivering compassionate care and household aid to respected village elders.', 'गाँव के बुजुर्गों के प्रति आदरभाव और हर जरूरतमंद माता तक सहायता पहुँचाने की निरंतर सेवा।')
  },
  {
    id: 'g-massive-camp',
    cat: 'welfare',
    src: '/images/massive-welfare-camp-gathering.jpg',
    alt: T('Massive public turnout of village women and families at welfare camp and scheme distribution in Chiluli', 'ग्राम पंचायत चिलूली में जनकल्याणकारी शिविर व योजना वितरण में उमड़ा मातृशक्ति और ग्रामीणों का विशाल जनसैलाब'),
    desc: T('Large-scale civic participation and smooth distribution of government welfare benefits.', 'गाँव की सैकड़ों माताओं-बहनों और परिवारों को सरकारी योजनाओं व राहत सामग्री का व्यवस्थित वितरण।')
  },
  {
    id: 'g-doorstep-ration',
    cat: 'welfare',
    src: '/images/doorstep-car-ration-handover.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh presenting essential food aid to village mother with elders present', 'ग्राम प्रधान श्री विष्णु प्रताप सिंह द्वारा बुजुर्गों की उपस्थिति में ग्रामीण महिला को आदरपूर्वक राशन व खाद्य सामग्री भेंट'),
    desc: T('Direct doorstep delivery of essential sustenance and ration packets to village families.', 'गाँव के परिवारों तक सीधे पहुँचकर आदर और सम्मान के साथ खाद्यान्न सहायता उपलब्ध कराना।')
  },
  {
    id: 'g-tiranga-elders',
    cat: 'community',
    src: '/images/tiranga-gathering-elders.jpg',
    alt: T('Village elders and citizens proudly holding National Tricolor during patriotic festival in Chiluli', 'ग्राम पंचायत चिलूली में राष्ट्रीय पर्व व तिरंगा अभियान पर तिरंगा बैज व पट्टिका धारण किए एकत्रित वरिष्ठ नागरिक व ग्रामीण'),
    desc: T('Elders, youth, and citizens celebrating national pride and unity in Gram Panchayat Chiluli.', 'गाँव के सम्मानित बुजुर्गों, प्रबुद्धजनों और युवाओं द्वारा तिरंगा उत्सव पर राष्ट्रभक्ति व एकता का प्रदर्शन।')
  },
  {
    id: 'g-tiranga-youth',
    cat: 'community',
    src: '/images/tiranga-youth-sash.jpg',
    alt: T('Village youth and elders wearing patriotic Tiranga sashes in Gram Panchayat Chiluli', 'ग्राम पंचायत चिलूली में राष्ट्रीय उत्सव पर तिरंगा दुपट्टा व पट्टिका धारण किए गर्व से खड़े युवा साथी व बुजुर्ग'),
    desc: T('Active participation of youth and elders during national celebrations in Chiluli.', 'राष्ट्रीय पर्व पर चिलूली के ऊर्जावान युवाओं और बुजुर्गों का उत्साह व सहभागिता।')
  },
  {
    id: 'g-car-relief',
    cat: 'welfare',
    src: '/images/car-boot-relief-distribution.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh distributing essential food and relief packets from car to elderly mother and families', 'ग्राम प्रधान श्री विष्णु प्रताप सिंह द्वारा गाड़ी से जरूरतमंद बुजुर्ग माताजी व परिवारों को खाद्यान्न राहत सामग्री वितरण'),
    desc: T('Doorstep relief and essential grocery kits delivered to vulnerable households across Chiluli.', 'गाँव के हर जरूरतमंद परिवार और बुजुर्ग माताओं तक सीधे खाद्यान्न व आवश्यक सामग्री पहुँचाने का सेवा कार्य।')
  },
  {
    id: 'g-temple-handover',
    cat: 'welfare',
    src: '/images/temple-courtyard-relief-handover.jpg',
    alt: T('Handover of essential relief aid to elderly mother at village heritage temple courtyard in Chiluli', 'गाँव के परिसर में बुजुर्ग माताजी को सम्मानपूर्वक राहत सामग्री व आवश्यक पैकेट सौंपते हुए'),
    desc: T('Direct respectful welfare assistance delivered to elderly mothers of the village.', 'गाँव की बुजुर्ग माताओं को सम्मानपूर्वक सीधी सहायता और राहत सामग्री प्रदान करने की परंपरा।')
  },
  {
    id: 'g-night-elderly-aid',
    cat: 'welfare',
    src: '/images/night-emotional-aid-elderly.jpg',
    alt: T('Emotional moment as Gram Pradhan hands over vital food relief packet to elderly grandmother at night', 'रात्रि में जरूरतमंद भावुक बुजुर्ग दादीजी को सीधे हाथों में खाद्य राहत सामग्री सौंपते ग्राम प्रधान व उपस्थित ग्रामीण'),
    desc: T('Dedicated night outreach ensuring no elderly citizen in Chiluli goes without support.', 'समर्पण और संवेदनशीलता के साथ रात्रि में भी जरूरतमंद बुजुर्गों तक राशन व सहायता पहुँचाने का कार्य।')
  },
  {
    id: 'g-maati-1',
    cat: 'community',
    src: '/images/meri-maati-mera-desh-amrit-kalash.jpg',
    alt: T('Meri Maati Mera Desh Amrit Kalash ceremony by village women of Gram Panchayat Chiluli', 'मेरी माटी, मेरा देश — ग्राम पंचायत चिलूली में पवित्र माटी नमन एवं अमृत कलश कार्यक्रम'),
    desc: T('Honoring our sacred village soil and national heroes under the Meri Maati Mera Desh initiative in Chiluli.', 'गाँव की माटी को नमन, वीरों का वंदन — चिलूली की मातृशक्ति द्वारा अमृत कलश में पवित्र माटी संग्रह।')
  },
  {
    id: 'g-indep-1',
    cat: 'community',
    src: '/images/independence-day-panchayat-celebration.jpg',
    alt: T('Grand Independence Day celebration with National Tricolor at Gram Panchayat Chiluli', 'पंचायत भवन चिलूली पर स्वतंत्रता दिवस एवं अमृत महोत्सव का भव्य सामुदायिक आयोजन'),
    desc: T('Villagers, elders, youth, and children celebrating national festivals together with pride.', 'गाँव के समस्त नागरिकों, बुजुर्गों व बच्चों द्वारा हर्षोल्लास के साथ राष्ट्रीय पर्व का उत्सव।')
  },
  {
    id: 'g-tiranga-1',
    cat: 'community',
    src: '/images/tiranga-yatra-national-festival.jpg',
    alt: T('Har Ghar Tiranga and patriotic procession by residents of Chiluli village', 'हर घर तिरंगा व देशभक्ति यात्रा में सम्मिलित ग्राम पंचायत चिलूली के प्रबुद्ध नागरिक'),
    desc: T('Civic pride and patriotic unity across Gram Panchayat Chiluli.', 'राष्ट्रभक्ति और सामाजिक एकता के साथ चिलूली के नागरिकों का सामूहिक एकत्रीकरण।')
  },
  {
    id: 'g-police-relief',
    cat: 'welfare',
    src: '/images/police-pradhan-relief-distribution.jpg',
    alt: T('Relief kit distribution to village women with administrative and police officials', 'प्रशासन व पुलिस अधिकारियों की उपस्थिति में मातृशक्ति को सहायता व राहत सामग्री वितरण'),
    desc: T('Community coordination for transparent public distribution of welfare packages.', 'प्रशासनिक पारदर्शिता के साथ गाँव की माताओं-बहनों को आवश्यक सहायता किट उपलब्ध कराना।')
  },
  {
    id: 'g-elder-relief-8',
    cat: 'welfare',
    src: '/images/elderly-woman-relief-handover.jpg',
    alt: T('Respectful handover of relief packet to elderly mother by administrative officials and Pradhan', 'वरिष्ठ बुजुर्ग माताजी को सम्मानपूर्वक सहायता सामग्री सौंपते पुलिस अधिकारी व ग्राम प्रधान'),
    desc: T('Compassionate support to the elderly and vulnerable residents of Chiluli.', 'गाँव के वरिष्ठजनों की देखभाल और उन्हें सीधी सहायता पहुँचाने का निरंतर प्रयास।')
  },
  {
    id: 'g-harmony-1',
    cat: 'community',
    src: '/images/social-harmony-ambedkar-meet.jpg',
    alt: T('Social harmony and inclusive community gathering with Gram Pradhan Vishnu Pratap Singh', 'सामाजिक समरसता व बाबासाहेब डॉ. भीमराव आंबेडकर विचार संगोष्ठी में उपस्थित ग्राम प्रधान व ग्रामवासी'),
    desc: T('Upholding constitutional values, equality, and inclusive progress across Chiluli.', 'गाँव में समानता, बंधुत्व और संविधान निर्माता बाबासाहेब के विचारों के साथ सामाजिक समरसता।')
  },
  {
    id: 'g-relief-admin',
    cat: 'welfare',
    src: '/images/administrative-relief-distribution.jpg',
    alt: T('Joint distribution of essential relief aid with administrative and police officials', 'प्रशासनिक व पुलिस अधिकारियों के साथ जरूरतमंद परिवारों को राहत सामग्री वितरण करते ग्राम प्रधान'),
    desc: T('Collaborative administration and panchayat outreach for public support in Chiluli.', 'प्रशासन और ग्राम पंचायत के संयुक्त प्रयासों से नागरिकों तक आवश्यक सहयोग पहुँचाने का कार्य।')
  },
  {
    id: 'g-chaupal-1',
    cat: 'community',
    src: '/images/village-chaupal-gathering.jpg',
    alt: T('Open village chaupal gathering with youth and elders discussing village affairs', 'ग्रामीण चौपाल पर विकास व जनसमस्याओं पर विचार-विमर्श करते ग्रामवासी व प्रबुद्धजन'),
    desc: T('Traditional rural democratic dialogue at the village chaupal.', 'गाँव की चौपाल — जनसंवाद, आपसी विचार-विमर्श और लोकतांत्रिक निर्णयों का केंद्र।')
  },
  {
    id: 'g-youth-1',
    cat: 'community',
    src: '/images/youth-group-panchayat.jpg',
    alt: T('Youth of Chiluli village actively participating in local governance', 'ग्राम पंचायत चिलूली के ऊर्जावान युवा साथी ग्राम विकास में अपनी सहभागिता निभाते हुए'),
    desc: T('Empowering rural youth for development, sports, and community service.', 'गाँव के युवाओं को विकास, शिक्षा और सामाजिक कार्यों से जोड़ने की निरंतर पहल।')
  },
  {
    id: 'g-evening-chaupal',
    cat: 'community',
    src: '/images/evening-chaupal-dialogue.jpg',
    alt: T('Evening community assembly with senior citizens and youth of Chiluli', 'रात्रि कालीन सामुदायिक बैठक में उपस्थित गाँव के सम्मानित बुजुर्ग व युवा'),
    desc: T('Consistent grassroots communication between leadership and village residents.', 'ग्रामवासियों से निरंतर सीधा संपर्क और उनकी समस्याओं का समयबद्ध समाधान।')
  },
  {
    id: 'g-scheme-3',
    cat: 'community',
    src: '/images/scheme-awareness-rally.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh and youth holding welfare scheme awareness documents', 'ग्राम प्रधान श्री विष्णु प्रताप सिंह एवं युवा साथियों द्वारा जनकल्याणकारी योजना प्रपत्र प्रदर्शन'),
    desc: T('Spreading awareness about government schemes and citizen rights in Chiluli.', 'गाँव के नागरिकों को शासकीय योजनाओं व उनके अधिकारों के प्रति जागरूक करने का अभियान।')
  },
  {
    id: 'g-children-1',
    cat: 'community',
    src: '/images/village-children-gathering.jpg',
    alt: T('Cheerful children of Chiluli village participating in community gathering', 'ग्राम पंचायत चिलूली के नौनिहाल व बच्चे सामुदायिक कार्यक्रम के दौरान'),
    desc: T('The bright future of Chiluli — our village children.', 'हमारे चिलूली का सुनहरा भविष्य — गाँव के ऊर्जावान व प्यारे नौनिहाल।')
  },
  {
    id: 'g-welfare-8',
    cat: 'welfare',
    src: '/images/elderly-aid-distribution-7.jpg',
    alt: T('Gram Pradhan handing over essential food and ration packet to elderly mother', 'बुजुर्ग माताजी को सम्मानपूर्वक आवश्यक खाद्य व राशन पैकेट भेंट करते ग्राम प्रधान'),
    desc: T('Direct household assistance to elderly and vulnerable villagers.', 'वरिष्ठ नागरिकों तक सीधी सहायता और सम्मान पहुँचाने की परंपरा।')
  },
  {
    id: 'g-welfare-9',
    cat: 'welfare',
    src: '/images/community-relief-distribution-8.jpg',
    alt: T('Distribution of essential household supplies in the presence of village elders', 'ग्राम पंचायत चिलूली के वरिष्ठजनों की उपस्थिति में महिला लाभार्थी को राहत सामग्री वितरण'),
    desc: T('Transparent community-driven distribution of welfare aid in Chiluli.', 'सामुदायिक सहभागिता और पारदर्शिता के साथ राहत सामग्री वितरण।')
  },
  {
    id: 'g-night-1',
    cat: 'welfare',
    src: '/images/night-welfare-distribution.jpg',
    alt: T('Evening welfare gathering and distribution of documents to village women', 'रात्रि चौपाल व जनकल्याण संवाद के दौरान महिलाओं को योजना प्रपत्र वितरण'),
    desc: T('Reaching every corner and every household with dedicated welfare support.', 'हर घर, हर चौपाल तक शासकीय लाभ और सहायता पहुँचाने का निरंतर प्रयास।')
  },
  {
    id: 'g-scheme-1',
    cat: 'welfare',
    src: '/images/scheme-certificate-distribution-1.jpg',
    alt: T('Distribution of official scheme benefit documents to village mothers and elders', 'ग्राम पंचायत चिलूली में मातृशक्ति व वरिष्ठ नागरिकों को योजना स्वीकृति पत्र एवं लाभ प्रमाण पत्र वितरण'),
    desc: T('Public welfare beneficiary documentation ceremony in Chiluli.', 'शासकीय योजनाओं के स्वीकृति पत्र व लाभ वितरण समारोह में उपस्थित ग्रामवासी व नेतृत्व।')
  },
  {
    id: 'g-scheme-2',
    cat: 'welfare',
    src: '/images/scheme-certificate-distribution-2.jpg',
    alt: T('Evening community gathering with women displaying scheme documents', 'मातृशक्ति को योजना प्रमाण पत्र एवं आवश्यक सहायता सामग्री प्रदान करते हुए'),
    desc: T('Citizen empowerment through direct benefit scheme facilitation.', 'गाँव की महिलाओं व परिवारों को सशक्त बनाने हेतु प्रत्यक्ष लाभ प्रमाण पत्र वितरण।')
  },
  {
    id: 'g-clothing-1',
    cat: 'welfare',
    src: '/images/clothing-aid-distribution.jpg',
    alt: T('Distribution of clothing, blankets, and essential apparel to village families', 'गाँव के पात्र परिवारों व महिलाओं को वस्त्र व सहायता सामग्री वितरण करते ग्राम प्रधान'),
    desc: T('Seasonal clothing and essential support distribution initiative.', 'सामाजिक उत्तरदायित्व के तहत जरूरतमंद परिवारों को वस्त्र व आवश्यक सामग्री भेंट।')
  },
  {
    id: 'g-welfare-6',
    cat: 'welfare',
    src: '/images/welfare-relief-distribution-5.jpg',
    alt: T('Providing essential relief supplies to elderly mother in Chiluli', 'बुजुर्ग माताजी को सम्मानपूर्वक खाद्यान्न व राहत सामग्री भेंट करते हुए'),
    desc: T('Caring for our elders and ensuring food security in the village.', 'गाँव के प्रत्येक बुजुर्ग नागरिक का सम्मान और सेवा ही हमारा संकल्प है।')
  },
  {
    id: 'g-welfare-7',
    cat: 'welfare',
    src: '/images/welfare-relief-distribution-6.jpg',
    alt: T('Village elders and Pradhan handing over aid kits to women residents', 'प्रबुद्धजनों के साथ ग्रामवासियों को सहायता किट प्रदान करते ग्राम प्रधान'),
    desc: T('Community leaders and civic administration working hand-in-hand.', 'गाँव के प्रबुद्धजनों के साथ मिलकर जनकल्याणकारी योजनाओं का संचालन।')
  },
  {
    id: 'g-welfare-1',
    cat: 'community',
    src: '/images/community-welfare-gathering.jpg',
    alt: T('Gram Pradhan Vishnu Pratap Singh with village women and elders during public welfare program', 'ग्राम प्रधान श्री विष्णु प्रताप सिंह के साथ ग्रामवासियों, वरिष्ठ नागरिकों एवं मातृशक्ति का सामूहिक एकत्रीकरण'),
    desc: T('Community gathering and welfare initiative at Chiluli village.', 'चिलूली गाँव में जनकल्याणकारी कार्यक्रम के दौरान उपस्थित सम्मानित ग्रामवासी एवं मातृशक्ति।')
  },
  {
    id: 'g-welfare-2',
    cat: 'welfare',
    src: '/images/ration-distribution-1.jpg',
    alt: T('Distribution of essential relief supplies to village elders in Chiluli', 'ग्राम पंचायत चिलूली में वरिष्ठ नागरिकों व महिलाओं को आवश्यक राहत सामग्री का वितरण करते हुए'),
    desc: T('Direct support and essential provisions provided to village families.', 'गाँव के जरूरतमंद परिवारों तक राहत सामग्री व सहायता पहुँचाने का कार्य।')
  },
  {
    id: 'g-welfare-3',
    cat: 'welfare',
    src: '/images/ration-distribution-2.jpg',
    alt: T('Handing over public welfare aid kits to village beneficiaries', 'गाँव के पात्र परिवारों को खाद्यान्न व सहायता किट प्रदान करते ग्राम प्रधान'),
    desc: T('Ensuring food security and civic welfare in Gram Panchayat Chiluli.', 'हर पात्र नागरिक तक शासकीय व सामुदायिक सहायता की पहुँच सुनिश्चित करना।')
  },
  {
    id: 'g-welfare-4',
    cat: 'welfare',
    src: '/images/ration-distribution-3.jpg',
    alt: T('Respectful distribution of aid to village elderly mother', 'बुजुर्ग माताजी को सम्मानपूर्वक सहायता सामग्री भेंट करते ग्राम प्रधान विष्णु प्रताप सिंह'),
    desc: T('Respect for our elders and dedication to every family in our village.', 'गाँव के बुजुर्गों के प्रति सम्मान और सेवा भाव ही हमारी पंचायत की नींव है।')
  },
  {
    id: 'g-welfare-5',
    cat: 'welfare',
    src: '/images/ration-distribution-4.jpg',
    alt: T('Community leaders and Pradhan distributing aid kits to village residents', 'गाँव के प्रबुद्धजनों के साथ जरूरतमंद परिवारों को सहायता वितरण'),
    desc: T('Collaborative civic participation and social welfare in Chiluli.', 'सामुदायिक सहभागिता और जनसेवा के साथ गाँव के विकास की दिशा में कदम।')
  },
  {
    id: 'g-infra-1',
    cat: 'infra',
    src: '/images/panchayat-bhawan.jpg',
    alt: T('Panchayat Bhawan Chiluli with wall paintings and solar panels', 'चित्रकारी व सोलर पैनल से सुसज्जित पंचायत भवन चिलूली'),
    desc: T('Panchayat administrative center with solar power and cultural murals.', 'गाँव का प्रशासनिक केंद्र जहाँ सभी नागरिक सेवाएँ संचालित की जाती हैं।')
  },
  {
    id: 'g-comm-1',
    cat: 'community',
    src: '/images/gram-sabha-program.jpg',
    alt: T('Community gathering in front of Panchayat Bhawan Chiluli', 'पंचायत भवन चिलूली के सामने ग्रामवासियों का एकत्रीकरण'),
    desc: T('Villagers gathered for discussion and civic announcements.', 'ग्राम सभा और विकास योजनाओं पर विचार-विमर्श हेतु उपस्थित नागरिक।')
  }
];

export const galleryCats = [
  ['welfare', T('Welfare & Relief Work', 'जनकल्याण एवं राहत वितरण')],
  ['community', T('Community & Gram Sabha', 'ग्राम सभा व समुदाय')],
  ['infra', T('Panchayat Infrastructure', 'पंचायत अवसंरचना')]
];

export const notices = [
  {
    id: 'n-cyber-1930',
    date: '2026-10-10',
    cat: 'deadline',
    title: T(
      '⚠️ Urgent Cyber Advisory: Fake Social Media Accounts & Blackmail — Helpline 1930',
      '⚠️ अति आवश्यक सूचना: फर्जी सोशल मीडिया अकाउंट व फोटो ब्लैकमेलिंग से सावधान — साइबर हेल्पलाइन 1930'
    ),
    text: T(
      'If anyone creates a fake social account in your name to solicit money, or misuses your photos for extortion/blackmail, DO NOT transfer money. Immediately report to National Cyber Crime Helpline 1930 or lodge a complaint at cybercrime.gov.in.',
      'यदि कोई व्यक्ति आपका या किसी का भी फर्जी सोशल मीडिया अकाउंट (Facebook/Instagram) बनाकर पैसे मांगता है अथवा आपकी फोटो का दुरुपयोग करके ब्लैकमेल करता है, तो घबराएं नहीं और न ही पैसे भेजें। तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें अथवा cybercrime.gov.in पर रिपोर्ट दर्ज कराएं।'
    )
  },
  {
    id: 'n1',
    date: '2026-10-15',
    cat: 'gramSabha',
    title: T('Upcoming Gram Sabha Quarterly Meeting', 'आगामी त्रैमासिक ग्राम सभा खुली बैठक'),
    text: T(
      'The quarterly Gram Sabha open meeting is scheduled at the Panchayat Bhawan. All villagers are cordially invited to participate in discussions regarding village development and welfare beneficiary lists.',
      'पंचायत भवन चिलूली में ग्राम सभा की खुली बैठक आयोजित की जाएगी। सभी ग्रामवासी विकास योजनाओं, स्वच्छता और लाभार्थी सूचियों पर चर्चा हेतु सादर आमंत्रित हैं।'
    )
  },
  {
    id: 'n2',
    date: '2026-10-01',
    cat: 'scheme',
    title: T('PMAY-G Housing Beneficiary Survey Updates', 'प्रधानमंत्री आवास योजना (ग्रामीण) सर्वेक्षण संबंधी सूचना'),
    text: T(
      'Eligible families are requested to ensure their Aadhaar and bank account seedings are updated for housing assistance verification.',
      'पात्र ग्रामीण परिवार अपने आधार और बैंक खाते का विवरण दुरुस्त रखें ताकि आवास योजना के सत्यापन में किसी प्रकार की असुविधा न हो।'
    )
  }
];

export const noticeCats = [
  ['gramSabha', T('Gram Sabha', 'ग्राम सभा')],
  ['development', T('Development', 'विकास कार्य')],
  ['scheme', T('Schemes', 'सरकारी योजनाएँ')],
  ['deadline', T('Deadlines', 'समय-सीमा व अलर्ट')]
];

export const schemes = [
  {
    id: 'pmayg',
    n: T('PM Awas Yojana – Gramin (PMAY-G)', 'प्रधानमंत्री आवास योजना – ग्रामीण'),
    url: 'https://pmayg.nic.in',
    a: T(
      'Financial assistance provided for construction of pucca houses with basic amenities to all eligible houseless and kutcha householders living in rural areas.',
      'ग्रामीण क्षेत्रों में बेघर तथा कच्चे व जर्जर मकानों में रहने वाले पात्र परिवारों को बुनियादी सुविधाओं से युक्त पक्का मकान बनाने हेतु आर्थिक सहायता।'
    ),
    eligibility: T('Families on official SECC beneficiary priority list, verified by Gram Sabha.', 'ग्राम सभा द्वारा सत्यापित आधिकारिक SECC लाभार्थी सूची के पात्र परिवार।')
  },
  {
    id: 'mgnrega',
    n: T('MGNREGA Employment Scheme', 'महात्मा गांधी राष्ट्रीय ग्रामीण रोज़गार गारंटी अधिनियम (मनरेगा)'),
    url: 'https://nrega.nic.in',
    a: T(
      'Guarantees at least 100 days of wage employment in a financial year to every rural household whose adult members volunteer to do unskilled manual work.',
      'प्रत्येक ग्रामीण परिवार के वयस्क सदस्यों को एक वित्तीय वर्ष में कम से कम 100 दिनों के अकुशल शारीरिक श्रम-रोज़गार की कानूनी गारंटी।'
    ),
    eligibility: T('Adult rural household members with active Job Card registered at Gram Panchayat.', 'ग्राम पंचायत में पंजीकृत सक्रिय जॉब कार्ड धारक वयस्क सदस्य।')
  },
  {
    id: 'jjm',
    n: T('Jal Jeevan Mission (Har Ghar Jal)', 'जल जीवन मिशन (हर घर जल)'),
    url: 'https://jaljeevanmission.gov.in',
    a: T(
      'Aims to provide safe and adequate drinking water through individual household tap connections to all rural households.',
      'प्रत्येक ग्रामीण घर तक नियमित रूप से नल के माध्यम से शुद्ध और पर्याप्त पेयजल पहुँचाने का राष्ट्रीय मिशन।'
    ),
    eligibility: T('All residential habitations within the Gram Panchayat boundary.', 'ग्राम पंचायत सीमा के अंतर्गत आने वाले सभी आवासीय मजरें व घर।')
  },
  {
    id: 'sbmg',
    n: T('Swachh Bharat Mission – Gramin (SBM-G)', 'स्वच्छ भारत मिशन – ग्रामीण'),
    url: 'https://swachhbharatmission.gov.in',
    a: T(
      'Promotes universal sanitation coverage, toilet construction incentive, and solid/liquid waste management systems in villages.',
      'गाँवों में शत-प्रतिशत स्वच्छता, व्यक्तिगत घरेलू शौचालय निर्माण प्रोत्साहन तथा ठोस व तरल कचरा प्रबंधन।'
    ),
    eligibility: T('Eligible rural households without existing toilet facility as per baseline survey.', 'बेसलाइन सर्वे अनुसार बिना शौचालय वाले पात्र ग्रामीण परिवार।')
  },
  {
    id: 'pension',
    n: T('Social Security Pension Schemes (Old Age, Widow, Divyang)', 'सामाजिक सुरक्षा पेंशन योजनाएँ (वृद्धावस्था, निराश्रित महिला, दिव्यांग)'),
    url: 'https://nsap.nic.in',
    a: T(
      'Direct monthly pension assistance transferred to bank accounts of senior citizens, widowed women, and differently-abled individuals.',
      'वरिष्ठ नागरिकों, विधवा माताओं तथा दिव्यांगजनों को आर्थिक संबल प्रदान करने हेतु प्रतिमाह बैंक खाते में पेंशन सहायता।'
    ),
    eligibility: T('Age and income criteria specified by Uttar Pradesh State Social Welfare Department.', 'उत्तर प्रदेश समाज कल्याण विभाग के निर्धारित आयु व आय मानदंड।')
  },
  {
    id: 'kisan',
    n: T('PM Kisan Samman Nidhi', 'प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)'),
    url: 'https://pmkisan.gov.in',
    a: T(
      'Financial benefit of ₹6,000 per year transferred in three equal four-monthly installments into bank accounts of landholder farmer families.',
      'पात्र किसान परिवारों को प्रतिवर्ष ₹6,000 की आर्थिक सहायता ₹2,000 की तीन समान किस्तों में सीधे बैंक खाते में।'
    ),
    eligibility: T('Landholding farmer families with validated e-KYC and land seeding records.', 'e-KYC तथा भू-अभिलेख सत्यापित पात्र किसान परिवार।')
  }
];

export const docsNote = T(
  'Documents are set by each scheme’s official guidelines — commonly identity proof (Aadhaar Card), residence proof, bank passbook details with active NPCI/DBT mapping, and passport-size photographs. Confirm the exact list with the Panchayat Bhawan or official portal.',
  'दस्तावेज़ प्रत्येक योजना के आधिकारिक दिशानिर्देशों के अनुसार तय होते हैं — सामान्यतः आधार कार्ड, निवास प्रमाण पत्र, बैंक पासबुक (NPCI/DBT सक्रिय), राशन कार्ड और पासपोर्ट आकार का फोटो। सही जानकारी हेतु पंचायत भवन या आधिकारिक पोर्टल से संपर्क करें।'
);

export const portals = [
  [T('Ration Card & Food Services (UP FCS)', 'राशन कार्ड व खाद्य सुरक्षा पोर्टल (उ.प्र.)'), 'https://fcs.up.gov.in'],
  [T('Birth & Death Registration Portal', 'जन्म-मृत्यु पंजीकरण आधिकारिक पोर्टल'), 'https://crsorgi.gov.in'],
  [T('Jansunwai (IGRS) – Uttar Pradesh Grievance', 'जनसुनवाई (IGRS) – उत्तर प्रदेश शिकायत निवारण'), 'https://jansunwai.up.gov.in'],
  [T('CPGRAMS – Central Citizen Grievance Portal', 'CPGRAMS – केंद्रीय नागरिक शिकायत पोर्टल'), 'https://pgportal.gov.in'],
  [T('UP Bhulekh – Land & Revenue Records', 'यूपी भूलेख – खतौनी व भू-अभिलेख'), 'https://upbhulekh.gov.in'],
  [T('e-Gram Swaraj – Panchayati Raj Portal', 'ई-ग्राम स्वराज – पंचायती राज मंत्रालय'), 'https://egramswaraj.gov.in']
];

export const helplines = [
  ['112', T('Emergency Help', 'आपातकालीन पुलिस सेवा')],
  ['1076', T('UP CM Jansunwai Helpline', 'मुख्यमंत्री हेल्पलाइन (उ.प्र.)')],
  ['181', T('Women Helpline', 'महिला सुरक्षा हेल्पलाइन')],
  ['1098', T('Childline Service', 'बाल सुरक्षा चाइल्डलाइन')],
  ['108', T('Ambulance Emergency', 'एम्बुलेंस आपात सेवा')],
  ['1930', T('Cyber Crime Helpline', 'साइबर अपराध हेल्पलाइन')]
];

export const team = [
  [
    T('Gram Pradhan (Present)', 'वर्तमान ग्राम प्रधान'),
    site.pradhan,
    T('Present elected Pradhan of Gram Panchayat Chiluli, leading village governance, public welfare distribution, and rural development initiatives.', 'ग्राम पंचायत चिलूली के वर्तमान निर्वाचित ग्राम प्रधान — गाँव के विकास, जनकल्याणकारी योजनाओं और नागरिक सुविधाओं के क्रियान्वयन में निरंतर सेवारत।'),
    site.pradhanPhone,
    site.pradhanCategory,
    T('Active Elected Term', 'सक्रिय निर्वाचित कार्यकाल'),
    site.pradhanImage
  ],
  [
    T('Panchayat Secretary (VDO)', 'ग्राम पंचायत सचिव (VDO)'),
    site.secretary,
    T('Appointed government administrative official assisting in village development works, record verification, and official documentation.', 'शासकीय प्रशासनिक अधिकारी — विकास कार्यों, अभिलेखों के संचालन, प्रमाण-पत्र सत्यापन तथा शासकीय योजनाओं के क्रियान्वयन में प्रशासनिक सहयोग प्रदान करते हैं।'),
    site.secretaryPhone,
    null,
    T('Appointed Government Official', 'शासकीय प्रशासनिक अधिकारी'),
    null
  ],
  [
    T('Ward Members (Gram Panchayat Sadasya)', 'ग्राम पंचायत वार्ड सदस्य'),
    null,
    T('Elected ward representatives participating in Gram Sabha resolutions and local area management.', 'गाँव के विभिन्न वार्डों के निर्वाचित प्रतिनिधि जो ग्राम सभा के निर्णयों में सहभागिता करते हैं।'),
    null,
    null,
    T('Ward Representatives', 'वार्ड प्रतिनिधि मंडल'),
    null
  ],
  [
    T('Community & Citizen Representatives', 'सामुदायिक प्रतिनिधि व प्रबुद्धजन'),
    null,
    T('Elders and community members engaged in social harmony, public welfare, and youth guidance.', 'गाँव के बुजुर्ग और प्रबुद्धजन जो सामाजिक समरसता और विकास कार्यों में मार्गदर्शन देते हैं।'),
    null,
    null,
    T('Civic Council', 'नागरिक परामर्श मंडल'),
    null
  ]
];

export const administrativeContacts = [
  {
    id: 'dm-amethi',
    name: T('District Magistrate (DM Amethi)', 'जिलाधिकारी (DM अमेठी)'),
    role: T('District Executive & Magistrate Head', 'जनपद प्रशासनिक व कानून व्यवस्था प्रमुख'),
    phone: '9454418891',
    category: 'district',
    badge: T('District Magistrate', 'जिलाधिकारी'),
    highlight: true,
    desc: T('District Magistrate & Collector, Amethi - Administrative, revenue, and district governance head.', 'जनपद अमेठी के शीर्ष प्रशासनिक, राजस्व एवं कानून व्यवस्था अधिकारी।')
  },
  {
    id: 'sp-amethi',
    name: T('Superintendent of Police (SP Amethi)', 'पुलिस अधीक्षक (SP अमेठी)'),
    role: T('District Police Chief', 'जनपद पुलिस प्रमुख'),
    phone: '9454400427',
    category: 'district',
    badge: T('Police Chief', 'पुलिस अधीक्षक'),
    highlight: true,
    desc: T('Superintendent of Police, Amethi - District law & order, public safety, and police command.', 'जनपद अमेठी पुलिस मुख्यालय — शांति, सुरक्षा एवं कानून व्यवस्था प्रमुख।')
  },
  {
    id: 'cdo-amethi',
    name: T('Chief Development Officer (CDO)', 'मुख्य विकास अधिकारी (CDO)'),
    role: T('Rural & Panchayat Development Head', 'ग्रामीण विकास व जनकल्याण प्रमुख'),
    phone: '9454465472',
    category: 'district',
    badge: T('Chief Development Officer', 'मुख्य विकास अधिकारी'),
    highlight: true,
    desc: T('Chief Development Officer, Amethi - Direct executive supervision of rural schemes, Panchayati Raj, and MNREGA.', 'जनपद में ग्रामीण विकास, पंचायती राज, मनरेगा एवं जनकल्याणकारी योजनाओं के क्रियान्वयन प्रमुख।')
  },
  {
    id: 'sdm-tiloi',
    name: T('Sub-Divisional Magistrate (SDM Tiloi)', 'एस0डी0एम 0तिलोई (उपजिलाधिकारी)'),
    role: T('Sub-Division & Tehsil Tiloi Head', 'तहसील तिलोई उपजिलाधिकारी'),
    phone: '9454416632',
    category: 'tehsil',
    badge: T('SDM Tiloi (Local Tehsil)', 'एस0डी0एम 0तिलोई (स्थानीय तहसील)'),
    highlight: true,
    desc: T('Sub-Divisional Magistrate Tiloi - Executive head for Tehsil Tiloi jurisdiction encompassing Chiluli.', 'चिलूली ग्राम पंचायत की तहसील तिलोई के शीर्ष उपजिलाधिकारी।')
  },
  {
    id: 'tehsildar-tiloi',
    name: T('Tehsildar Tiloi', 'तहसीलदार तिलोई'),
    role: T('Revenue & Land Administration', 'राजस्व व भू-अभिलेख प्रशासन'),
    phone: '9454416640',
    category: 'tehsil',
    badge: T('Tehsildar Tiloi', 'तहसीलदार तिलोई'),
    highlight: true,
    desc: T('Tehsildar Tiloi - Revenue administration, land mutation (Dakhil-Kharij), certifications, and local matters.', 'तहसील तिलोई क्षेत्र में दाखिल-खारिज, राजस्व विवाद एवं प्रमाण-पत्र संबंधी शीर्ष राजस्व अधिकारी।')
  },
  {
    id: 'co-tiloi',
    name: T('Circle Officer Police (CO Tiloi)', 'क्षेत्राधिकारी तिलोई (CO पुलिस)'),
    role: T('Tiloi Police Circle Command', 'क्षेत्राधिकारी पुलिस सर्किल तिलोई'),
    phone: '9454401516',
    category: 'tehsil',
    badge: T('CO Police Tiloi', 'क्षेत्राधिकारी तिलोई'),
    highlight: true,
    desc: T('Circle Officer Police, Tiloi - Law and order, security operations, and police supervision across Tiloi.', 'तहसील तिलोई सर्किल क्षेत्र में पुलिस प्रशासन एवं सुरक्षा व्यवस्था प्रमुख।')
  },
  {
    id: 'bdo-singhpur',
    name: T('Block Development Officer - Singhpur', 'खंड विकास अधिकारी - सिंहपुर (BDO)'),
    role: T('Block Development & Panchayat Executive', 'विकास खंड सिंहपुर प्रमुख'),
    phone: '9454465485',
    category: 'block',
    badge: T('BDO Singhpur (Local Block)', 'खंड विकास अधिकारी - सिंहपुर (स्थानीय ब्लॉक)'),
    highlight: true,
    desc: T('BDO Singhpur - Block administrative executive directly governing Gram Panchayat Chiluli and rural schemes.', 'विकास खंड सिंहपुर के प्रशासनिक प्रमुख — ग्राम पंचायत चिलूली के विकास व शासकीय कार्यों के नोडल अधिकारी।')
  },
  {
    id: 'cmo-amethi',
    name: T('Chief Medical Officer (CMO)', 'मुख्य चिकित्साधिकारी (CMO)'),
    role: T('District Health & Hospitals Head', 'जनपद स्वास्थ्य एवं चिकित्सा प्रमुख'),
    phone: '9454455216',
    category: 'dept',
    badge: T('CMO Health', 'मुख्य चिकित्साधिकारी'),
    highlight: true,
    desc: T('CMO Amethi - District government hospitals, CHC/PHC clinics, ambulances, and immunization programs.', 'जनपद के सभी सरकारी अस्पताल, सीएचसी, पीएचसी व सार्वजनिक स्वास्थ्य सेवाओं के प्रमुख।')
  },
  {
    id: 'sdm-amethi',
    name: T('Sub-Divisional Magistrate (SDM Amethi)', 'एस0डी0एम 0अमेठी'),
    role: T('Sub-Divisional Magistrate Amethi', 'उपजिलाधिकारी अमेठी'),
    phone: '9454416183',
    category: 'district',
    badge: T('SDM Amethi', 'एस0डी0एम 0अमेठी'),
    highlight: false,
    desc: T('Sub-Divisional Magistrate, Amethi Sub-Division administration and magistracy.', 'अमेठी उप-संभाग के प्रशासनिक व मजिस्ट्रेटीय कार्य।')
  },
  {
    id: 'cfo-amethi',
    name: T('Chief Fire Officer (CFO)', 'अग्नि शमन अधिकारी (CFO)'),
    role: T('District Fire Service & Safety', 'अग्निशमन व आपातकालीन राहत'),
    phone: '7054609577',
    category: 'dept',
    badge: T('Fire Officer', 'अग्नि शमन अधिकारी'),
    highlight: true,
    desc: T('District Fire Service Amethi - Emergency firefighting, rescue response, and fire prevention.', 'आग लगने की आपात स्थिति, अग्नि सुरक्षा व तत्काल राहत-बचाव दल।')
  },
  {
    id: 'dfo-amethi',
    name: T('Divisional Forest Officer (DFO)', 'प्रभागीय वनाधिकारी (डी0 एफ0ओ0)'),
    role: T('Forest & Environment Conservation', 'वन एवं पर्यावरण विभाग'),
    phone: '7839435156',
    category: 'dept',
    badge: T('Forest DFO', 'प्रभागीय वनाधिकारी'),
    highlight: false,
    desc: T('Divisional Forest Officer Amethi - Tree plantation, wildlife protection, and forest management.', 'वृक्षारोपण, वन संरक्षण, वन्य जीव सुरक्षा एवं पर्यावरण संवर्धन।')
  },
  {
    id: 'se-electricity',
    name: T('Superintending Engineer Electricity', 'अधीक्षण अभियंता विद्युत'),
    role: T('District Power Distribution', 'विद्युत वितरण मंडल'),
    phone: '8004915109',
    category: 'dept',
    badge: T('Power Supply', 'अधीक्षण अभियंता विद्युत'),
    highlight: false,
    desc: T('Superintending Engineer (Electricity) - Rural electricity supply, power grid, and transformer maintenance.', 'ग्रामीण विद्युत आपूर्ति, ट्रांसफार्मर मरम्मत एवं बिजली व्यवस्था से संबंधित।')
  },
  {
    id: 'ee-tubewell',
    name: T('Executive Engineer Tubewell (Irrigation)', 'अधिशाषी अभियंता नलकूप'),
    role: T('Agricultural Tubewells & Irrigation', 'राजकीय नलकूप व सिंचाई व्यवस्था'),
    phone: '9454415410',
    category: 'dept',
    badge: T('Irrigation Tubewell', 'अभियंता नलकूप'),
    highlight: false,
    desc: T('Executive Engineer (Tubewells) - Agricultural irrigation, government tubewell repairs, and water channel management.', 'गाँव के खेतों की सिंचाई, राजकीय नलकूपों के संचालन व तकनीकी मरम्मत से संबंधित।')
  },
  {
    id: 'bsa-amethi',
    name: T('District Basic Education Officer (BSA)', 'जिला बेसिक शिक्षा अधिकारी (BSA)'),
    role: T('Primary & Basic Education Head', 'बेसिक व प्राथमिक शिक्षा विभाग'),
    phone: '9453004069',
    category: 'dept',
    badge: T('BSA Education', 'जिला बेसिक शिक्षा अधिकारी'),
    highlight: false,
    desc: T('District Basic Shiksha Adhikari - Primary and upper primary schools, teachers, MDM, and student education.', 'गाँव के प्राथमिक व उच्च प्राथमिक विद्यालयों, शिक्षकों, मिड-डे मील व शैक्षणिक व्यवस्था प्रमुख।')
  },
  {
    id: 'dswo-amethi',
    name: T('District Social Welfare Officer', 'जिला समाज कल्याण अधिकारी'),
    role: T('Social Welfare & Pension Schemes', 'समाज कल्याण व वृद्धावस्था पेंशन'),
    phone: '7752993648',
    category: 'dept',
    badge: T('Social Welfare', 'जिला समाज कल्याण अधिकारी'),
    highlight: false,
    desc: T('Social Welfare Department - Old age pension, national family benefit, scholarships, and social schemes.', 'वृद्धावस्था पेंशन, छात्रवृत्ति, राष्ट्रीय पारिवारिक लाभ योजना आदि के नोडल अधिकारी।')
  },
  {
    id: 'ddwo-amethi',
    name: T('District Divyangjan Empowerment Officer', 'जिला दिव्यांग सशक्तिकरण अधिकारी'),
    role: T('Divyangjan Welfare & Assistive Support', 'दिव्यांगजन सशक्तिकरण व पेंशन'),
    phone: '8189038754',
    category: 'dept',
    badge: T('Divyang Empowerment', 'दिव्यांग सशक्तिकरण अधिकारी'),
    highlight: false,
    desc: T('Empowerment of Persons with Disabilities - Divyang pension, motorized tricycles, and welfare aids.', 'दिव्यांग पेंशन, सहायक उपकरण वितरण (ट्राइसाइकिल आदि) एवं कल्याणकारी सहायता।')
  }
];

