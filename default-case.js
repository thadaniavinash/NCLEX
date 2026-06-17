// Default NCLEX NGN Case Study based on Cardio Case Study 1 images, mapped to new standardized NGN question types
window.DEFAULT_CASE = {
  "id": "cardio-case-1",
  "disorder": "Cardiovascular Disorders",
  "title": "Cardiovascular Case Study 1",
  "description": "72-year-old male client in the emergency department (ED) with shortness of breath and history of hypertension and myocardial infarction.",
  "screens": [
    {
      "step": 1,
      "leftContent": {
        "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
        "tabs": [
          {
            "id": "hp",
            "title": "History and Physical",
            "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
          },
          {
            "id": "nn",
            "title": "Nurses' Notes",
            "content": "07:30 - Client arrived via ambulance in moderate respiratory distress. Placed on cardiac monitor showing sinus tachycardia. Respiration shallow and labored. Bilateral crackles auscultated in lower lung bases. Pitting edema (1+) noted in bilateral ankles. Daughter reports client ran out of his blood pressure medications 2 weeks ago and has had progressive shortness of breath over the last 3 days."
          }
        ]
      },
      "question": {
        "type": "select_all",
        "stem": "Which of the following findings require follow-up? Select all that apply.",
        "options": [
          { "text": "lung assessment", "correct": true },
          { "text": "client orientation", "correct": false },
          { "text": "capillary refill time", "correct": false },
          { "text": "vital signs", "correct": true },
          { "text": "pedal pulses", "correct": false },
          { "text": "heart sounds", "correct": true }
        ],
        "explanation": "Lung assessment (crackles, distress), vital signs (tachycardia, tachypnea, hypoxia), and heart sounds (risk of S3 due to heart failure secondary to MI and hypertension) all require immediate follow-up. Client orientation is normal and peripheral perfusion (pedal pulses/capillary refill) is not the primary acute concern compared to airway/breathing/cardiovascular status."
      }
    },
    {
      "step": 2,
      "leftContent": {
        "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
        "tabs": [
          {
            "id": "hp",
            "title": "History and Physical",
            "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
          },
          {
            "id": "nn",
            "title": "Nurses' Notes",
            "content": "08:00 - Client's breathing remains labored. Productive cough noted with small amounts of pink-tinged frothy sputum. Distended jugular veins observed when head of bed is elevated to 45 degrees. Abdomen appears slightly distended; client reports a feeling of fullness and bloating. Right upper quadrant tenderness noted on palpation, suspect hepatomegaly. Edema in lower extremities now assessed as 2+ pitting dependent edema."
          }
        ]
      },
      "question": {
        "type": "matrix_mc",
        "stem": "For each client finding, click to specify if the finding is consistent with the disease process of left-sided heart failure or right-sided heart failure.",
        "matrix": {
          "columns": ["Left-sided Heart Failure", "Right-sided Heart Failure"],
          "rows": [
            { "text": "Jugular venous distention", "correctIndex": 1 },
            { "text": "Pink, frothy sputum", "correctIndex": 0 },
            { "text": "Dyspnea", "correctIndex": 0 },
            { "text": "Dependent edema", "correctIndex": 1 },
            { "text": "Ascites", "correctIndex": 1 },
            { "text": "Hepatomegaly", "correctIndex": 1 }
          ]
        },
        "explanation": "Left-sided heart failure causes pulmonary congestion (dyspnea, pink frothy sputum). Right-sided heart failure causes systemic venous congestion (jugular venous distention, dependent edema, ascites, hepatomegaly)."
      }
    },
    {
      "step": 3,
      "leftContent": {
        "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
        "tabs": [
          {
            "id": "hp",
            "title": "History and Physical",
            "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
          },
          {
            "id": "nn",
            "title": "Nurses' Notes",
            "content": "08:15 - Provider has examined the client and is writing admission and stabilization orders. Client is currently sitting on the edge of the stretcher gasping for breath. SpO2 is 89% on 6L face mask. Heart rate is 108 bpm. Blood pressure is 172/98 mmHg."
          }
        ]
      },
      "question": {
        "type": "dropdown_cloze",
        "stem": "Complete the following sentence by choosing from the list of options.",
        "cloze": {
          "text": "The nurse should first place the client on [[drop0]] position, followed by [[drop1]], as ordered.",
          "dropdowns": [
            {
              "placeholder": "Choose...",
              "options": [
                { "text": "high-Fowler's", "correct": true },
                { "text": "supine", "correct": false },
                { "text": "prone", "correct": false },
                { "text": "Trendelenburg", "correct": false }
              ]
            },
            {
              "placeholder": "Choose...",
              "options": [
                { "text": "initiating non-rebreather mask oxygen therapy", "correct": true },
                { "text": "administering a rapid IV fluid bolus", "correct": false },
                { "text": "performing chest physiotherapy", "correct": false },
                { "text": "preparing for immediate endotracheal intubation", "correct": false }
              ]
            }
          ]
        },
        "explanation": "Placing the client in high-Fowler's position reduces venous return (preload) and allows maximum lung expansion. Elevating oxygen delivery via a non-rebreather mask is the immediate next step to address severe hypoxia (SpO2 89%) before invasive measures like intubation."
      }
    },
    {
      "step": 4,
      "leftContent": {
        "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
        "tabs": [
          {
            "id": "hp",
            "title": "History and Physical",
            "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
          },
          {
            "id": "nn",
            "title": "Nurses' Notes",
            "content": "08:30 - IV furosemide 40mg was administered stat. Foley catheter inserted with 150mL of concentrated amber urine returned immediately. Orders for diagnostic tests have been received."
          }
        ]
      },
      "question": {
        "type": "matrix_mc",
        "stem": "For each potential diagnostic test, indicate whether the test is anticipated or not anticipated for the care of the client.",
        "matrix": {
          "columns": ["Anticipated", "Not Anticipated"],
          "rows": [
            { "text": "Liver function test", "correctIndex": 0 },
            { "text": "Chest x-ray", "correctIndex": 0 },
            { "text": "Echocardiogram", "correctIndex": 0 },
            { "text": "Complete blood count", "correctIndex": 0 },
            { "text": "Electroencephalogram", "correctIndex": 1 },
            { "text": "Electrocardiogram", "correctIndex": 0 },
            { "text": "Ventriculostomy", "correctIndex": 1 },
            { "text": "Pulmonary function test", "correctIndex": 1 }
          ]
        },
        "explanation": "Anticipated tests include Liver Function Tests (to evaluate hepatic congestion from right heart failure), Chest X-ray (pulmonary congestion/cardiomegaly), Echocardiogram (EF and structural dysfunction), CBC (general assessment), and ECG (ischemia/infarction/rhythm). Non-anticipated tests include EEG (for seizures/brain activity), Ventriculostomy (intracranial pressure monitoring), and Pulmonary Function Tests (not for acute cardiac dyspnea management)."
      }
    },
    {
      "step": 5,
      "leftContent": {
        "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
        "tabs": [
          {
            "id": "hp",
            "title": "History and Physical",
            "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
          },
          {
            "id": "labs",
            "title": "Lab Results",
            "content": "BNP: 1,250 pg/mL (Elevated)\nTroponin I: 0.02 ng/mL (Normal)\nBUN: 28 mg/dL (Elevated)\nCreatinine: 1.4 mg/dL (Slightly Elevated)\nChest X-Ray: Cardiomegaly with diffuse bilateral alveolar infiltrates consistent with pulmonary edema."
          }
        ]
      },
      "question": {
        "type": "multiple_choice",
        "stem": "After multiple diagnostic tests, it was confirmed that the client has left-sided heart failure that has progressed to the right side. Which of the following orders should the nurse question when caring for this client? Select one:",
        "options": [
          { "text": "epinephrine", "correct": true },
          { "text": "ramipril", "correct": false },
          { "text": "nitroglycerin", "correct": false },
          { "text": "metoprolol", "correct": false }
        ],
        "explanation": "Epinephrine is a potent beta-1 and alpha-1 agonist that increases heart rate, cardiac workload, and myocardial oxygen demand, which can exacerbate heart failure and induce myocardial ischemia. Ramipril (ACE inhibitor) and Nitroglycerin (vasodilator) are standard treatments to reduce afterload and preload, and Metoprolol (beta-blocker) is part of long-term therapy once stabilized."
      }
    },
    {
      "step": 6,
      "leftContent": {
        "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
        "tabs": [
          {
            "id": "hp",
            "title": "History and Physical",
            "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
          },
          {
            "id": "nn",
            "title": "Nurses' Notes",
            "content": "12:00 - Client's symptoms have significantly improved following administration of IV loop diuretics. Breathing is comfortable at 18 breaths/min on 2L nasal cannula, SpO2 96%. Plan is to transition to oral medications and discharge home with close outpatient follow-up. Discharging nurse is preparing lifestyle modification education."
          }
        ]
      },
      "question": {
        "type": "select_n",
        "limit": 3,
        "stem": "Upon discharge, the nurse is educating the client on appropriate lifestyle modifications. Select the 3 statements by the nurse that are not appropriate to educate the client.",
        "options": [
          { "text": "monitor for signs of fluid retention", "correct": false },
          { "text": "contact the physician if you gain more than 0.5 lbs overnight", "correct": true },
          { "text": "limit smoking to 1 cigarette a day", "correct": true },
          { "text": "increase fluid intake per day", "correct": true },
          { "text": "consume a low sodium diet", "correct": false },
          { "text": "medications must be taken as prescribed", "correct": false },
          { "text": "monitor weight regularly", "correct": false }
        ],
        "explanation": "1. Gaining 0.5 lbs overnight is normal fluctuation; patients are taught to report 2-3 lbs in 24 hours or 5 lbs in a week. 2. Patients must stop smoking entirely, not limit to 1 cigarette. 3. Heart failure patients require fluid restriction, not increased fluids."
      }
    }
  ]
};
