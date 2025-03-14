import { useState } from "react";
import "./App.css";

function App() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const menuCategories = {
    "वेलकम ड्रिंक": [
      "मामा पोक",
      "टमाटर पोक",
      "चीकू पोक",
      "चॉकलेट पोक",
      "पाइनएप्पल पोक",
      "कोल्ड पोक",
      "फ्रेश जूस",
      "सोडा छिड़की",
      "आमी का पनाह",
      "कुल्हड़ लस्सी",
      "दूध की कढ़ाई",
      "कॉफी",
      "मसाला चाय",
    ],
    सूप: [
      "क्रीम वेजिटेबल सूप",
      "टोमेटो सूप",
      "टमाटर का सूप",
      "वेज हॉट आर सूप",
      "स्वीट कॉर्न सूप",
    ],
    "फ्रूट स्टाल": [
      "सेब, केला",
      "अंगूर, चीकू",
      "पपीता, आम",
      "संतरा, तरबूज",
      "कुल अन्नानास",
    ],
    "इम्पोर्टेड फ्रूट": [
      "ड्रेगन फ्रूट",
      "स्ट्राबेरी फल",
      "कीवी फल",
      "आलू बुखारा",
      "सरदा",
      "बर्फ गोला",
    ],
    "एक्स्ट्रा काउंटर": [
      "आइसक्रीम पालर",
      "वेफ्ली काउंटर",
      "पापड़ काउंटर",
      "अचार काउंटर",
      "पान काउंटर",
      "कॉफी पालर",
      "भजिया वाला",
      "राजस्थानी टाबा",
      "मोकटेल काउंटर",
      "पकोड़ा काउंटर",
      "सरप्राइज काउंटर",
    ],

    "चाट स्टाल": [
      "गोलगप्पा(2 तरह)",
      "आलू टिक्की",
      "मटर टिक्की",
      "तवा भाजू",
      "पाव भाजी",
      "बाटरमीन",
      "पनीर टिक्का",
      "मुगलाई सीख",
      "बेज सरलेट",
      "मुगलाबादी दाल",
      "इंडियन चाट",
      "दही भल्ला पापड़ी",
      "दही भुजिया",
      "राज कचौरी",
      "कजी वड़ा",
      "मटर कुलचे",
      "छोकनी",
    ],
    "लाइव इंडियन स्टाल": [
      "मसाला डोसा",
      "पनीर डोसा",
      "सांभर डोसा",
      "इडली सांबर",
      "सांबर वड़ा",
      "वेज उत्तपम",
    ],
    "स्नैक्स आइटम": [
      "हरा भरा कबाब",
      "चिल्ली पनीर",
      "टिक्का पनीर",
      "वेज मंचूरियन",
      "मटर पटीला",
      "मिनी समोसा",
      "चिकन चिल्ली",
      "लिंग रोल",
      "चीज बॉल",
      "पटोड़ी बॉल",
      "मैक्रोनी",
      "पास्ता",
      "छेना रसभरी",
      "मिनी टिक्का बर्फी",
      "अमृती पेड़ा",
      "मिनी कटलेट",
      "मिनी पनीर मसाला",
      "भेल पूरी",
      "महिला के बाल",
    ],

    "पनीर सब्जी": [
      "पनीर बटर मसाला",
      "शाही पनीर",
      "मटर पनीर",
      "पालक पनीर",
      "कड़ाई पनीर",
    ],
    "कोफ्ता सब्जी": [
      "नवरतन कोरमा",
      "खोआ मटर काजू",
      "मेथी मलाई मटर",
      "मटर मशरूम",
      "बेबी कॉर्न पालक",
      "पालक स्वीट कॉर्न",
    ],
    "नॉनवेज सब्जी": [
      "स्टफ टिक्का",
      "स्टफ चीनी",
      "स्टफ आलू",
      "पंजाबी छोले",
      "चना मसाला",
      "छिंडा मसाला",
      "गोभी मसाला",
      "अरबी मसाला",
      "भिंडी मसाला",
      "मटर मसाला",
      "मिक्स वेज",
      "दम आलू",
      "मेथी आलू",
      "गोभी आलू",
      "सेम आलू",
      "गाजर मटर",
      "अरबी डोल मसाला",
      "आलू पकोड़ी",
      "आलू डोल",
      "कशमीरिया",
      "सरसो का साग",
      "कड़ी पकोड़ी",
      "दाल बाटी",
      "डोल करोड़ी",
      "तवा भाजी",
    ],
    दाल: ["दाल पंचमेल", "दाल मखनी", "दाल उरद चना", "दाल अरहर", "साबुत मूंग"],

    चावल: [
      "मटर पुलाव",
      "जीरा चावल",
      "कैसरिया पुलाव",
      "वेज बिरयानी",
      "मीठा पुलाव",
    ],
    रायता: [
      "बूंदी रायता",
      "भगुआ रायता",
      "पाइनएप्पल रायता",
      "वेज रायता",
      "दही पकोड़ी रायता",
      "पोदीना रायता",
      "मिक्स वेज रायता",
      "बूंदी बड़ूआ रायता",
    ],
    तंदूर: [
      "खंडवी नान",
      "बटर बन",
      "रूम नान",
      "नान",
      "बिस्कुट रोटी",
      "फुल्का रोटी",
      "लच्छा परांठा",
      "तिल्ली रोटी",
      "दाल पूड़ी",
      "पूड़ी",
    ],
    "नैन मिठाई": [
      "काजू रोल",
      "काजू बेल",
      "काजू कलस",
      "काजू कतली",
      "बादाम गुजिया",
      "बदाम की लौंज",
      "किशन कंदी",
      "अजीर बर्फी",
      "कोकोनट बर्फी",
    ],
    हलवा: [
      "मूंग दाल हलवा",
      "गाजर हलवा",
      "बादाम हलवा",
      "पीठा हलवा",
      "जलेबी बर्फी",
      "मलाई पूरी",
      "गुलाब जामुन",
      "मिनी पेड़ा",
    ],

    "तजीज मिठाई": [
      "मावा पुरिया",
      "मावा सेंडल",
      "मावा मखमल",
      "मावा मोसमी",
      "मावा आम",
      "आम कलाकंद",
      "पेठे की गजारी",
      "ड्राई फ्रूट गजारी",
      "आम रबड़ी",
      "फ्रूट जेली",
      "पेठे की खीर",
      "गरम दूध पकोड़ी",
      "रबा की खीर",
      "चावल की खीर",
    ],
    "ब्रजवासी मिठाई": [
      "छेना कटोरी",
      "छेना कमल",
      "छेना नाव",
      "छप्पन भोग",
      "राष्ट्रीय कप",
      "पार्टीज़ा",
      "कैसरिया सेज",
      "सफेद सजा",
      "रसमलाई",
      "ठंडी दूध पकोड़ी",
    ],
    बेकरी: [
      "पिज्जा",
      "चीज बर्गर",
      "गार्लिक ब्रेड",
      "पेस्ट्री",
      "पॉपकॉर्न",
      "कुकीज",
      "पेठा",
      "मैगी कप",
    ],
    आइसक्रीम: ["वेनिला आइसक्रीम", "स्ट्राबेरी आइसक्रीम", "चॉकलेट आइसक्रीम"],
    "सलाद-ए-बहार": [
      "अंकुरित सलाद",
      "प्याज मिरचा",
      "ग्रीन सलाद",
      "अचार",
      "रोस्टेड पापड़",
    ],
  };

  const handleCheckboxChange = (itemName: string) => {
    const newSelectedItems = new Set(selectedItems);
    if (selectedItems.has(itemName)) {
      newSelectedItems.delete(itemName);
    } else {
      newSelectedItems.add(itemName);
    }
    setSelectedItems(newSelectedItems);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSelectAll = () => {
    const allItems = new Set<string>();
    Object.values(menuCategories).forEach(items => {
      items.forEach(item => {
        allItems.add(item);
      });
    });
    setSelectedItems(allItems);
  };

  const categoriesArray = Object.entries(menuCategories);

  return (
    <>
      <style>
        {`
          @media print {
            body {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              overflow: hidden; /* Prevent overflow to next page */
            }
            .no-print {
              display: none !important;
            }
            .print-only {
              display: block !important;
            }
            @page {
              size: A4 portrait;
              margin: 0;
              orphans: 0;
              widows: 0;
            }
            /* Add these properties to force background printing */
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            /* Prevent page breaks inside elements */
            .a4-container, .a4-content {
              page-break-inside: avoid;
              break-inside: avoid;
            }
          }
          
          .a4-container {
            width: 210mm;
            height: 297mm;
            position: relative;
            margin: 0 auto;
            overflow: hidden;
          }
          
          .a4-content {
            width: 100%;
            height: 100%;
            padding: 5mm;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      
      <div className="a4-container no-print">
        <div className="a4-content bg-[url('./assets/checklist1.png')] bg-no-repeat bg-cover">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex justify-between mt-[125px] mr-6 ml-6">
              <div className="flex items-center">
                <span className="text-[#8B4513] font-bold mr-2 text-xs">NAME:</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-b-2 border-[#8B4513] bg-transparent px-2 w-48 text-xs"
                />
              </div>
              <div className="flex items-center">
                <span className="text-[#8B4513] font-bold mr-2 text-xs">DATE:</span>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border-b-2 border-[#8B4513] bg-transparent px-2 w-32 text-xs"
                />
              </div>
            </div>

            <div className="flex flex-nowrap gap-1 m-2 justify-between flex-1">
              {/* Column 1 - 5 rows */}
              <div className="flex flex-col gap-y-0.5 flex-1">
                {categoriesArray.slice(0, 5).map(([category, items]) => (
                  <div key={category} className="bg-[#DEB887]/60 p-0.5 rounded">
                    <h3 className="text-[15px] font-bold mb-0.5 text-[#8B4513] border-b border-[#8B4513]">
                      {category}
                    </h3>
                    <div className="space-y-0.5">
                      {items.map((item) => (
                        <div key={item} className="flex items-center">
                          <input
                            type="checkbox"
                            id={item}
                            checked={selectedItems.has(item)}
                            onChange={() => handleCheckboxChange(item)}
                            className="w-fit h-fit mr-0.5 accent-[#8B4513]"
                          />
                          <label
                            htmlFor={item}
                            className="text-[#8B4513] w-[110px] text-[8px]"
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2 - 3 rows */}
              <div className="flex flex-col gap-y-0.5 flex-1 ">
                {categoriesArray.slice(5, 8).map(([category, items]) => (
                  <div key={category} className="bg-[#DEB887]/60 p-0.5 rounded">
                    <h3 className="text-[15px] font-bold mb-0.5 text-[#8B4513] border-b border-[#8B4513]">
                      {category}
                    </h3>
                    <div className="space-y-0.5">
                      {items.map((item) => (
                        <div key={item} className="flex items-center">
                          <input
                            type="checkbox"
                            id={item}
                            checked={selectedItems.has(item)}
                            onChange={() => handleCheckboxChange(item)}
                            className="w-fit h-fit mr-0.5 accent-[#8B4513]"
                          />
                          <label
                            htmlFor={item}
                            className="text-[#8B4513] w-[110px] text-[8px]"
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 3 - 4 rows */}
              <div className="flex flex-col gap-y-0.5 flex-1">
                {categoriesArray.slice(8, 12).map(([category, items]) => (
                  <div key={category} className="bg-[#DEB887]/60 p-0.5 rounded">
                    <h3 className="text-[15px] font-bold mb-0.5 text-[#8B4513] border-b border-[#8B4513]">
                      {category}
                    </h3>
                    <div className="space-y-0.5">
                      {items.map((item) => (
                        <div key={item} className="flex items-center">
                          <input
                            type="checkbox"
                            id={item}
                            checked={selectedItems.has(item)}
                            onChange={() => handleCheckboxChange(item)}
                            className="w-fit h-fit mr-0.5 accent-[#8B4513]"
                          />
                          <label
                            htmlFor={item}
                            className="text-[#8B4513] w-[110px] text-[8px]"
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 4 - 5 rows */}
              <div className="flex flex-col gap-y-0.5 flex-1">
                {categoriesArray.slice(12, 17).map(([category, items]) => (
                  <div key={category} className="bg-[#DEB887]/60 p-0.5 rounded">
                    <h3 className="text-[15px] font-bold mb-0.5 text-[#8B4513] border-b border-[#8B4513]">
                      {category}
                    </h3>
                    <div className="space-y-0.5">
                      {items.map((item) => (
                        <div key={item} className="flex items-center">
                          <input
                            type="checkbox"
                            id={item}
                            checked={selectedItems.has(item)}
                            onChange={() => handleCheckboxChange(item)}
                            className="w-fit h-fit mr-0.5 accent-[#8B4513]"
                          />
                          <label
                            htmlFor={item}
                            className="text-[#8B4513] w-[110px] text-[8px]"
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 5 - 5 rows */}
              <div className="flex flex-col gap-y-0.5 flex-1">
                {categoriesArray.slice(17, 22).map(([category, items]) => (
                  <div key={category} className="bg-[#DEB887]/60 p-0.5 rounded">
                    <h3 className="text-[15px] font-bold mb-0.5 text-[#8B4513] border-b border-[#8B4513]">
                      {category}
                    </h3>
                    <div className="space-y-0.5">
                      {items.map((item) => (
                        <div key={item} className="flex items-center">
                          <input
                            type="checkbox"
                            id={item}
                            checked={selectedItems.has(item)}
                            onChange={() => handleCheckboxChange(item)}
                            className="w-fit h-fit mr-0.5 accent-[#8B4513]"
                          />
                          <label
                            htmlFor={item}
                            className="text-[#8B4513] w-[110px] text-[8px]"
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <div className="text-[#8B4513] font-bold text-xs">
                Selected Items: {selectedItems.size}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleSelectAll}
                  className="bg-[#DEB887] text-[#8B4513] px-2 py-1 text-xs rounded hover:bg-[#8B4513] hover:text-white no-print rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#8B4513]"
                >
                  Select All
                </button>
                <button
                  onClick={handlePrint}
                  className="bg-[#8B4513] text-white px-2 py-1 text-xs rounded hover:bg-[#DEB887] hover:text-[#8B4513] no-print rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500"
                >
                  Print
                </button>
              </div>
            </div>

            <div className="mt-2 text-[#8B4513] text-[8px] text-center border-t-2 border-[#8B4513] pt-1">
              <p>
                बुकिंग की पुष्टि के समय कुल राशि का 25% एडवांस भुगतान करना होगा।
                विवाह की तिथि से 15 दिन पूर्व कुल राशि का
              </p>
              <p>
                60% भुगतान करना होगा। विवाह के दिन शेष 15% राशि का भुगतान करना
                होगा।
              </p>
              <p className="mt-1">
                कृपया इस समझौते को स्वीकार करने के लिए हस्ताक्षर करें।       
              </p>
              <div className="flex justify-end mt-1 pr-8">
                <p>हस्ताक्षर ______________________</p>
              </div>
              <p className="font-bold mt-1">धन्यवाद!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print view - only visible when printing */}
      <div className="hidden print:block print-only print-container">
        <div className="a4-container">
          <div className="a4-content bg-[url('./assets/checklist1.png')] bg-no-repeat bg-cover">
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex justify-between mt-[150px] mb-2">
                <div className="flex items-center">
                  <span className="text-[#8B4513] font-bold mr-2 text-xs">NAME:</span>
                  <span className="border-b-2 border-[#8B4513] bg-transparent px-2 w-48 text-xs">{name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#8B4513] font-bold mr-2 text-xs">DATE:</span>
                  <span className="border-b-2 border-[#8B4513] bg-transparent px-2 w-32 text-xs">{date}</span>
                </div>
              </div>

              <div className="flex flex-nowrap gap-1 justify-between flex-1">
                {/* Column 1 - 5 rows */}
                <div className="flex flex-col gap-y-0.5 flex-1">
                  {categoriesArray.slice(0, 5).map(([category, items]) => (
                    <div key={category} className="bg-[#DEB887]/60 p-0.5 rounded">
                      <h3 className="text-[15px] font-bold mb-0.5 text-[#8B4513] border-b border-[#8B4513]">
                        {category}
                      </h3>
                      <div className="space-y-0.5">
                        {items.map((item) => (
                          <div key={item} className="flex items-center">
                            {selectedItems.has(item) ? (
                              <span className="w-fit h-fit mr-0.5 text-[8px] text-[#8B4513]">✓</span>
                            ) : (
                              <span className="w-fit h-fit mr-0.5 text-[8px] text-[#8B4513]">□</span>
                            )}
                            <span className="text-[#8B4513] w-[110px] text-[8px]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 2 - 3 rows */}
                <div className="flex flex-col gap-y-0.5 flex-1">
                  {categoriesArray.slice(5, 8).map(([category, items]) => (
                    <div key={category} className="bg-[#DEB887]/60 p-0.5 rounded">
                      <h3 className="text-[15px] font-bold mb-0.5 text-[#8B4513] border-b border-[#8B4513]">
                        {category}
                      </h3>
                      <div className="space-y-0.5">
                        {items.map((item) => (
                          <div key={item} className="flex items-center">
                            {selectedItems.has(item) ? (
                              <span className="w-fit h-fit mr-0.5 text-[8px] text-[#8B4513]">✓</span>
                            ) : (
                              <span className="w-fit h-fit mr-0.5 text-[8px] text-[#8B4513]">□</span>
                            )}
                            <span className="text-[#8B4513] w-[110px] text-[8px]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 3 - 4 rows */}
                <div className="flex flex-col gap-y-0.5 flex-1">
                  {categoriesArray.slice(8, 12).map(([category, items]) => (
                    <div key={category} className="bg-[#DEB887]/60 p-0.5 rounded">
                      <h3 className="text-[15px] font-bold mb-0.5 text-[#8B4513] border-b border-[#8B4513]">
                        {category}
                      </h3>
                      <div className="space-y-0.5">
                        {items.map((item) => (
                          <div key={item} className="flex items-center">
                            {selectedItems.has(item) ? (
                              <span className="w-fit h-fit mr-0.5 text-[8px] text-[#8B4513]">✓</span>
                            ) : (
                              <span className="w-fit h-fit mr-0.5 text-[8px] text-[#8B4513]">□</span>
                            )}
                            <span className="text-[#8B4513] w-[110px] text-[8px]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 4 - 5 rows */}
                <div className="flex flex-col gap-y-0.5 flex-1">
                  {categoriesArray.slice(12, 17).map(([category, items]) => (
                    <div key={category} className="bg-[#DEB887]/60 p-0.5 rounded">
                      <h3 className="text-[15px] font-bold mb-0.5 text-[#8B4513] border-b border-[#8B4513]">
                        {category}
                      </h3>
                      <div className="space-y-0.5">
                        {items.map((item) => (
                          <div key={item} className="flex items-center">
                            {selectedItems.has(item) ? (
                              <span className="w-fit h-fit mr-0.5 text-[8px] text-[#8B4513]">✓</span>
                            ) : (
                              <span className="w-fit h-fit mr-0.5 text-[8px] text-[#8B4513]">□</span>
                            )}
                            <span className="text-[#8B4513] w-[110px] text-[8px]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 5 - 5 rows */}
                <div className="flex flex-col gap-y-0.5 flex-1">
                  {categoriesArray.slice(17, 22).map(([category, items]) => (
                    <div key={category} className="bg-[#DEB887]/60 p-0.5 rounded">
                      <h3 className="text-[15px] font-bold mb-0.5 text-[#8B4513] border-b border-[#8B4513]">
                        {category}
                      </h3>
                      <div className="space-y-0.5">
                        {items.map((item) => (
                          <div key={item} className="flex items-center">
                            {selectedItems.has(item) ? (
                              <span className="w-fit h-fit mr-0.5 text-[8px] text-[#8B4513]">✓</span>
                            ) : (
                              <span className="w-fit h-fit mr-0.5 text-[8px] text-[#8B4513]">□</span>
                            )}
                            <span className="text-[#8B4513] w-[110px] text-[8px]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex justify-end items-center">
                <div className="text-[#8B4513] font-bold text-xs">
                  Selected Items: {selectedItems.size}
                </div>
              </div>

              <div className="mt-2 text-[#8B4513] text-[10px] text-center border-t-2 border-[#8B4513] pt-1">
                <p>
                  बुकिंग की पुष्टि के समय कुल राशि का 25% एडवांस भुगतान करना होगा।
                  विवाह की तिथि से 15 दिन पूर्व कुल राशि का
                </p>
                <p>
                  60% भुगतान करना होगा। विवाह के दिन शेष 15% राशि का भुगतान करना
                  होगा।
                </p>
                <p className="mt-1">
                  कृपया इस समझौते को स्वीकार करने के लिए हस्ताक्षर करें।       
                </p>
                <div className="flex justify-end mt-1 pr-8">
                  <p>हस्ताक्षर ______________________</p>
                </div>
                <p className="font-bold mt-1">धन्यवाद!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/*   
npm run dev -- --host 
npm run dev -- --host 0.0.0.0 --port 3000
*/
